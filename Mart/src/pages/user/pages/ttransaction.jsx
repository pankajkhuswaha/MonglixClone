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
              <td className=" text-gray-800 font-bold py-2 px-4 border-b">
                {transaction.transactionId}
              </td>
              <td className="py-2 px-4 border-b">
                {transaction.products.map((product) => (
                  <div key={product.name} className="flex mb-2">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-14 h-auto mr-2 inline"
                    />
                    <div className="text-gray-600 font-semibold">
                      {product.name} (x{product.count})
                    </div>
                  
                  </div>
                ))}
              </td>
              <td className="py-2 text-gray-600 font-semibold px-4 border-b">{transaction.total}</td>
              <td
                className='py-2 px-4 border-b
                '   
              >
                <p className={`text-white p-2 rounded-lg ${transaction.status === "Processing"
                  ? " bg-blue-400 "
                    : " bg-red-400  "
                  }`}>
                  {transaction.status}
                </p>  
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
