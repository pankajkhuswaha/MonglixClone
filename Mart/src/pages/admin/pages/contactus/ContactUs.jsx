// import React from "react";
// import "./contact.css";
// import { useState } from "react";
// import { useSelector } from "react-redux";

// const ContactUs = () => {
//   const [selectedOption, setSelectedOption] = useState("");
//   const [customReason, setCustomReason] = useState("");
//   const site = useSelector((st) => st.site.data);
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     mobile: "",
//     reason: selectedOption,
//   });
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };
//   const handleOptionChange = (e) => {
//     setSelectedOption(e.target.value);
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//   };
//   return (
//     <>
//       <div className="flex justify-between flex-col-reverse md:flex-row gap-4 md:gap-0 items-center p-4   md:p-5">
//         <div className="md:w-[50%] w-full ">
//           <p
//             style={{ color: site?.primarybg }}
//             className="text-[#ff4268] text-4xl font-semibold"
//           >
//             Contact Us
//           </p>
//           <p className="text-[#636060] text-xl font-semibold mt-2">
//             Support team ready to help
//           </p>
//           <p className="text-[#0e0d0d] text-md font-semibold mt-3">
//             We are a highly agile and nimble footed organization which believes
//             in a collaborative approach to solve problems of the world. And that
//             is why the culture of customer feedback and satisfaction ranks high
//             on our agenda. We are happy to help you round the clock to the best
//             of our ability.
//             <br />
//             <br />
//             <span className="text-xl">
//               {" "}
//               To get in touch with our customer support,
//             </span>
//             <br />
//             Call us at
//             <span style={{ color: site?.primarybg }} className=" font-bold">
//               +91-7678536510
//             </span>
//             <br />
//             Email:-
//             <span style={{ color: site?.primarybg }} className="font-bold">
//               contact@eprocuretech.com
//             </span>
//           </p>
//         </div>
//         <div className="w-[50%] flex justify-center ">
//           <img src="https://www.moglix.com/assets/img/contact-img.png" alt="" />
//         </div>
//       </div>

//       <div>
//         <div className="contact_us_2">
//           <div className="responsive-container-block big-container">
//             <div className="blueBG"></div>
//             <div className="responsive-container-block container">
//               <form className="form-box" onSubmit={handleSubmit}>
//                 <div className="container-block form-wrapper">
//                   <p
//                     style={{ color: site?.primarybg }}
//                     className="text-blk contactus-head"
//                   >
//                     Get in Touch
//                   </p>
//                   <p className="text-blk contactus-subhead">
//                     Feel Free to Contact
//                   </p>
//                   <div className="responsive-container-block">
//                     <div
//                       className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6"
//                       id="i10mt"
//                     >
//                       <p className="text-blk input-title">FIRST NAME</p>
//                       <input
//                         type="text"
//                         className="input"
//                         id="firstName"
//                         name="firstName"
//                         value={formData.firstName}
//                         onChange={handleInputChange}
//                         placeholder="Please enter first name..."
//                       />
//                     </div>
//                     <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
//                       <p className="text-blk input-title">LAST NAME</p>
//                       <input
//                         className="input"
//                         id="lastName"
//                         type="text"
//                         name="lastName"
//                         value={formData.lastName}
//                         onChange={handleInputChange}
//                         placeholder="Please enter last name..."
//                       />
//                     </div>
//                     <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
//                       <p className="text-blk input-title">EMAIL</p>
//                       <input
//                         className="input"
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         placeholder="Please enter email..."
//                       />
//                     </div>
//                     <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
//                       <p className="text-blk input-title">PHONE NUMBER</p>
//                       <input
//                         className="input"
//                         type="text"
//                         id="mobile"
//                         name="mobile"
//                         value={formData.mobile}
//                         onChange={handleInputChange}
//                         placeholder="Please enter phone number..."
//                       />
//                     </div>
//                     <div
//                       className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12"
//                       id="i634i"
//                     >
//                       <p className="text-blk input-title w-full">
//                         SELECT REASON
//                       </p>
//                       <select
//                         className="input"
//                         value={selectedOption}
//                         onChange={handleOptionChange}
//                       >
//                         <option value="Rate Query">Rate Query</option>
//                         <option value="Price Discount">Price Discount</option>
//                         <option value="Complaint">Complaint</option>
//                         <option value="Other">
//                           Not mentioned above reason
//                         </option>
//                       </select>
                  
