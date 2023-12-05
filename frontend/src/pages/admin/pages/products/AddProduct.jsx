import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import Dropzone from "react-dropzone";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import { uploadFiles } from "../../../../utils/uploadimg";
import { toggleLoading } from "../../../../features/loading/loadingSlice";
import { addAProduct, getProducts } from "../../../../features/ProductSlice";
import { useEffect } from "react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import { unwrapResult } from "@reduxjs/toolkit";

const AddProduct = () => {
  const dispatch = useDispatch();
  const editproduct = useLocation().state;
  const navigate = useNavigate();
  const site = useSelector((st) => st.site.data);
  const { values, handleSubmit, handleChange, resetForm, setFieldValue } =
    useFormik({
      initialValues: {
        name: "",
        price: "",
        perpiece: "",
        category: "",
        subcategory: "",
        subItems: [],
        brand: "",
        itemCode: "",
        hsnCode: "",
        unitMeausrement: "",
        meausrement: "",
        retaildiscount: "",
        silverdiscount: "",
        golddiscount: "",
        platinumdiscount: "",
        mindiscription: "",
        images: [],
        datasheet: "",
      },
      onSubmit: async (values) => {
        if (values.images.length < 1) {
          toast.error("Please select at least 1 product images.");
        } else {
          try {
            const res = await dispatch(addAProduct(values));
            unwrapResult(res);
            dispatch(getProducts());
            if (editproduct) {
              navigate("/admin/products");
            }
            resetForm();
          } catch (error) {
            toast.error("Error in product add");
          }
        }
      },
    });
  const handleimgUpload = async (e) => {
    if (values.images.length >= 5) {
      toast.error("You already select 5 images.");
    } else {
      dispatch(toggleLoading(true));
      try {
        const res = await uploadFiles(e);
        const images = [...values.images, ...res];
        setFieldValue("images", images);
      } catch (error) {
        toast.error(error.message);
      }
      dispatch(toggleLoading(false));
    }
  };

  //todo code of edit product

  useEffect(() => {
    dispatch(getProducts());
    if (editproduct === null) {
      return;
    } else {
      const keysToExclude = ["_id", "createdAt", "updatedAt", "_v"];
      const updatedData = {};
      Object.keys(editproduct).forEach((fieldName) => {
        if (!keysToExclude.includes(fieldName)) {
          updatedData[fieldName] = editproduct[fieldName];
        }
      });
      Object.keys(updatedData).forEach((fieldName) => {
        setFieldValue(fieldName, updatedData[fieldName]);
      });
    }
  }, [editproduct]);

  const handleChangeDataSheet = async (e) => {
    const file = [e.target.files[0]];
    try {
      const res = await uploadFiles(file);
      setFieldValue("datasheet", res[0]);
    } catch (error) {
      toast.error("Error in uploading datasheet");
    }
  };

  // * This part of code is wriiten to  drag the images in upload images
  const handleDragStart = (index) => (event) => {
    event.dataTransfer.setData("text/plain", index.toString());
  };

  const handleDragOver = () => (event) => {
    event.preventDefault();
  };

  const handleDrop = (index) => (event) => {
    event.preventDefault();

    const sourceIndex = Number(event.dataTransfer.getData("text/plain"));
    const updatedImages = [...values.images];
    const [movedImage] = updatedImages.splice(sourceIndex, 1);
    updatedImages.splice(index, 0, movedImage);
    setFieldValue("images", updatedImages);
  };

  const handleDeleteImage = (imageIndex) => {
    const updatedImages = [...values.images];
    updatedImages.splice(imageIndex, 1);
    setFieldValue("images", updatedImages);
  };

  const renderInput = (name, labeltxt, type, customhandlechange, required) => {
    return (
      <div className="mb-6 max-sm:w-[100%] md:w-[33.3%]">
        <label>{labeltxt}</label>
        <input
          type={type ? type : "text"}
          name={name}
          onChange={customhandlechange ? customhandlechange : handleChange}
          required={required || true}
          value={values[name]}
          className="form-control"
          id="productname"
          placeholder="Enter Product Category"
        />
      </div>
    );
  };

  //* -------------------End of Code---------------------------------------
  const allProducts = useSelector((st) => st.products.products);
  return (
    <>
      <div className="col-12">
        <div className="w-full px-4">
          <div className="bg-white col-12 rounded-lg p-8 sm:p-12 shadow-lg">
            <h3 className="h3 text-center">
              {editproduct === null ? "Add" : "Update"} Product
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="row justify-between">
                {renderInput("name", "Product Name")}
                {renderInput("category", "Product Category")}
                {renderInput("subcategory", "Product Sub-Category")}
                {renderInput("brand", "Product Brand")}
                {renderInput("price", "Product Price", "number")}
                {renderInput("perpiece", "Price Per Pieces")}
                {renderInput("itemCode", "Item Code")}
                {renderInput("hsnCode", "HSN Code")}
                {renderInput("unitMeausrement", "Unit Of Measurement")}
                {renderInput("meausrement", "Measurement")}
                {renderInput("retaildiscount", "Retail Discount", "number")}
                {renderInput("silverdiscount", "Silver Discount", "number")}
                {renderInput("golddiscount", "Gold Discount", "number")}
                {renderInput("platinumdiscount", "Platinum Discount", "number")}
                <div className="mb-6 max-sm:w-[100%] md:w-[33.3%]">
                  <label>Upload DataSheet</label>
                  <input
                    type="file"
                    name="datasheet"
                    onChange={handleChangeDataSheet}
                    className="form-control"
                    placeholder="Enter Price"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label>Select Variant products</label>

                <FormControl fullWidth variant="outlined">
                  <Select
                    labelId="product-type-label"
                    id="subItems"
                    name="subItems"
                    multiple
                    value={values.subItems}
                    onChange={handleChange}
                    renderValue={(selected) => {
                      return (
                        <Box
                          sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 0.5,
                          }}
                        >
                          {selected.map((value, i) => (
                            <Chip key={i} label={value.name} />
                          ))}
                        </Box>
                      );
                    }}
                  >
                    {allProducts?.map((product) => {
                      const { _id, name } = product;
                      return (
                        <MenuItem
                          key={name}
                          value={{ _id, name }}
                          style={{
                            fontWeight:
                              values.subItems.indexOf(name) !== -1
                                ? "bold"
                                : "normal",
                          }}
                        >
                          {name}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </div>

              <div className="mb-12 h-40">
                <label>Discription </label>
                <ReactQuill
                  theme="snow"
                  name="mindiscription"
                  onChange={handleChange("mindiscription")}
                  value={values.mindiscription}
                  required
                  className="h-32"
                />
              </div>

              <div className="my-6 border-2 border-dotted rounded">
                <Dropzone
                  onDrop={(acceptedFiles) => handleimgUpload(acceptedFiles)}
                >
                  {({ getRootProps, getInputProps }) => (
                    <section>
                      <div
                        {...getRootProps()}
                        className="flex flex-col items-center p-2 pb-4"
                      >
                        <input {...getInputProps()} />
                        <AiOutlineCloudUpload fontSize={60} color="gray" />
                        <p>
                          Drag {"'n'"} drop some files here, or click to select
                          files
                        </p>
                        <p className="text-danger text-sm">
                          Please upload minimum 5 images
                        </p>
                        <p className="text-xs text-danger mb-2">
                          Total images size should not be larger than 3 MB
                        </p>
                      </div>
                    </section>
                  )}
                </Dropzone>
              </div>

              {values.images?.length !== 0 && (
                <div
                  className=" conatiner flex-wrap bg-white d-flex justify-content-center p-4 align-items-center rounded shadow-sm mb-3"
                  style={{ gap: "20px" }}
                >
                  {values.images?.map((image, index) => (
                    <div
                      key={index}
                      draggable
                      style={{ cursor: "grab", position: "relative" }}
                      onDragStart={handleDragStart(index)}
                      onDragOver={handleDragOver(index)}
                      onDrop={handleDrop(index)}
                    >
                      <p
                        className="bg-red-600 px-2 rounded-full text-white py-1 position-absolute right-0 text-sm"
                        onClick={() => handleDeleteImage(index)}
                      >
                        X
                      </p>
                      <img
                        style={{ width: 200 }}
                        className="rounded"
                        src={image}
                        alt={`mage ${index}`}
                      />
                    </div>
                  ))}
                </div>
              )}

              <div>
                <button
                  type="submit"
                  className="w-full text-white rounded border border-[skyblue] p-2 transition hover:bg-opacity-90 "
                  style={{ background: site?.primarybg }}
                >
                  {editproduct === null ? "Add" : "Update"} Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
