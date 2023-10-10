// Example usage:

const ones = [
  "",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
];
const teens = [
  "Eleven",
  "Twelve",
  "Thirteen",
  "Fourteen",
  "Fifteen",
  "Sixteen",
  "Seventeen",
  "Eighteen",
  "Nineteen",
];
const tens = [
  "",
  "",
  "Twenty",
  "Thirty",
  "Forty",
  "Fifty",
  "Sixty",
  "Seventy",
  "Eighty",
  "Ninety",
];

function convertToWords(num) {
  if (num === 0) {
    return "Zero";
  }

  function convertChunk(number) {
    let result = "";

    if (number >= 100) {
      result += ones[Math.floor(number / 100)] + " Hundred ";
      number %= 100;
    }

    if (number >= 11 && number <= 19) {
      result += teens[number - 11] + " ";
    } else if (number >= 20 || number === 10) {
      result += tens[Math.floor(number / 10)] + " ";
      number %= 10;
    }

    if (number >= 1 && number <= 9) {
      result += ones[number] + " ";
    }

    return result;
  }

  let result = "";
  let chunkCount = 0;

  while (num > 0) {
    const chunk = num % 1000;
    if (chunk !== 0) {
      result =
        convertChunk(chunk) +
        ["", "Thousand", "Million", "Billion"][chunkCount] +
        " " +
        result;
    }
    num = Math.floor(num / 1000);
    chunkCount++;
  }

  return result.trim();
}