//                         <textarea
//                           className="textinput mt-3"
//                           id="i5vyy"
//                           value={customReason}
//                           onChange={(e) => setCustomReason(e.target.value)}
//                           placeholder="Please enter query..."
//                         ></textarea>
                    
//                     </div>
//                   </div>
//                   <button
//                     style={{ backgroundColor: site?.primarybg }}
//                     className="submit-btn"
//                   >
//                     Submit
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ContactUs;


import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./contact.css";
import { addContactUs } from "../../../../features/admin/adminSlice";
const ContactUs = () => {
  const [selectedOption, setSelectedOption] = useState("Rate Query");
  const [customReason, setCustomReason] = useState("");
  const site = useSelector((st) => st.site.data);
  const dispatch =  useDispatch()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    reason: selectedOption,
    customReason: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleOptionChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    setFormData((prevData) => ({ ...prevData, reason: selectedValue }));
  };

  const handleTextareaChange = (e) => {
    const textareaValue = e.target.value;
    setCustomReason(textareaValue);
    setFormData((prevData) => ({ ...prevData, customReason: textareaValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContactUs(formData))
  };

  return (
    <>
      <div className="flex justify-between flex-col-reverse md:flex-row gap-4 md:gap-0 items-center p-4   md:p-5">
        <div className="md:w-[50%] w-full ">
          <p
            style={{ color: site?.primarybg }}
            className="text-[#ff4268] text-4xl font-semibold"
          >
            Contact Us
          </p>
          <p className="text-[#636060] text-xl font-semibold mt-2">
            Support team ready to help
          </p>
          <p className="text-[#0e0d0d] text-md font-semibold mt-3">
            We are a highly agile and nimble footed organization which believes
            in a collaborative approach to solve problems of the world. And that
            is why the culture of customer feedback and satisfaction ranks high
            on our agenda. We are happy to help you round the clock to the best
            of our ability.
            <br />
            <br />
            <span className="text-xl">
              {" "}
              To get in touch with our customer support,
            </span>
            <br />
            Call us at
            <span style={{ color: site?.primarybg }} className=" font-bold">
              +91-7678536510
            </span>
            <br />
            Email:-
            <span style={{ color: site?.primarybg }} className="font-bold">
              contact@eprocuretech.com
            </span>
          </p>
        </div>
        <div className="w-[50%] flex justify-center ">
          <img src="https://www.moglix.com/assets/img/contact-img.png" alt="" />
        </div>
      </div>

      <div>
        <div className="contact_us_2">
          <div className="responsive-container-block big-container">
            <div className="blueBG"></div>
            <div className="responsive-container-block container">
              <form className="form-box" onSubmit={handleSubmit}>
                <div className="container-block form-wrapper">
                  <p
                    style={{ color: site?.primarybg }}
                    className="text-blk contactus-head"
                  >
                    Get in Touch
                  </p>
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
                        type="text"
                        className="input"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Please enter first name..."
                      />
                    </div>
                    <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                      <p className="text-blk input-title">LAST NAME</p>
                      <input
                        className="input"
                        id="lastName"
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Please enter last name..."
                      />
                    </div>
                    <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                      <p className="text-blk input-title">EMAIL</p>
                      <input
                        className="input"
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Please enter email..."
                      />
                    </div>
                    <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                      <p className="text-blk input-title">PHONE NUMBER</p>
                      <input
                        className="input"
                        type="text"
                        id="mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
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
                        <>
                          <p className="text-blk input-title w-full mt-3">
                            CUSTOM REASON
                          </p>
                          <textarea
                            className="textinput mt-1"
                            value={customReason}
                            onChange={handleTextareaChange}
                            placeholder="Please enter custom reason..."
                          ></textarea>
                        </>
                      )}
                    </div>
                  </div>
                  <button
                    style={{ backgroundColor: site?.primarybg }}
                    className="submit-btn"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;



