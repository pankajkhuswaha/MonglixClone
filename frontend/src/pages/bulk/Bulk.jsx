// import "./bulk.css";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { useDispatch, useSelector } from "react-redux";
// import { addbulkUs } from "../../features/admin/adminSlice";

// const validationSchema = Yup.object().shape({
//   name: Yup.string().required("Name is required"),
//   mobile: Yup.string().required("Mobile number is required"),
//   productName: Yup.string().required("Select at least one product type"),
//   quantity: Yup.number()
//     .required("Quantity is required")
//     .positive("Quantity must be positive"),
// });



// const Bulk = () => {
//   const site = useSelector((s) => s.site.data);
//   const products = useSelector((state) => state.products?.products);
//   const productName = products?.map((pro)=>pro.name)
//   const dispatch = useDispatch()
//   const handleSubmit = (values, { setSubmitting }) => {
//     dispatch(addbulkUs(values))
//     setSubmitting(false);
//   };


//   return (
//     <>
//       <div className="row bg-white bulk-enquiry mar-t-10 mar-t-xs-0">
//         <div className="row row-eq-height pad-lr-xs-15 bulk-enquiry-bg">
//           <div className="col-md-12 center-block no-border-xs pad-b-30 mar-t-xs-20 pad-t-xs-5">
//             <div>
//               <div className="rfq">
//                 <div className="rfq-banner">
//                   <h1>
//                     Streamline your business purchasing process and secure the
//                     best quotes today!
//                   </h1>
//                 </div>
//                 <div className="rfq-form-container p-md-5 p-3 w-[90%] md:w-[60%]">
//                   <h2>
//                     Fill your bulk query requirement & our experts will get in
//                     touch with you within 30 min.
//                   </h2>
//                   <Formik
//                     initialValues={{
//                       name: "",
//                       mobile: "",
//                       productName: "",
//                       quantity: "",
//                     }}
//                     validationSchema={validationSchema}
//                     onSubmit={handleSubmit}
//                   >
//                     {({ isSubmitting }) => (
//                       <Form className="personal-details ng-pristine ng-invalid ng-touched">
//                         <div className="row">
//                           <div className="w-full md:w-1/2  form-pd-field">
//                             <label htmlFor="name">Name</label>
//                             <Field
//                               type="text"
//                               id="name"
//                               name="name"
//                               className="ng-pristine ng-invalid ng-touched"
//                               placeholder="Enter Name"
//                             />
//                             <ErrorMessage
//                               name="name"
//                               component="div"
//                               className="error"
//                             />
//                           </div>
//                           <div className="w-full md:w-1/2  form-pd-field">
//                             <label htmlFor="mobile">Mobile Number</label>
//                             <Field
//                               type="number"
//                               id="mobile"
//                               name="mobile"
//                               placeholder="Enter your Mobile Number"
//                             />
//                             <ErrorMessage
//                               name="mobile"
//                               component="div"
//                               className="error"
//                             />
//                           </div>
//                         </div>
//                         <div className="row">
//                           <div className="w-full md:w-1/2  form-pd-field">
//                             <label htmlFor="productName" className="mb-2">Select Product Type</label>
//                             <FormControl sx={{ m: 1, width: 300 }}>
//                               <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
//                               <Select
//                                 labelId="demo-multiple-chip-label"
//                                 id="demo-multiple-chip"
//                                 multiple
//                                 value={personName}
//                                 onChange={handleChange}
//                                 input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
//                                 renderValue={(selected) => (
//                                   <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
//                                     {selected.map((value) => (
//                                       <Chip key={value} label={value} />
//                                     ))}
//                                   </Box>
//                                 )}
//                                 MenuProps={MenuProps}
//                               >
//                                 {productName.map((name) => (
//                                   <MenuItem
//                                     key={name}
//                                     value={name}
//                                     style={getStyles(name, personName, theme)}
//                                   >
//                                     {name}
//                                   </MenuItem>
//                                 ))}
//                               </Select>
//                             </FormControl>

//                             {/* <Field
//                               as="select"
//                               id="productName"
//                               name="productName"
//                             >
//                               <option value="" label="Select a product type" />
//                               {productName?.map((nam,i)=> <option width={400} key={i}>{nam}</option>)}
//                             </Field> */}
//                             <ErrorMessage
//                               name="productName"
//                               component="div"
//                               className="error"
//                             />
//                           </div>
//                           <div className="w-full md:w-1/2  form-pd-field">
//                             <label htmlFor="quantity">Quantity</label>
//                             <Field
//                               type="number"
//                               id="quantity"
//                               name="quantity"
//                               placeholder="Enter Product Quantity"
//                             />
//                             <ErrorMessage
//                               name="quantity"
//                               component="div"
//                               className="error"
//                             />
//                           </div>
//                         </div>
//                         <div className="submit-area rounded">
//                           <button
//                             type="submit"
//                             disabled={isSubmitting}
//                             style={{ background: site.primarybg }}
//                           >
//                             {isSubmitting ? "Submitting..." : "SUBMIT REQUEST"}
//                           </button>
//                         </div>
//                       </Form>
//                     )}
//                   </Formik>

//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="three-simple-steps rfq-inner-setion row-eq-height pad-lr-xs-15 pad-tb-80 light-blue-bg">
//           <h3 className="text-center pb-4 font-semibold">How it Works</h3>
//           <div className="col-sm-8">
//             <div className="col-sm-4 pad-b-xs-40">
//               <img
//                 className="pad-tb-15 wp-45 center-block block"
//                 src="https://cdn.moglix.com/img/others/oct_17/RFQ/place_rfq.png"
//                 alt="Place RFQ"
//               />
//               <h4 className="pad-t-10 text-center f-size-15">1. Place RFQ.</h4>
//               <p className="text-center pad-lr-15 lh-22">
//                 You can place your requests
//                 <br /> manually.
//               </p>
//             </div>
//             <div className="col-sm-4 pad-b-xs-40">
//               <img
//                 className="pad-tb-15 wp-45 center-block block"
//                 src="https://cdn.moglix.com/img/others/oct_17/RFQ/receive_quotes.png"
//                 alt="Receive Quotes"
//               />
//               <h4 className="pad-t-10 text-center f-size-15">
//                 2. Receive Quotes
//               </h4>
//               <p className="text-center pad-lr-15 lh-22">
//                 Our executives will review and <br /> quote within 24 hrs.
//               </p>
//             </div>
//             <div className="col-sm-4">
//               <img
//                 className="pad-tb-15 wp-45 center-block block"
//                 src="https://cdn.moglix.com/img/others/oct_17/RFQ/finalize.png"
//                 alt="Finalize"
//               />
//               <h4 className="pad-t-10 text-center f-size-15">3. Finalize</h4>
//               <p className="text-center pad-lr-15 lh-22">
//                 Once you like the quotes, lets <br /> finalize and deliver your
//                 product.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Bulk;

import React from "react";
import "./bulk.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addbulkUs } from "../../features/admin/adminSlice";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  mobile: Yup.string().required("Mobile number is required"),
  productName: Yup.array()
    .min(1, "Select at least one product type")
    .required("Select at least one product type"),
  quantity: Yup.number()
    .required("Quantity is required")
    .positive("Quantity must be positive"),
});

