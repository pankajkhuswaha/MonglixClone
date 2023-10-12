import React from 'react'
import './legal.css'
const TC = () => {
     const data = [
       {
         heading: "1. Acceptance of Terms and Conditions",
         para: [
       '1.1. Welcome to EProcureTech.com ("the Website"). By accessing or using this Website, you agree to comply with and be bound by these Terms and Conditions of Use ("Terms"). If you do not agree to these Terms, please do not use the Website.'
         ],
       },
       

       {
         heading: "2. Definitions",
         para: [
        "2.1. Customer refers to any user of the Website, including Gold, Silver, and Premium customers, collectively referred to as Customers."
         ],
       },
       {
         heading: "3 Products and Services",
         para: [
           "3.1. EProcureTech.com offers a platform for B2B transactions, including the listing and sale of products and services. We do not endorse or guarantee the quality, safety, or legality of any products or services listed on our platform.",
         ],
       },
       {
         heading: "4. Account Registration",
         para: [
           "4.1. To access certain features and benefits of the Website, Customers must create an account. You are responsible for maintaining the confidentiality of your account information and are liable for all activities that occur under your account.",
         ],
       },
       {
         heading: "5. Payment and Billing",
         para: [
           "5.1. Customers agree to pay the fees associated with their chosen membership plan as detailed on our Pricing page. Payment terms and methods will be provided at the time of purchase.",
         ],
       },
       {
         heading: "6.Use of the Website",
         para: [
           "6.1. Customers agree to use the Website for legitimate business purposes only. Prohibited activities include, but are not limited to, using the Website for illegal, fraudulent, or harmful purposes.",
         ],
       },
       {
         heading: "7.Content and Intellectual Property",
         para: [
           "7.1. All content on the Website, including text, images, logos, and trademarks, is the property of EProcureTech.com or its licensors and is protected by intellectual property laws. Customers may not use, reproduce, or distribute any content without prior written consent.",
         ],
       },
       {
         heading: "8.Privacy Policy",
         para: [
           "8.1. Customer information is subject to our Privacy Policy, which can be found on our Privacy Policy page. By using the Website, you consent to the collection and use of your information as described in the Privacy Policy.",
         ],
       },
       {
         heading: "9.Termination",
         para: [
           "9.1. EProcureTech.com reserves the right to terminate or suspend the accounts of Customers who violate these Terms or engage in unlawful activities.",
         ],
       },
       {
         heading: "10. Limitation of Liability",
         para: [
           "10.1. EProcureTech.com is not liable for any damages, including but not limited to direct, indirect, incidental, or consequential damages, arising from the use or inability to use the Website.",
         ],
       },
       {
         heading: "11. Changes to Terms",
         para: [
           "11.1. EProcureTech.com reserves the right to modify or update these Terms at any time. Customers will be notified of significant changes, and continued use of the Website after such modifications constitutes acceptance of the revised Terms.",
         ],
       },
       {
         heading: "12. Contact Information",
         para: [
           "12.1. For any questions or concerns regarding these Terms and Conditions, please contact us at https://eprocuretech.com/contact.",
         ],
       },
     ];
  return (
    <div className="container">
      <div className="mainsection">
        <h1> Terms and Conditions</h1>
      </div>
      {data.map((ele) => {
        return (
          <>
            <div className="titlesection">
              <h1>{ele.heading}</h1>
              <p className="py-2">{ele.para}</p>
            </div>

            <div className="titlesection"></div>
          </>
        );
      })}

      <div className="titlesection">
        <h1>Accessibility Features</h1>
        <p>
          To enhance accessibility on our website, we have implemented various
          features and practices, including but not limited to:
        </p>
        <ul className="px-4">
          <li>
            1. Providing alternative text descriptions for images and non-text
            content.
          </li>
          <li>
            2. Using semantic HTML elements for improved screen reader
            compatibility.
          </li>
          <li>3. Maintaining a logical and consistent navigation structure.</li>
          <li>
            4. Regularly testing our website using assistive technologies and
            user feedback to identify and address accessibility issues.
          </li>
        </ul>
        <h1>Accessibility Assistance</h1>
        <p>
          If you encounter any accessibility barriers or have trouble accessing
          any part of our website, please contact our customer support team for
          assistance. We are committed to making reasonable accommodations to
          ensure everyone can access the information and services offered on
          EProcureTech.com.
        </p>
        <h1>Contact Information</h1>
        <p>
          For accessibility-related inquiries or assistance, please contact our
          customer support team using one of the following methods:
          <br />
          Email: contact@eprocuretech.com
        </p>
        <h1>Feedback and Suggestions</h1>
        <p>
          We welcome feedback and suggestions to improve the accessibility of
          our website continually. If you have any recommendations or encounter
          accessibility issues while using our site, please let us know. Your
          input helps us enhance the user experience for all visitors.
        </p>
        <h1>Compliance</h1>
        <p>
          We are actively working to ensure that our website complies with
          applicable accessibility standards and guidelines. Accessibility is an
          ongoing commitment, and we are dedicated to maintaining and improving
          our website's accessibility for all users.
        </p>
        <h1>Third-Party Content</h1>
        <p>
          While we strive to ensure our website is accessible, there may be
          third-party content or links to external websites that are beyond our
          control. We cannot guarantee the accessibility of such content but
          encourage you to contact us if you encounter accessibility issues
          related to third-party content.
        </p>
        <h1>Policy Updates</h1>
        <p>
          This accessibility statement will be reviewed and updated regularly to
          reflect our ongoing efforts to enhance accessibility. The last updated
          date at the top of this statement indicates the most recent revisions
        </p>
      </div>
    </div>
  );
}

export default TC