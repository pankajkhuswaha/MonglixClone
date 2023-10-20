import "./bulk.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addbulkUs } from "../../features/admin/adminSlice";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  mobile: Yup.string().required("Mobile number is required"),
  productName: Yup.string().required("Select at least one product type"),
  quantity: Yup.number()
    .required("Quantity is required")
    .positive("Quantity must be positive"),
});



const Bulk = () => {
  const site = useSelector((s) => s.site.data);
  const products = useSelector((state) => state.products?.products);
  const productName = products?.map((pro)=>pro.name)
  const dispatch = useDispatch()
  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(addbulkUs(values))
    setSubmitting(false);
  };


  return (
    <>
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
                      productName: "",
                      quantity: "",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    {({ isSubmitting }) => (
                      <Form className="personal-details ng-pristine ng-invalid ng-touched">
                        <div className="row">
                          <div className="w-full md:w-1/2  form-pd-field">
                            <label htmlFor="name">Name</label>
                            <Field
                              type="text"
                              id="name"
                              name="name"
                              className="ng-pristine ng-invalid ng-touched"
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
                            <label htmlFor="productName" className="mb-2">Select Product Type</label>
                            <Field
                              as="select"
                              id="productName"
                              name="productName"
                            >
                              <option value="" label="Select a product type" />
                              {productName?.map((nam,i)=> <option width={400} key={i}>{nam}</option>)}
                            </Field>
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
                  {/* <form
                    noValidate
                    className="personal-details ng-pristine ng-invalid ng-touched"
                  >
                    <div className="row">
                      <div className="col-md-6 form-pd-field">
                        <label>Name</label>
                        <div
                          id="bulk-autocomp"
                          className="value-auto-co prodType"
                        >
                          <input
                            type="text"
                            placeholder="Enter Name"
                            className="ng-pristine ng-invalid ng-touched"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 form-pd-field">
                        <label>Mobile Number</label>
                        <input
                          type="text"
                          placeholder="Enter your Mobile Number"
                          className="ng-pristine ng-invalid ng-touched"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 form-pd-field">
                        <label>Select Product Type</label>
                        <MultipleSelect />  
                      </div>

                      <div className="col-md-6 form-pd-field">
                        <label>Quantity</label>
                        <input
                          type="number"
                          placeholder="Enter Product Quantity"
                          className="ng-untouched ng-pristine ng-invalid"
                        />
                      </div>
                    </div>

                    <div className="submit-area rounded">
                      <button
                        onClick={(e) => e.preventDefault()}
                        style={{ background: site.primarybg }}
                      >
                        SUBMIT REQUEST
                      </button>
                    </div>
                  </form> */}
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
              <h4 className="pad-t-10 text-center f-size-15">
                2. Receive Quotes
              </h4>
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
                Once you like the quotes, lets <br /> finalize and deliver your
                product.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bulk;