const createInvoice = ({
  totalPrice,
  invoiceno,
  userName,
  userAdress,
  productDetails,
}) => {
  const companyName = "Shreenathji Sai Company";
  const compayAdderss =
    "A-91, SECOND FLOOR,DERAWAL NAGAR.DELHI, NEW DELHI-110009";
  const conatactNumbers = "8882758900, 7827730205";
  const contactEmail = "shreenathjisai@gmail.com";
  const placeOfSupply = "Delhi(09)";
  const bankName = `BANK NAME:- YES BANK BRANCH:- B7 &amp; B8 Gujranwala Town New
Delhi 110009 Account No:- 008363400002351 IFSC Code:-
YESB0000083`;
  const date = new Date();
  const invoiceDate = JSON.stringify(date).split("T")[0].split('"')[1];
  const products = productDetails
    .map((pro, i) => {
      return `<tr >
        <td
          style="
            width: 20pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p
            style="
              padding: 5pt;
              padding-right: 4pt;
              text-indent: 0pt;
              text-align: center;
            "
          >
            ${i + 1}.
          </p>
        </td>
        <td
          style="
            width: 234pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
          colspan="5"
        >
          <p
            class="s5"
            style="
              padding-top: 5pt;
              padding-left: 2pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            ${pro.name}
          </p>
        </td>
        <td
          style="
            width: 51pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p
            class="s5"
            style="
              padding-top: 5pt;
              padding-left: 2pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            ${pro.hsn || "-"}
          </p>
        </td>
        <td
          style="
            width: 51pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p
            class="s5"
            style="
              padding-top: 5pt;
              padding-left: 24pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            ${pro.count}
          </p>
        </td>
        <td
          style="
            width: 40pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p
            class="s5"
            style="
              padding-top: 5pt;
              padding-left: 2pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            ${pro.unit}
          </p>
        </td>
        <td
          style="
            width: 69pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p
            class="s5"
            style="
              padding-top: 5pt;
              padding-left: 36pt;
              text-indent: 0pt;
              text-align: left;
              text-wrap:"nowrap";
            "
          >
            ${pro.total / pro.count}.00 rs.
          </p>
        </td>
        <td
          style="
            width: 82pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p
            class="s5"
            style="
              padding-top: 5pt;
              padding-right: 3pt;
              text-indent: 0pt;
              text-align: right;
            "
          >
            ${pro.total}.00
          </p>
        </td>
        </tr>`;
    })
    .join("");
  const totalQty = "6";
  const alphabeticalPrice = convertToWords(parseInt(totalPrice));
  const htmlContent = `
 <table
 cellspacing="0"
 style="color: black; font-weight: 600;"
>
 <tr style="height: 78pt">
   <td
     style="
       width: 557pt;
       border-top-style: solid;
       border-top-width: 1pt;
       border-left-style: solid;
       border-left-width: 1pt;
       border-bottom-style: solid;
       border-bottom-width: 1pt;
       border-right-style: solid;
       border-right-width: 1pt;
     "
     colspan="11"
   >
     <p
       class="s1"
       style="padding-top:4pt;padding-left:4pt;text-indent:0pt;line-height:12pt;text-align:center;display:flex;justify-content: space-between;"
     >
       GSTIN : 07AERFS7014R1Z4 <i>Original Copy</i>
     </p>
     <p
       class="s3"
       style="text-indent: 0pt; line-height: 13pt; text-align: center"
     >
       TAX INVOICE
     </p>
     <p
       class="s4"
       style="
       padding-left: 5pt;
       padding-right: 6pt;
       font-size: x-large;
       text-indent: 0pt;
       line-height: 20pt;
       text-align: center;
       margin: 0;
       "
     >
      ${companyName}
     </p>
     <p
       class="s5"
       style="
         padding-left: 18pt;
         text-indent: 0pt;
         line-height: 11pt;
         text-align: center;
       "
     >
       ${compayAdderss}
     </p>
     <p
       style="
         padding-left: 5pt;
         padding-right: 7pt;
         text-indent: 0pt;
         line-height: 10pt;
         text-align: center;
       "
     >
       <a href="mailto:${contactEmail}" class="s7" target="_blank"
         >Tel. : ${conatactNumbers} email : ${contactEmail}</a
       >
     </p>
   </td>
 </tr>
 <tr style="height: 36pt">
   <td
     style="
       width: 72pt;
       border-top-style: solid;
       border-top-width: 1pt;
       border-left-style: solid;
       border-left-width: 1pt;
       border-bottom-style: solid;
       border-bottom-width: 1pt;
     "
   >
     <p
       class="s5"
       style="
         padding-top: 5pt;
         padding-left: 4pt;
         text-indent: 0pt;
         text-align: left;
       "
     >
       Invoice No.
     </p>
     <p
       class="s5"
       style="
         padding-top: 5pt;
         padding-left: 4pt;
         text-indent: 0pt;
         text-align: left;
       "
     >
       Dated
     </p>
   </td>
   <td
     style="
       width: 26pt;
       border-top-style: solid;
       border-top-width: 1pt;
       border-bottom-style: solid;
       border-bottom-width: 1pt;
     "
   >
     <p
       class="s5"
       style="
         padding-top: 5pt;
         padding-right: 3pt;
         text-indent: 0pt;
         line-height: 12pt;
         text-align: right;
       "
     >
       :
     </p>
     <p
       class="s5"
       style="
         padding-right: 3pt;
         text-indent: 0pt;
         line-height: 12pt;
         text-align: right;
       "
     >
       :
     </p>
   </td>
   <td
     style="
       width: 58pt;
       border-top-style: solid;
       border-top-width: 1pt;
       border-bottom-style: solid;
       border-bottom-width: 1pt;
     "
   >
     <p
       class="s5"
       style="
         padding-top: 5pt;
         padding-left: 4pt;
         text-indent: 0pt;
         line-height: 12pt;
         text-align: left;
       "
     >
       ${invoiceno}
     </p>
     <p
       class="s5"
       style="
         padding-left: 4pt;
         text-indent: 0pt;
         line-height: 12pt;
         text-align: left;
       "
     >
       ${invoiceDate}
     </p>
   </td>
   <td
     style="
       width: 26pt;
       border-top-style: solid;
       border-top-width: 1pt;
       border-bottom-style: solid;
       border-bottom-width: 1pt;
     "
   >
     <p style="text-indent: 0pt; text-align: left"><br /></p>
   </td>
   <td
     style="
       width: 66pt;
       border-top-style: solid;
       border-top-width: 1pt;
       border-bottom-style: solid;
       border-bottom-width: 1pt;
     "
   >
     <p style="text-indent: 0pt; text-align: left"><br /></p>
   </td>
   <td
     style="
       width: 28pt;
       border-top-style: solid;
       border-top-width: 1pt;
       border-bottom-style: solid;
       border-bottom-width: 1pt;
       border-right-style: solid;
       border-right-width: 1pt;
     "
   >
     <p style="text-indent: 0pt; text-align: left"><br /></p>
   </td>
   <td
     style="
       width: 81pt;
       border-top-style: solid;
       border-top-width: 1pt;
       border-left-style: solid;
       border-left-width: 1pt;
       border-bottom-style: solid;
       border-bottom-width: 1pt;
     "
   >
     <p
     style="
     text-wrap: nowrap;
     margin-left: 10px;
 "
     >
       Place of Supply 
     </p>
     <p
     style="
     text-wrap: nowrap;
     margin-left: 10px;
 "
     >
     Reverse Charge 
     </p>
   </td>
   <td
     style="
       width: 15pt;
       border-top-style: solid;
       border-top-width: 1pt;
       border-bottom-style: solid;
       border-bottom-width: 1pt;
     "
   >
     <p
       class="s5"
       style="
         padding-top: 5pt;
         padding-left: 8pt;
         text-indent: 0pt;
         line-height: 12pt;
         text-align: left;
       "
     >
       :
     </p>
     <p
       class="s5"
       style="
         padding-left: 8pt;
         text-indent: 0pt;
         line-height: 12pt;
         text-align: left;
       "
     >
       :
     </p>
   </td>
   <td
     style="
       width: 103pt;
       border-top-style: solid;
       border-top-width: 1pt;
       border-bottom-style: solid;
       border-bottom-width: 1pt;
     "
     colspan="2"
   >
     <p
       class="s5"
       style="
         padding-top: 5pt;
         padding-left: 3pt;
         padding-right: 54pt;
         text-indent: 0pt;
         text-align: left;
       "
     >
       ${placeOfSupply}
     </p>
     <p
       class="s5"
       style="
         padding-top: 2pt;
         padding-left: 3pt;
         padding-right: 54pt;
         text-indent: 0pt;
         text-align: left;
       "
     >
       N
     </p>
     
   </td>
   <td
     style="
       width: 82pt;
       border-top-style: solid;
       border-top-width: 1pt;
       border-bottom-style: solid;
       border-bottom-width: 1pt;
       border-right-style: solid;
       border-right-width: 1pt;
     "
   >
     <p style="text-indent: 0pt; text-align: left"><br /></p>
   </td>
 </tr>
 <tr style="height: 95pt">
   <td
     style="
       width: 276pt;
       border-top-style: solid;
       border-top-width: 1pt;
       border-left-style: solid;
       border-left-width: 1pt;
       border-bottom-style: solid;
       border-bottom-width: 1pt;
       border-right-style: solid;
       border-right-width: 1pt;
     "
     colspan="6"
   >
     <p
       class="s8"
       style="
         padding-top: 5pt;
         padding-left: 4pt;
         text-indent: 0pt;
         line-height: 12pt;
         text-align: left;
       "
     >
       Billed to :
     </p>
     <p
       class="s5"
       style="
         padding-left: 4pt;
         text-indent: 0pt;
         line-height: 12pt;
         text-align: left;
       "
     >
       ${userName}
     </p>
     <p
       class="s5"
       style="
         padding-left: 4pt;
         padding-right: 48pt;
         text-indent: 0pt;
         text-align: left;
       "
     >
       ${userAdress}
     </p>
     
   </td>
   <td
     style="
       width: 281pt;
       border-top-style: solid;
       border-top-width: 1pt;
       border-left-style: solid;
       border-left-width: 1pt;
       border-bottom-style: solid;
       border-bottom-width: 1pt;
       border-right-style: solid;
       border-right-width: 1pt;
     "
     colspan="5"
   >
     <p
       class="s8"
       style="
         padding-top: 5pt;
         padding-left: 3pt;
         text-indent: 0pt;
         line-height: 12pt;
         text-align: left;
       "
     >
       Shipped to :
     </p>
     <p
       class="s5"
       style="
         padding-left: 3pt;
         text-indent: 0pt;
         line-height: 12pt;
         text-align: left;
       "
     >
       ${userName}
     </p>
     <p
       class="s5"
       style="
         padding-left: 3pt;
         padding-right: 54pt;
         text-indent: 0pt;
         text-align: left;
       "
     >
       ${userAdress}
     </p>
   </td>
 </tr>
 <tr style="height: 10pt">
   <td
     style="
       width: 557pt;
       border-top-style: solid;
       border-top-width: 1pt;
       border-left-style: solid;
       border-left-width: 1pt;
       border-bottom-style: solid;
       border-bottom-width: 1pt;
       border-right-style: solid;
       border-right-width: 1pt;
     "
     colspan="11"
   >
   </td>
 </tr>
 <tr style="height: 15t">
   <td
     style="
       width: 20pt;
       border-top-style: solid;
       border-top-width: 1pt;
       border-left-style: solid;
       border-left-width: 1pt;
       border-bottom-style: solid;
       border-bottom-width: 1pt;
       border-right-style: solid;
       border-right-width: 1pt;
     "
   >
     <p
       class="s1"
       style="
         padding-top: 5pt;
         padding-right: 4pt;
         text-indent: 0pt;
         text-align: center;
         margin:0px;
       "
     >
       S.No.
     </p>
   </td>
   <td
     style="
       width: 234pt;
       border-top-style: solid;
       border-top-width: 1pt;
       border-left-style: solid;
       border-left-width: 1pt;
       border-bottom-style: solid;
       border-bottom-width: 1pt;
       border-right-style: solid;
       border-right-width: 1pt;
     "
     colspan="5"
   >
     <p
       class="s1"
       style="
         padding-top: 5pt;
         padding-left: 2pt;
         text-indent: 0pt;
         text-align: center;
         margin:0px;
       "
     >
       Description of Goods
     </p>
   </td>
   <td
     style="
       width: 51pt;
       border-top-style: solid;
       border-top-width: 1pt;
       border-left-style: solid;
       border-left-width: 1pt;
       border-bottom-style: solid;
       border-bottom-width: 1pt;
       border-right-style: solid;
       border-right-width: 1pt;
     "
   >
     <p
       class="s1"
       style="
         padding-top: 5pt;
         padding-left: 2pt;
         text-indent: 0pt;
         text-align: center;
         margin:0px;
       "
     >
       HSN/SAC Code
     </p>
   </td>
   <td
     style="
       width: 51pt;
       border-top-style: solid;
       border-top-width: 1pt;
       border-left-style: solid;
       border-left-width: 1pt;
       border-bottom-style: solid;
       border-bottom-width: 1pt;
       border-right-style: solid;
       border-right-width: 1pt;
     "
   >
     <p
       class="s1"
       style="
         padding-top: 5pt;
         padding-left: 27pt;
         text-indent: 0pt;
         text-align: left;
       "
     >
       Qty.
     </p>
   </td>
   <td
     style="
       width: 40pt;
       border-top-style: solid;
       border-top-width: 1pt;
       border-left-style: solid;
       border-left-width: 1pt;
       border-bottom-style: solid;
       border-bottom-width: 1pt;
       border-right-style: solid;
       border-right-width: 1pt;
     "
   >
     <p
       class="s1"
       style="
         padding-top: 5pt;
         padding-left: 2pt;
         text-indent: 0pt;
         text-align: center;
         margin:0px;
       "
     >
       Unit
     </p>
   </td>
   <td
     style="
       width: 69pt;
       border-top-style: solid;
       border-top-width: 1pt;
       border-left-style: solid;
       border-left-width: 1pt;
       border-bottom-style: solid;
       border-bottom-width: 1pt;
       border-right-style: solid;
       border-right-width: 1pt;
     "
   >
     <p
       class="s1"
       style="
         padding-top: 5pt;
         padding-left: 40pt;
         text-indent: 0pt;
         text-align: center;
         margin:0px;
       "
     >
       Price
     </p>
   </td>
   <td
     style="
       width: 82pt;
       border-top-style: solid;
       border-top-width: 1pt;
       border-left-style: solid;
       border-left-width: 1pt;
       border-bottom-style: solid;
       border-bottom-width: 1pt;
       border-right-style: solid;
       border-right-width: 1pt;
     "
   >
     <p
       class="s1"
       style="
         padding-top: 5pt;
         padding-right: 5pt;
         text-indent: 0pt;
         text-align: center;
         margin:0px;
       "
     >
       Amount(<span class="s9">rs </span>)
     </p>
   </td>
 </tr>
${products}
 
 <tr style="height: 23pt">
   <td
     style="
       width: 30pt;
       border-top-style: solid;
       border-top-width: 1pt;
       border-left-style: solid;
       border-left-width: 1pt;
     "
   >
     <p style="text-indent: 0pt; text-align: left"><br /></p>
   </td>
   <td style="width: 42pt; border-top-style: solid; border-top-width: 1pt">
     <p style="text-indent: 0pt; text-align: left"><br /></p>
   </td>
   <td style="width: 26pt; border-top-style: solid; border-top-width: 1pt">
     <p style="text-indent: 0pt; text-align: left"><br /></p>
   </td>
   <td style="width: 58pt; border-top-style: solid; border-top-width: 1pt">
     <p style="text-indent: 0pt; text-align: left"><br /></p>
   </td>
   <td style="width: 26pt; border-top-style: solid; border-top-width: 1pt">
     <p style="text-indent: 0pt; text-align: left"><br /></p>
   </td>
   <td
     style="width: 145pt; border-top-style: solid; border-top-width: 1pt"
   >
     <p
       class="s1"
       style="
         padding-top: 5pt;
         padding-left: 62pt;
         text-indent: 0pt;
         text-align: left;
       "
     >
       Grand Total
     </p>
   </td>
   <td style="width: 9pt; border-top-style: solid; border-top-width: 1pt">
     <p style="text-indent: 0pt; text-align: left"><br /></p>
   </td>
   <td style="width: 70pt; border-top-style: solid; border-top-width: 1pt">
     <p
       class="s1"
       style="padding-top: 5pt; text-indent: 0pt; text-align: left"
     >
      ${totalQty}
     </p>
   </td>
   <td style="width: 49pt; border-top-style: solid; border-top-width: 1pt">
     <p style="text-indent: 0pt; text-align: left"><br /></p>
   </td>
   <td
     style="
       width: 20pt;
       border-top-style: solid;
       border-top-width: 1pt;
       border-right-style: solid;
       border-right-width: 1pt;
     "
   >
     <p
       class="s10"
       style="
         padding-top: 5pt;
         padding-right: 2pt;
         text-indent: 0pt;
         text-align: center;
       "
     >
       
     </p>
   </td>
   <td
     style="
       width: 82pt;
       border-top-style: solid;
       border-top-width: 1pt;
       border-left-style: solid;
       border-left-width: 1pt;
       border-bottom-style: solid;
       border-bottom-width: 1pt;
       border-right-style: solid;
       border-right-width: 1pt;
     "
   >
     <p
       class="s1"
       style="
         padding-top: 5pt;
         padding-right: 2pt;
         text-indent: 0pt;
         text-align: right;
       "
     >
       ${totalPrice}
     </p>
   </td>
 </tr>
 <tr style="height: 59pt">
   <td
     style="
       width: 557pt;
       border-left-style: solid;
       border-left-width: 1pt;
       border-bottom-style: solid;
       border-bottom-width: 1pt;
       border-right-style: solid;
       border-right-width: 1pt;
     "
     colspan="11"
   >
     <p
       class="s1"
       style="padding-left: 4pt; text-indent: 0pt; text-align: left"
     >
       Rupees ${alphabeticalPrice} Only
     </p>
   </td>
 </tr>
 <tr style="height: 36pt">
   <td
     style="
       width: 557pt;
       border-top-style: solid;
       border-top-width: 1pt;
       border-left-style: solid;
       border-left-width: 1pt;
       border-bottom-style: solid;
       border-bottom-width: 1pt;
       border-right-style: solid;
       border-right-width: 1pt;
     "
     colspan="11"
   >
     <p
       class="s1"
       style="
         padding-top: 5pt;
         padding-left: 10pt;
         padding-right: 80pt;
         text-indent: -79pt;
         text-align: left;
       "
     >
       Bank Details :
       <span class="s5"
         >${bankName}</span
       >
     </p>
   </td>
 </tr>
 <tr style="height: 34pt">
   <td
     style="
       width: 248pt;
       border-top-style: solid;
       border-top-width: 1pt;
       border-left-style: solid;
       border-left-width: 1pt;
       border-bottom-style: solid;
       border-bottom-width: 1pt;
       border-right-style: solid;
       border-right-width: 1pt;
     "
     colspan="5"
     rowspan="2"
   >
     <p
       class="s17"
       style="
         padding-top: 5pt;
         padding-bottom: 2pt;
         padding-left: 4pt;
         text-indent: 0pt;
         text-align: left;
       "
     >
       Terms &amp; Conditions
     </p>
     <p
       style="
         padding-left: 4pt;
         text-indent: 0pt;
         line-height: 1pt;
         text-align: left;
       "
     />
     <p
       class="s16"
       style="padding-left: 4pt; text-indent: 0pt; text-align: left"
     >
       E.&amp; O.E.
     </p>
     <ol id="l1">
       <li data-list-text="1.">
         <p
           class="s16"
           style="
             padding-top: 2pt;
             padding-left: 13pt;
             text-indent: -9pt;
             text-align: left;
           "
         >
           Goods once sold will not be taken back.
         </p>
       </li>
       <li data-list-text="2.">
         <p
           class="s16"
           style="
             padding-top: 2pt;
             padding-left: 4pt;
             padding-right: 51pt;
             text-indent: 0pt;
             line-height: 123%;
             text-align: left;
           "
         >
           Interest @ 18% p.a. will be charged if the payment is not made
           with in the stipulated time.
         </p>
       </li>
       <li data-list-text="3.">
         <p
           class="s16"
           style="padding-left: 13pt; text-indent: -9pt; text-align: left"
         >
           Subject to &#39;Delhi&#39; Jurisdiction only.
         </p>
       </li>
     </ol>
   </td>
   <td
     style="
       width: 79pt;
       border-top-style: solid;
       border-top-width: 1pt;
       border-left-style: solid;
       border-left-width: 1pt;
       border-bottom-style: solid;
       border-bottom-width: 1pt;
     "
   >
     <p
       class="s18"
       style="
         padding-top: 5pt;
         padding-left: 1pt;
         text-indent: 0pt;
         text-align: left;
       "
     >
       Receiver&#39;s Signature
     </p>
   </td>
   <td
     style="
       width: 9pt;
       border-top-style: solid;
       border-top-width: 1pt;
       border-bottom-style: solid;
       border-bottom-width: 1pt;
     "
   >
     <p
       class="s12"
       style="
         padding-top: 5pt;
         padding-left: 5pt;
         text-indent: 0pt;
         text-align: left;
       "
     >
       :
     </p>
   </td>
   <td
     style="
       width: 70pt;
       border-top-style: solid;
       border-top-width: 1pt;
       border-bottom-style: solid;
       border-bottom-width: 1pt;
     "
   >
     <p style="text-indent: 0pt; text-align: left"><br /></p>
   </td>
   <td
     style="
       width: 49pt;
       border-top-style: solid;
       border-top-width: 1pt;
       border-bottom-style: solid;
       border-bottom-width: 1pt;
     "
   >
     <p style="text-indent: 0pt; text-align: left"><br /></p>
   </td>
   <td
     style="
       width: 20pt;
       border-top-style: solid;
       border-top-width: 1pt;
       border-bottom-style: solid;
       border-bottom-width: 1pt;
     "
   >
     <p style="text-indent: 0pt; text-align: left"><br /></p>
   </td>
   <td
     style="
       width: 82pt;
       border-top-style: solid;
       border-top-width: 1pt;
       border-bottom-style: solid;
       border-bottom-width: 1pt;
       border-right-style: solid;
       border-right-width: 1pt;
     "
   >
     <p style="text-indent: 0pt; text-align: left"><br /></p>
   </td>
 </tr>
 <tr style="height: 59pt">
   <td
     style="
       width: 309pt;
       border-top-style: solid;
       border-top-width: 1pt;
       border-left-style: solid;
       border-left-width: 1pt;
       border-bottom-style: solid;
       border-bottom-width: 1pt;
       border-right-style: solid;
       border-right-width: 1pt;
     "
     colspan="6"
   >
     <p
       class="s1"
       style="
         padding-top: 7pt;
         padding-left: 158pt;
         text-indent: 0pt;
         text-align: left;
       "
     >
       For ${companyName}
     </p>
     <p style="text-indent: 0pt; text-align: left"><br /></p>
     <p
       class="s1"
       style="
         padding-top: 9pt;
         padding-left: 192pt;
         text-indent: 0pt;
         text-align: left;
       "
     >
       Authorised Signatory
     </p>
   </td>
 </tr>
</table> 
 
<style type="text/css">
* {
  margin: 0;
  padding: 0;
  text-indent: 0;
}
.s1 {
  color: black;
  font-family: Tahoma, sans-serif;
  font-style: normal;
  font-weight: bold;
  text-decoration: none;
  font-size: 10pt;
}
.s2 {
  color: black;
  font-family: Tahoma, sans-serif;
  font-style: italic;
  font-weight: normal;
  text-decoration: none;
  font-size: 10pt;
}
.s3 {
  color: black;
  font-family: Tahoma, sans-serif;
  font-style: normal;
  font-weight: bold;
  text-decoration: underline;
  font-size: 11pt;
}
.s4 {
  color: black;
  font-family: Tahoma, sans-serif;
  font-style: normal;
  font-weight: bold;
  text-decoration: none;
  font-size: 18pt;
}
.s5 {
  color: black;
  font-family: Tahoma, sans-serif;
  font-style: normal;
  font-weight: normal;
  text-decoration: none;
  font-size: 10pt;
}
.s7 {
  color: black;
  font-family: Tahoma, sans-serif;
  font-style: italic;
  font-weight: bold;
  text-decoration: none;
  font-size: 8pt;
}
.s8 {
  color: black;
  font-family: Tahoma, sans-serif;
  font-style: italic;
  font-weight: bold;
  text-decoration: none;
  font-size: 10pt;
}
.s9 {
  color: black;
  font-family: Arial, sans-serif;
  font-style: normal;
  font-weight: bold;
  text-decoration: none;
  font-size: 9pt;
  vertical-align: 1pt;
}
.s10 {
  color: black;
  font-family: Arial, sans-serif;
  font-style: normal;
  font-weight: bold;
  text-decoration: none;
  font-size: 10pt;
}
.s12 {
  color: black;
  font-family: Tahoma, sans-serif;
  font-style: normal;
  font-weight: bold;
  text-decoration: none;
  font-size: 8pt;
}
.s13 {
  color: black;
  font-family: Tahoma, sans-serif;
  font-style: normal;
  font-weight: bold;
  text-decoration: none;
  font-size: 6pt;
  vertical-align: 2pt;
}
.s14 {
  color: black;
  font-family: Tahoma, sans-serif;
  font-style: normal;
  font-weight: bold;
  text-decoration: none;
  font-size: 7pt;
  vertical-align: 1pt;
}
.s15 {
  color: black;
  font-family: "Times New Roman", serif;
  font-style: normal;
  font-weight: normal;
  text-decoration: none;
  font-size: 1pt;
}
.s16 {
  color: black;
  font-family: Tahoma, sans-serif;
  font-style: normal;
  font-weight: normal;
  text-decoration: none;
  font-size: 8pt;
}
.s17 {
  color: black;
  font-family: Tahoma, sans-serif;
  font-style: normal;
  font-weight: bold;
  text-decoration: none;
  font-size: 6pt;
}
.s18 {
  color: black;
  font-family: Tahoma, sans-serif;
  font-style: normal;
  font-weight: bold;
  text-decoration: none;
  font-size: 7pt;
}
li {
  display: block;
}
#l1 {
  padding-left: 0pt;
  counter-reset: c1 1;
}
#l1 > li > *:first-child:before {
  counter-increment: c1;
  content: counter(c1, decimal) ". ";
  color: black;
  font-family: Tahoma, sans-serif;
  font-style: normal;
  font-weight: normal;
  text-decoration: none;
  font-size: 8pt;
}
#l1 > li:first-child > *:first-child:before {
  counter-increment: c1 0;
}
table,
tbody {
  vertical-align: top;
  overflow: visible;
}
.im {
    color: #060606;
    font-size: small;
    font-weight: 600;
}
</style>
`;
  return htmlContent;
};
module.exports = createInvoice;
