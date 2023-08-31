const multer = require("multer");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");
const compressImages = require("compress-images");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log(req.file);
    cb(null, path.join(__dirname, "../public/images/"));
  },
  filename: function (req, file, cb) {
    const uniquesuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniquesuffix + ".jpeg");
  },
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb({ message: "Unsupported file format" }, false);
  }
};

const uploadPhoto = multer({
  storage: storage,
  fileFilter: multerFilter,
  limits: { fileSize: 5 * 1024 * 1024 },
});

// const productImgResize = async (req, res, next) => {
//   if (!req.files) return next();
//   await Promise.all(
//     req.files.map(async (file) => {
//       await sharp(file.path.replace(/\/\/+/g, "/"))
//         .resize(300, 300)
//         .toFormat("jpeg")
//         .jpeg({ quality: 90 })
//         .toFile(
//           `./public/images/products/${file.filename.replace(/\/\/+/g, "/")}`
//         );
//       fs.unlinkSync(
//         `./public/images/products/${file.filename.replace(/\/\/+/g, "/")}`
//       );
//     })
//   );
//   next();
// };
const productImgResize = async (req, res, next) => {
  if (!req.files) return res.status(500).send({ error: "No Images Found" });

  const processedPaths = [];

  try {
    await Promise.all(
      req.files.map(async (file) => {
        const outputPath = path.join(
          __dirname,
          "../public/images/products/",
          file.filename
        );

        await sharp(file.path.replace(/\/\/+/g, "/"))
          .resize(300, 300)
          .toFormat("jpeg")
          .jpeg({ quality: 90 })
          .toFile(outputPath);

        fs.unlinkSync(file.path.replace(/\/\/+/g, "/")); // Remove original uploaded image

        const compressOutputPath = path.join(
          __dirname,
          "../public/images/products/compressed/",
          file.filename
        );

        // Compress the resized image using imagemin
        await imagemin([outputPath], {
          destination: compressOutputPath,
          plugins: [imageminJpegtran()],
        });

        processedPaths.push(compressOutputPath); // Store the compressed path
      })
    );

    req.processedPaths = processedPaths; // Attach the compressed paths to the request object
    next();
  } catch (error) {
    res.send(error); // Pass the error to the next middleware (error handling middleware)
  }
};


const uploadImage = async (req, res) => {
  try {
    // Use the processedPaths array from the request object
    const processedPaths = req.processedPaths;

    if (processedPaths?.length === 0) {
      return res.status(400).json({ error: "No files were uploaded." });
    }

    res.json(processedPaths);
  } catch (error) {
    console.error("Error during file upload:", error);
    res.status(500).json({ error: "An error occurred during file upload." });
  }
};

module.exports = { uploadPhoto, productImgResize, uploadImage };
