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
      onSubmit: (values) => {
        if (values.images.length < 1) {
          toast.error("Please select at least 1 product images.");
        } else {
          dispatch(addAProduct(values));
          dispatch(getProducts());
          if (editproduct) {
            navigate("/admin/products");
          }
          resetForm();
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

  //TODO This part of code is wriiten to  drag the images in upload images
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

  //* -------------------End of Code---------------------------------------

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
                <div className="mb-6 max-sm:w-[100%] md:w-[33.3%]">
                  <label>Product Name</label>
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    required
                    value={values.name}
                    className="form-control"
                    id="productname"
                    placeholder="Enter Product name"
                  />
                </div>
                <div className="mb-6 max-sm:w-[100%] md:w-[33.3%]">
                  <label>Product Category</label>
                  <input
                    type="text"
                    name="category"
                    onChange={handleChange}
                    required
                    value={values.category}
                    className="form-control"
                    id="productname"
                    placeholder="Enter Product Category"
                  />
                </div>
                <div className="mb-6 max-sm:w-[100%] md:w-[33.3%]">
                  <label>Product Sub-Category</label>
                  <input
                    type="text"
                    name="subcategory"
                    onChange={handleChange}
                    required
                    value={values.subcategory}
                    className="form-control"
                    id="productname"
                    placeholder="Enter Product Sub Category"
                  />
                </div>
                <div className="mb-6 max-sm:w-[100%] md:w-[33.3%]">
                  <label>Product Brand</label>
                  <input
                    type="text"
                    name="brand"
                    onChange={handleChange}
                    required
                    value={values.brand}
                    className="form-control"
                    id="productname"
                    placeholder="Enter Product Brand"
                  />
                </div>
                <div className="mb-6 max-sm:w-[100%] md:w-[33.3%]">
                  <label>Price</label>
                  <input
                    type="number"
                    name="price"
                    value={values.price}
                    onChange={handleChange}
                    required
                    className="form-control"
                    placeholder="Enter Price"
                  />
                </div>
                <div className="mb-6 max-sm:w-[100%] md:w-[33.3%]">
                  <label>Price Per Pieces</label>
                  <input
                    type="number"
                    name="perpiece"
                    value={values.perpiece}
                    onChange={handleChange}
                    required
                    className="form-control"
                    placeholder="Enter Price per Pieces"
                  />
                </div>
                <div className="mb-6 max-sm:w-[100%] md:w-[33.3%]">
                  <label>Item Code</label>
                  <input
                    type="text"
                    name="itemCode"
                    value={values.itemCode}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter Item Code"
                  />
                </div>
                <div className="mb-6 max-sm:w-[100%] md:w-[33.3%]">
                  <label>HSN Code</label>
                  <input
                    type="text"
                    name="hsnCode"
                    value={values.hsnCode}
                    onChange={handleChange}
                    required
                    className="form-control"
                    placeholder="Enter HSN Code"
                  />
                </div>
                <div className="mb-6 max-sm:w-[100%] md:w-[33.3%]">
                  <label>Unit Of Measurement</label>
                  <input
                    type="text"
                    name="unitMeausrement"
                    value={values.unitMeausrement}
                    onChange={handleChange}
                    required
                    className="form-control"
                    placeholder="Enter Unit Of Measurement"
                  />
                </div>
                <div className="mb-6 max-sm:w-[100%] md:w-[33.3%]">
                  <label>Measurement</label>
                  <input
                    type="number"
                    name="meausrement"
                    value={values.meausrement}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter Measurement"
                  />
                </div>
                <div className="mb-6 max-sm:w-[100%] md:w-[33.3%]">
                  <label>Retail Discount</label>
                  <input
                    type="number"
                    name="retaildiscount"
                    value={values.retaildiscount}
                    onChange={handleChange}
                    required
                    className="form-control"
                    placeholder="Enter Retail Discount"
                  />
                </div>
                <div className="mb-6 max-sm:w-[100%] md:w-[33.3%]">
                  <label>Silver Discount</label>
                  <input
                    type="number"
                    name="silverdiscount"
                    value={values.silverdiscount}
                    onChange={handleChange}
                    required
                    className="form-control"
                    placeholder="Enter Silver Discount"
                  />
                </div>
                <div className="mb-6 max-sm:w-[100%] md:w-[33.3%]">
                  <label>Gold Discount</label>
                  <input
                    type="number"
                    name="golddiscount"
                    value={values.golddiscount}
                    onChange={handleChange}
                    required
                    className="form-control"
                    placeholder="Enter Gold Discount"
                  />
                </div>
                <div className="mb-6 max-sm:w-[100%] md:w-[33.3%]">
                  <label>Platinum Discount</label>
                  <input
                    type="number"
                    name="platinumdiscount"
                    value={values.platinumdiscount}
                    onChange={handleChange}
                    required
                    className="form-control"
                    placeholder="Enter Platinum Discount"
                  />
                </div>
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
                <div className="mb-4 h-32">
                  <label>Discription </label>
                  <ReactQuill
                    theme="snow"
                    name="mindiscription"
                    onChange={handleChange("mindiscription")}
                    value={values.mindiscription}
                    required
                    className="h-24"
                  />
                </div>
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
              {/* <div className="col-12 mb-6">
                <label htmlFor="banner-img">Upload Banner Image</label>
                <input
                  type="file"
                  name="banner-img"
                  onChange={(e) => handleBannerImage(e)}
                  required={editproduct === null ? true : false}
                  className="form-control"
                />
              </div>
              {values.bannerimg && (
                <div className="row mb-6 p-2 items-center justify-center">
                  <img
                    src={values.bannerimg}
                    alt="product image"
                    className="rounded h-auto"
                  />
                </div>
              )} */}

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
