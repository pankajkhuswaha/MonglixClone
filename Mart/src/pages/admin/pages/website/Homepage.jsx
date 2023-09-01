import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { updateSiteConfig } from "../../../../features/Website/configSlice";

const Homepage = () => {
  const siteConfig = useSelector((st) => st.site.data);
  const dispatch = useDispatch();
  
  const { values, handleSubmit, handleChange, setFieldValue } = useFormik({
    initialValues: {
      name: "",
      logo: "",
      mainbg: "",
      primarybg: "",
      secondarybg: "",
      homepageBanner: "",
    },
    onSubmit: () => {
      dispatch(updateSiteConfig(values));
    },
  });

  useEffect(() => {
    if (siteConfig?.name) {
     setFieldValue("name",siteConfig?.name)
     setFieldValue("logo",siteConfig?.logo)
     setFieldValue("mainbg",siteConfig?.mainbg)
     setFieldValue("primarybg",siteConfig?.primarybg)
     setFieldValue("secondarybg",siteConfig?.secondarybg)
     setFieldValue("homepageBanner",siteConfig?.homepageBanner)
    }
  }, [siteConfig]);

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
              Add Website logo :
            </label>
            <input
              type="file"
              className="form-control"
              name="name"
              value={values.logo}
              onChange={handleChange}
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
        </Row>
        <button type="submit" className="btn btn-outline-primary">
          Change Occurence
        </button>
      </form>
    </div>
  );
};

export default Homepage;
