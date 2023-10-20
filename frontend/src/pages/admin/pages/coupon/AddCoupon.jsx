import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { addCoupon, getAdmindata } from "../../../../features/admin/adminSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import swal from "sweetalert";
import { useNavigate } from 'react-router-dom';

const CouponFormSchema = Yup.object().shape({
  code: Yup.string()
    .required("Code is required")
    .min(6, "Coupon Code must be at least 6 characters")
    .max(12, "Coupon Code must not exceed 12 characters"),
  type: Yup.string()
    .required("Type is required")
    .oneOf(["Percentage", "Fixed"], "Invalid type"),
  discountValue: Yup.number()
    .required("Discount Value is required")
    .min(1, "Discount Value must be greater than or equal to 0"),
});

const AddCoupon = () => {
  const err = {
    color: "red",
    fontSize: "12px",
    padding: "0px 0px 0px 9px",
  };
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <Formik
      initialValues={{
        code: "",
        type: "",
        discountValue: 0,
      }}
      validationSchema={CouponFormSchema}
      onSubmit={(values) => {
        dispatch(addCoupon(values)).then(unwrapResult).then(()=>{
          swal("Created!", "Your coupon is added sucessfully!", "success");
          navigate("/admin/coupon")
          dispatch(getAdmindata())
        })
      }}
    >
      {({ errors, touched }) => {
        return (
          <Form className="row justify-center P-2">
            <h1 className="h4 font-semibold text-center text-muted pb-2 mb-2">
              Create Coupon code
            </h1>
            <div className="col-12 col-md-6 col-xl-4">
              <label htmlFor="code"> Coupon Code</label>
              <Field
                type="text"
                id="code"
                name="code"
                className={`form-control ${
                  touched.code && errors.code ? "is-invalid" : ""
                }`}
              />
              <ErrorMessage style={err} name="code" component="div" />
            </div>

            <div className="col-12 col-md-6 col-xl-4">
              <label htmlFor="type">Type</label>
              <Field
                as="select"
                id="type"
                className={`form-control h-[38px] ${
                  touched.code && errors.code ? "is-invalid" : ""
                }`}
                name="type"
              >
                <option value="" disabled className="text-lg">
                  Select Type
                </option>
                <option value="Percentage" className="text-lg">
                  Percentage
                </option>
                <option value="Fixed" className="text-lg">
                  Fixed
                </option>
              </Field>
              <ErrorMessage style={err} name="type" component="div" />
            </div>

            <div className="col-12 col-md-6 col-xl-4">
              <label htmlFor="discountValue">Discount Value</label>
              <Field
                type="number"
                id="discountValue"
                name="discountValue"
                className={`form-control ${
                  touched.code && errors.code ? "is-invalid" : ""
                }`}
              />
              <ErrorMessage style={err} name="discountValue" component="div" />
            </div>

            <div className="col-12 flex justify-center mt-3 items-center">
              <button type="submit" className="btn btn-outline-success w-40">
                Create
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AddCoupon;
