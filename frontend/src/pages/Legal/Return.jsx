const Return = () => {
  const data = [
    {
      heading: "Returns",
      para: [
        "1.1. We want you to be completely satisfied with your purchase from ecommerce.deepmart.shop but return is acceptable only against manufacturing defect within 2 days of receiving your order.",
        "1.2. Products must be returned in their original condition, including all packaging materials and accessories. We reserve the right to refuse returns of any product that does not meet these conditions.",
      ],
    },
    {
      heading: "Refunds",
      para: [
        "2.1. Once your returned product is received and inspected, we will notify you of the approval or rejection of your refund.",
        "2.2. If your return is approved, a refund will be processed to the original method of payment within 7-10 days. The time it takes for the refund to appear in your account may vary depending on your payment provider.",
      ],
    },
    {
      heading: "3. Non-Returnable Items",
      para: [
        "3.1. Some products are non-returnable for hygiene, safety, or other reasons, including but not limited to:",
        "Customized or personalized items.",
        "Products that have been used, damaged, or altered by the customer.",
      ],
    },
    {
      heading: "4. Shipping Costs",
      para: [
        "4.1. Shipping costs for returning a product are the responsibility of the customer unless the return is due to a defect or error on our part.",
      ],
    },
    {
      heading: "5. Defective or Incorrect Products",
      para: [
        "5.1. If you receive a defective or incorrect product, please contact our customer support team within 2 days of receiving the item. We will provide instructions for returning the product and will cover the cost of return shipping.",
      ],
    },
    {
      heading: "6. Cancellation of Orders",
      para: [
        "6.1. Orders can be canceled after an hour of order placed. If you wish to cancel an order, please contact our customer support team as soon as possible. If the order has already been shipped, it will be subject to our standard return policy.",
      ],
    },
    {
      heading: "7. Contact Information",
      para: [
        "7.1. For all return and refund inquiries, please contact our customer support team at:",
        " Email: contact@ecommerce.deepmart.shop",
      ],
    },
    {
      heading: "8. Changes to this Policy",
      para: [
        "8.1. We reserve the right to modify or update this Return & Refund Policy at any time. Any changes will be posted on this page.",
      ],
    },
  ];
  return (
    <div className="container">
      <div className="mainsection">
        <h1> Return And Refund Policy</h1>
      </div>
      {data.map((ele) => {
        return (
          <>
            <div className="titlesection">
              <h1>{ele.heading}</h1>
              <p className="py-2">{ele.para[0]}</p>
              <p className="py-2">{ele.para[1]}</p>
            </div>

            <div className="titlesection"></div>
          </>
        );
      })}
    </div>
  );
};

export default Return;
