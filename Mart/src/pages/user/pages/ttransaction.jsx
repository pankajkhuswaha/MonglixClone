// TransactionTable.jsx


const TransactionTable = ({ transactions }) => {
  return (
    <div id="transaction-table" className="rounded mx-auto">
      <table className="min-w-full bg-white border rounded border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Transaction ID</th>
            <th className="py-2 px-4 border-b">Products</th>
            <th className="py-2 px-4 border-b">Total</th>
            <th className="py-2 px-4 border-b">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions?.map((transaction) => (
            <tr key={transaction.transactionId}>
              <td className="py-2 px-4 border-b">
                {transaction.transactionId}
              </td>
              <td className="py-2 px-4 border-b">
                {transaction.products.map((product) => (
                  <div key={product.name} className="mb-2">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-8 h-8 mr-2 inline"
                    />
                    {product.name} (x{product.count})
                  </div>
                ))}
              </td>
              <td className="py-2 px-4 border-b">{transaction.total}</td>
              <td
                className={`py-2 px-4 border-b ${
                  transaction.status === "Processing"
                    ? "text-blue-500"
                    : "text-red-500"
                }`}
              >
                {transaction.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
