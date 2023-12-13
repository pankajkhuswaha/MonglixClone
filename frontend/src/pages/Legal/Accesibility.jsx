import "./legal.css";
const Accesibility = () => {
  return (
    <div className="container">
      <div className="mainsection">
        <h1>Accessibility Statement</h1>
        <p className="py-2">
          eprocuretech.com is committed to providing a website that is
          accessible to the widest possible audience, regardless of disability
          or technology limitations. We are continually improving the user
          experience for everyone and strive to meet or exceed the accessibility
          standards and guidelines set forth by applicable laws and regulations,
          including the Web Content Accessibility Guidelines (WCAG) 2.1.
        </p>
      </div>

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
          eprocuretech.com.
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
          our {`website's`} accessibility for all users.
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
};

export default Accesibility;
