import { useEffect, useState } from "react";
import { OrderApi } from "../../../features/orderSlice";
import { useDispatch, useSelector } from "react-redux";
import * as XLSX from "xlsx";

import TransactionTable from "./ttransaction";

const GenerateReport = () => {
  const transactions = useSelector((st) => st.userorder.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(OrderApi());
  }, []);

  const handleDownload = () => {
    const worksheet = XLSX.utils.json_to_sheet(transactions);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Transactions");
    XLSX.writeFile(workbook, "transactions.xlsx");
  };
  const [filteredTransactions, setFilteredTransactions] =
    useState(transactions);
  const [filterAddress, setFilterAddress] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [categoryReport, setCategoryReport] = useState({});
  const [productCountReport, setProductCountReport] = useState({});
  const [addressReport, setAddressReport] = useState({});

  useEffect(() => {
    // Extract unique categories, addresses, and generate initial reports
    const uniqueCategories = [
      ...new Set(
        transactions.flatMap((t) => t.products.map((p) => p.category))
      ),
    ];
    const uniqueAddresses = [...new Set(transactions.map((t) => t.address))];
    setCategories(uniqueCategories);
    setAddresses(uniqueAddresses);

    // Generate initial reports
    generateReports(transactions);
  }, [transactions]);

  const generateReports = (data) => {
    // Generate category report
    const categoryReportData = {};
    data.forEach((transaction) => {
      transaction.products.forEach((product) => {
        if (!categoryReportData[product.category]) {
          categoryReportData[product.category] = 0;
        }
        categoryReportData[product.category]++;
      });
    });
    setCategoryReport(categoryReportData);

    // Generate product count report
    const productCountReportData = {};
    data.forEach((transaction) => {
      productCountReportData[transaction.transactionId] =
        transaction.products.length;
    });
    setProductCountReport(productCountReportData);

    // Generate address report
    const addressReportData = {};
    data.forEach((transaction) => {
      const address = transaction.address;
      if (!addressReportData[address]) {
        addressReportData[address] = 0;
      }
      addressReportData[address] += transaction.products.length;
    });
    setAddressReport(addressReportData);
  };
 const handleFilter = () => {
   const filtered = transactions.filter(
     (transaction) =>
       (filterAddress === "" || transaction.address.includes(filterAddress)) &&
       (filterCategory === "" ||
         transaction.products.some((product) =>
           product.category.includes(filterCategory)
         ))
   );
   setFilteredTransactions(filtered);

   // Generate reports based on filtered data
   generateReports(filtered);
 };
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <h1 className="h3 font-semibold">Genarate report</h1>
        <button onClick={handleDownload} className="btn btn-outline-success">
          Download Report
        </button>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Category Report</h2>
        <ul>
          {Object.entries(categoryReport).map(([category, count]) => (
            <li key={category}>
              {category}: {count} products
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Address Report</h2>
        <ul>
          {Object.entries(addressReport).map(([address, count]) => (
            <li key={address}>
              {address}: {count} products
            </li>
          ))}
        </ul>
      </div>

      <div className="flex mb-4">
        <select
          value={filterAddress}
          onChange={(e) => setFilterAddress(e.target.value)}
          className="mr-2 p-2 border border-gray-300"
        >
          <option value="">All Addresses</option>
          {addresses.map((address) => (
            <option key={address} value={address}>
              {address}
            </option>
          ))}
        </select>

        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="mr-2 p-2 border border-gray-300"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <button
          onClick={handleFilter}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Apply Filters
        </button>
      </div>
      <TransactionTable transactions={filteredTransactions} />
    </div>
  );
};

export default GenerateReport;
