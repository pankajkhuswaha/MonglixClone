import React from "react";
import "./bulk.css";
import MultipleSelect from "./MultipleSelect";
import { useSelector } from "react-redux";
const Bulk = () => {
  const site = useSelector((s) => s.site.data);
;

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
                <div className="rfq-form-container">
                  <h2>
                    Fill your bulk query requirement & our experts will get in
                    touch with you within 30 min.
                  </h2>
                  <form
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
                  </form>
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
