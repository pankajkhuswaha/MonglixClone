import { useEffect } from "react";
import Row from "react-bootstrap/Row";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { updateSiteConfig } from "../../../../features/Website/configSlice";
import { toggleLoading } from "../../../../features/loading/loadingSlice";
import { uploadFiles } from "../../../../utils/uploadimg";
import ImageDrager from "../../components/ImageDrager";

const Homepage = () => {
  const site = useSelector((st) => st.site.data);
  const dispatch = useDispatch();

  const { values, handleSubmit, handleChange, setFieldValue } = useFormik({
    initialValues: {
      name: "",
      title: "",
      logo: "",
      mainbg: "",
      primarybg: "",
      secondarybg: "",
      headerCol: "",
      footerCol: "",
      textCol: "",
      homepageBanner: [],
    },
    onSubmit: () => {
      dispatch(updateSiteConfig(values));
    },
  });
  const handleimgUpload = async (e, fl) => {
    let files = [];
    if (e.target.files.length === 1) {
      files = [e.target.files[0]];
    } else if (e.target.files.length > 1) {
      files = Array.from(e.target.files);
    }
    dispatch(toggleLoading(true));
    try {
      const res = await uploadFiles(files);
      if (fl === "logo") {
        setFieldValue("logo", res[0]);
      }
      if (fl === "banner") {
        const images = [...values.homepageBanner, ...res];
        if (images.length >= 5) {
          toast.info("You already uploaded 5 images");
        }
        setFieldValue("homepageBanner", images);
      }
    } catch (error) {
      toast.error(error.message);
    }
    dispatch(toggleLoading(false));
  };

  useEffect(() => {
    if (site?.name) {
      setFieldValue("name", site?.name);
      setFieldValue("logo", site?.logo);
      setFieldValue("mainbg", site?.mainbg);
      setFieldValue("primarybg", site?.primarybg);
      setFieldValue("secondarybg", site?.secondarybg);
      setFieldValue("homepageBanner", site?.homepageBanner);
      setFieldValue("headerCol", site?.headerCol);
      setFieldValue("footerCol", site?.footerCol);
      setFieldValue("textCol", site?.textCol);
    }
  }, [site, setFieldValue]);

  const handleDeleteImage = (index) => {
    const updatedImages = [...values.homepageBanner];
    updatedImages.splice(index, 1);
    setFieldValue("homepageBanner", updatedImages);
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit}>
        <Row>
          <div className="col-12 col-md-6 mb-3">
            <label className="text-gray-500 text-sm mb-1">
              Add Website Name :
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={values.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-12 col-md-6 mb-3">
            <label className="text-gray-500 text-sm mb-1">
              Add Website Title :
            </label>
            <input
              type="text"
              className="form-control"
              name="title"
              value={values.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-12 col-md-4 mb-3">
            <label className="text-gray-500 text-sm mb-1">
              Website Main color :
            </label>
            <div className="flex w-full">
              <input
                type="text"
                className="w-[80%] form-control"
                placeholder="Enter color code or linear gradient"
                name="mainbg"
                value={values.mainbg}
                onChange={handleChange}
                style={{
                  background: values.mainbg,
                }}
              />
              <input
                className="w-[20%] form-control-color"
                type="color"
                name="mainbg"
                value={values.mainbg}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <label className="text-gray-500 text-sm mb-1">
              Website Primary color :
            </label>
            <div className="flex w-full">
              <input
                type="text"
                className="w-[80%] form-control"
                placeholder="Enter color code or linear gradient"
                name="primarybg"
                value={values.primarybg}
                onChange={handleChange}
                style={{
                  background: values.primarybg,
                }}
              />
              <input
                className="w-[20%] form-control-color"
                type="color"
                name="primarybg"
                value={values.primarybg}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <label className="text-gray-500 text-sm mb-1">
              Secondary Main color :
            </label>
            <div className="flex w-full">
              <input
                type="text"
                className="w-[80%] form-control"
                placeholder="Enter color code or linear gradient"
                name="secondarybg"
                value={values.secondarybg}
                onChange={handleChange}
                style={{
                  background: values.secondarybg,
                }}
              />
              <input
                className="w-[20%] form-control-color"
                type="color"
                name="secondarybg"
                value={values.secondarybg}
                onChange={handleChange}
              />
            </div>
          </div>
          
          <div className="col-12 col-md-4 mb-3">
          <label className="text-gray-500 text-sm mb-1">
              Header color :
            </label>
          <div className="flex w-full">
            <input
              type="text"
              className="w-[80%] form-control"
              placeholder="Enter color code or linear gradient"
              name="headerCol"
              value={values.headerCol}
              onChange={handleChange}
              style={{
                background: values.headerCol,
              }}
            />
            <input
              className="w-[20%] form-control-color"
              type="color"
              name="headerCol"
              value={values.headerCol}
              onChange={handleChange}
            />
          </div>
            </div>

          <div className="col-12 col-md-4 mb-3">
          <label className="text-gray-500 text-sm mb-1">
              Footer color :
            </label>
            <div className="flex w-full">
              <input
                type="text"
                className="w-[80%] form-control"
                placeholder="Enter color code or linear gradient"
                name="footerCol"
                value={values.footerCol}
                onChange={handleChange}
                style={{
                  background: values.footerCol,
                }}
              />
              <input
                className="w-[20%] form-control-color"
                type="color"
                name="footerCol"
                value={values.footerCol}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="col-12 col-md-4 mb-3">
          <label className="text-gray-500 text-sm mb-1">
              Text color :
            </label>
            <div className="flex w-full">
              <input
                type="text"
                className="w-[80%] form-control"
                placeholder="Enter color code or linear gradient"
                name="textCol"
                value={values.textCol}
                onChange={handleChange}
                style={{
                  background: values.textCol,
                }}
              />
              <input
                className="w-[20%] form-control-color"
                type="color"
                name="textCol"
                value={values.textCol}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-12 col-md-6 mb-3">
            <label className="text-gray-500 text-sm mb-1">
              Add Website logo :
            </label>
            <div className="flex w-full gap-2">
              <input
                type="file"
                className="w-[80%] form-control"
                name="logo"
                accept="image/*"
                onChange={(e) => handleimgUpload(e, "logo")}
              />
              <a
                href={values.logo}
                target="blank"
                style={{
                  background: site.primarybg,
                  borderColor: site.primarybg,
                }}
                className="btn btn-primary"
              >
                view
              </a>
            </div>
            <span className="text-danger">
              Please upload image ratio of 3:1
            </span>
          </div>
          <div className="col-12 col-md-6 mb-3">
            <label className="text-gray-500 text-sm mb-1">Banner Image :</label>
            <input
              type="file"
              className="form-control"
              name="homepageBanner"
              accept="image/*"
              multiple
              onChange={(e) => handleimgUpload(e, "banner")}
            />
            <span className="text-danger text-sm">
              Limit of banner image is 5 of the size width:1200 to 1920 ,height:
              200 to 400.
            </span>
          </div>
          {values.homepageBanner.length !== 0 && (
            <ImageDrager
              images={values.homepageBanner}
              filed={"homepageBanner"}
              setFieldValue={setFieldValue}
              handleDeleteImage={handleDeleteImage}
            />
          )}
        </Row>
        <button type="submit" className="btn btn-outline-primary">
          Change Occurence
        </button>
      </form>
    </div>
  );
};

export default Homepage;