const Bulk = () => {
  const site = useSelector((s) => s.site.data);
  const products = useSelector((state) => state.products?.products);
  const productName = products?.map((pro) => pro.name);
  const dispatch = useDispatch();

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(addbulkUs(values));
    setSubmitting(false);
  };

  return (
    <div className="row bg-white bulk-enquiry mar-t-10 mar-t-xs-0">
      <div className="row row-eq-height pad-lr-xs-15 bulk-enquiry-bg">
        <div className="col-md-12 center-block no-border-xs pad-b-30 mar-t-xs-20 pad-t-xs-5">
          <div>
            <div className="rfq">
              <div className="rfq-banner">
                <h1>
                  Streamline your business purchasing process and secure the
                  best quotes today!
                </h1>
              </div>
              <div className="rfq-form-container p-md-5 p-3 w-[90%] md:w-[60%]">
                <h2>
                  Fill your bulk query requirement & our experts will get in
                  touch with you within 30 min.
                </h2>
                <Formik
                  initialValues={{
                    name: "",
                    mobile: "",
                    productName: [],
                    quantity: "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ isSubmitting, values, handleChange }) => (
                    <Form className="personal-details ng-pristine ng-invalid ng-touched">
                      <div className="row">
                        <div className="w-full md:w-1/2  form-pd-field">
                          <label htmlFor="name">Name</label>
                          <Field
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter Name"
                          />
                          <ErrorMessage
                            name="name"
                            component="div"
                            className="error"
                          />
                        </div>
                        <div className="w-full md:w-1/2  form-pd-field">
                          <label htmlFor="mobile">Mobile Number</label>
                          <Field
                            type="number"
                            id="mobile"
                            name="mobile"
                            placeholder="Enter your Mobile Number"
                          />
                          <ErrorMessage
                            name="mobile"
                            component="div"
                            className="error"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="w-full md:w-1/2  form-pd-field">
                          <label htmlFor="productName" className="mb-2">
                            Select Product Type
                          </label>
                          <FormControl fullWidth variant="outlined">
                            <InputLabel id="product-type-label">
                              Product Type
                            </InputLabel>
                            <Select
                              labelId="product-type-label"
                              id="productName"
                              name="productName"
                              multiple
                              label="Product Type"
                              value={values.productName}
                              onChange={handleChange}
                              renderValue={(selected) => (
                                <Box
                                  sx={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: 0.5,
                                  }}
                                >
                                  {selected.map((value) => (
                                    <Chip key={value} label={value} />
                                  ))}
                                </Box>
                              )}
                            >
                              {productName.map((name) => (
                                <MenuItem
                                  key={name}
                                  value={name}
                                  style={{
                                    fontWeight: values.productName.indexOf(name) !== -1
                                      ? "bold"
                                      : "normal",
                                  }}
                                >
                                  {name}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                          <ErrorMessage
                            name="productName"
                            component="div"
                            className="error"
                          />
                        </div>
                        <div className="w-full md:w-1/2  form-pd-field">
                          <label htmlFor="quantity">Quantity</label>
                          <Field
                            type="number"
                            id="quantity"
                            name="quantity"
                            placeholder="Enter Product Quantity"
                          />
                          <ErrorMessage
                            name="quantity"
                            component="div"
                            className="error"
                          />
                        </div>
                      </div>
                      <div className="submit-area rounded">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          style={{ background: site.primarybg }}
                        >
                          {isSubmitting ? "Submitting..." : "SUBMIT REQUEST"}
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="three-simple-steps rfq-inner-setion row-eq-height pad-lr-xs-15 pad-tb-80 light-blue-bg">
        <h3 className="text-center pb-4 font-semibold">How it Works</h3>
        <div className="col-sm-8">
          <div className="col-sm-4 pad-b-xs-40">
            <img
              className="pad-tb-15 wp-45 center-block block"
              src="https://cdn.moglix.com/img/others/oct_17/RFQ/place_rfq.png"
              alt="Place RFQ"
            />
            <h4 className="pad-t-10 text-center f-size-15">1. Place RFQ.</h4>
            <p className="text-center pad-lr-15 lh-22">
              You can place your requests
              <br /> manually.
            </p>
          </div>
          <div className="col-sm-4 pad-b-xs-40">
            <img
              className="pad-tb-15 wp-45 center-block block"
              src="https://cdn.moglix.com/img/others/oct_17/RFQ/receive_quotes.png"
              alt="Receive Quotes"
            />
            <h4 className="pad-t-10 text-center f-size-15">2. Receive Quotes</h4>
            <p className="text-center pad-lr-15 lh-22">
              Our executives will review and <br /> quote within 24 hrs.
            </p>
          </div>
          <div className="col-sm-4">
            <img
              className="pad-tb-15 wp-45 center-block block"
              src="https://cdn.moglix.com/img/others/oct_17/RFQ/finalize.png"
              alt="Finalize"
            />
            <h4 className="pad-t-10 text-center f-size-15">3. Finalize</h4>
            <p className="text-center pad-lr-15 lh-22">
              Once you like the quotes, let's <br /> finalize and deliver your
              product.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bulk;
