import React from 'react';
import './contact.css'
import { useState } from 'react';


const ContactUs = () => {
    const [selectedOption, setSelectedOption] = useState("Rate Query");
    const [customReason, setCustomReason] = useState("");

    const handleOptionChange = (e) => {
      setSelectedOption(e.target.value);
    };
  return (
    <>
      <div className="flex justify-between items-center  p-5">
        <div className="w-[50%]">
          <p className="text-[#ff4268] text-4xl font-semibold">Contact Us</p>
          <p className="text-[#636060] text-xl font-semibold mt-2">
            Support team ready to help
          </p>
          <p className="text-[#0e0d0d] text-md font-semibold mt-3">
            We are a highly agile and nimble footed organization which believes
            in a collaborative approach to solve problems of the world. And that
            is why the culture of customer feedback and satisfaction ranks high
            on our agenda. We are happy to help you round the clock to the best
            of our ability.
          </p>
        </div>
        <div className="w-[50%] flex justify-center ">
          <img src="https://www.moglix.com/assets/img/contact-img.png" alt="" />
        </div>
      </div>

      {/* <div>
        <div className="contact_us_2">
          <div className="responsive-container-block big-container">
            <div className="blueBG"></div>
            <div className="responsive-container-block container">
              <form className="form-box">
                <div className="container-block form-wrapper">
                  <p className="text-blk contactus-head">Get in Touch</p>
                  <p className="text-blk contactus-subhead">
                    Nunc erat cursus tellus gravida.
                  </p>
                  <div className="responsive-container-block">
                    <div
                      className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6"
                      id="i10mt"
                    >
                      <p className="text-blk input-title">FIRST NAME</p>
                      <input
                        className="input"
                        id="ijowk"
                        name="FirstName"
                        placeholder="Please enter first name..."
                      />
                    </div>
                    <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                      <p className="text-blk input-title">LAST NAME</p>
                      <input
                        className="input"
                        id="indfi"
                        name="Last Name"
                        placeholder="Please enter last name..."
                      />
                    </div>
                    <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                      <p className="text-blk input-title">EMAIL</p>
                      <input
                        className="input"
                        id="ipmgh"
                        name="Email"
                        placeholder="Please enter email..."
                      />
                    </div>
                    <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                      <p className="text-blk input-title">PHONE NUMBER</p>
                      <input
                        className="input"
                        id="imgis"
                        name="PhoneNumber"
                        placeholder="Please enter phone number..."
                      />
                    </div>
                    <div
                      className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12"
                      id="i634i"
                    >
                      <p className="text-blk input-title">
                        WHAT DO YOU HAVE IN MIND
                      </p>
                      <textarea
                        className="textinput"
                        id="i5vyy"
                        placeholder="Please enter query..."
                      ></textarea>
                    </div>
                  </div>
                  <button className="submit-btn">Submit</button>
                </div>
                <div className="social-media-links">
                  <a href="#" id="ix94i-2">
                    <img
                      className="link-img"
                      src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-twitter.png"
                    />
                  </a>
                  <a href="#">
                    <img
                      className="link-img"
                      src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-facebook.png"
                    />
                  </a>
                  <a href="#">
                    <img
                      className="link-img"
                      src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-google.png"
                    />
                  </a>
                  <a href="#" id="izldf-2">
                    <img
                      className="link-img"
                      src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-instagram.png"
                    />
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div> */}

      <div>
        <div className="contact_us_2">
          <div className="responsive-container-block big-container">
            <div className="blueBG"></div>
            <div className="responsive-container-block container">
              <form className="form-box">
                <div className="container-block form-wrapper">
                  <p className="text-blk contactus-head">Get in Touch</p>
                  <p className="text-blk contactus-subhead">
                    Feel Free to Contact
                  </p>
                  <div className="responsive-container-block">
                    <div
                      className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6"
                      id="i10mt"
                    >
                      <p className="text-blk input-title">FIRST NAME</p>
                      <input
                        className="input"
                        id="ijowk"
                        name="FirstName"
                        placeholder="Please enter first name..."
                      />
                    </div>
                    <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                      <p className="text-blk input-title">LAST NAME</p>
                      <input
                        className="input"
                        id="indfi"
                        name="Last Name"
                        placeholder="Please enter last name..."
                      />
                    </div>
                    <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                      <p className="text-blk input-title">EMAIL</p>
                      <input
                        className="input"
                        id="ipmgh"
                        name="Email"
                        placeholder="Please enter email..."
                      />
                    </div>
                    <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                      <p className="text-blk input-title">PHONE NUMBER</p>
                      <input
                        className="input"
                        id="imgis"
                        name="PhoneNumber"
                        placeholder="Please enter phone number..."
                      />
                    </div>
                    <div
                      className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12"
                      id="i634i"
                    >
                      <p className="text-blk input-title w-full">
                        SELECT REASON
                      </p>
                      <select
                        className="input"
                        value={selectedOption}
                        onChange={handleOptionChange}
                      >
                        <option value="Rate Query">Rate Query</option>
                        <option value="Price Discount">Price Discount</option>
                        <option value="Complaint">Complaint</option>
                        <option value="Other">
                          Not mentioned above reason
                        </option>
                      </select>
                      {selectedOption === "Other" && (
                        <textarea
                          className="textinput m-3"
                          id="i5vyy"
                          value={customReason}
                          onChange={(e) => setCustomReason(e.target.value)}
                          placeholder="Please enter query..."
                        ></textarea>
                      )}
                    </div>
                  </div>
                  <button className="submit-btn">Submit</button>
                </div>
                <div className=" social-media-links text-center w-full">
                  <p className='text-md font-bold text-gray-900'>
                    To get in touch with our customer support,
                    <br />
                    call us at +91 8448233444
                    <br />
                    Call Timings:-9:00 AM to 6:00 PM (Mon to Sat)
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs