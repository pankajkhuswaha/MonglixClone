/* eslint-disable react/prop-types */
import { Badge, Modal } from "react-bootstrap";

const ViewModal = (props) => {
  const { show, onHide, data } = props;
  let remarks = data?.data;
  if (remarks) {
    remarks = [...remarks].reverse();
  }
  if (data?.type=="remark") {
    return (
      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        size="xl"
        show={show}
        onHide={onHide}
      >
        <Modal.Header closeButton>
          <Modal.Title>Remarks</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="flex  font-semibold">
            <div className="col-2">Date</div>
            <div className="col-10 text-wrap text-end">Remarks </div>
          </div>
          {remarks.map((re) => {
            return (
              <div
                key={re._id}
                className="flex gap-6 md:gap-60 mb-2 pb-1 border-b-2 justify-between text-muted"
              >
                <div className="text-nowrap font-bold  text-gray-800">
                  {re?.time?.split("T")[0]}
                </div>
                <div className="text-wrap text-justify">{re?.val} </div>
              </div>
            );
          })}
        </Modal.Body>
        <Modal.Footer>
          <div className="w-full ">
            <button onClick={onHide} className="btn btn-outline-danger">
              Close
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    );
  }

  const transformData = (data) => {
    if (!data) return null;
    const transformedData = {};
    for (const [key, value] of Object.entries(data)) {
      const transformedKey = key.replace(/([a-z])([A-Z])/g, "$1 $2");
      const excludedKeys = [
        "_id",
        "__v",
        "customerlist",
        "remarks",
        "createdAt",
        "updatedAt",
        "refreshToken",
        "password",
        "super",
        "order",
        "cart",
        "id",
        "mindiscription",
        // "products",
        "transactionId"
      ];
      if (!excludedKeys.includes(key)) {
        if (data?.cart) {
          delete data["address"]
        }
        if (
          Array.isArray(value) &&
          value.every(
            (item) =>
              typeof item === "string" &&
              item.includes("https://images.deepmart")
          )
        ) {
          transformedData[transformedKey] = (
            <Badge bg="info">
              {value.map((item, index) => (
                <a
                  key={index}
                  href={item}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View {index + 1}
                </a>
              ))}
            </Badge>
          );
        } else  if (typeof value === "boolean") {
          transformedData[transformedKey] = (   
            <Badge bg={value ? "success" : "danger"}>
              {value ? "Yes" : "No"}
            </Badge>
          );
        } else if (transformedKey === "products") {
          transformedData[transformedKey]  = <div className="flex flex-col ml-4 text-right">
          {value.map((val,i)=><p key={i}>{val.name} X {val.count}</p>)}</div>
        } else if (
          typeof value === "string" &&
          /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(value)
        ) {
          transformedData[transformedKey] = new Date(value).toLocaleString();
        } else {
          transformedData[transformedKey] = value;
        }
      }
    }
    return transformedData;
  };

  const transformedData = transformData(data);
  const elementStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #8080803b",
    paddingBottom: "7px",
    marginBottom: "4px",
  };
  return (
    <Modal
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title>View Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {data && (
          <div>
            {Object.entries(transformedData).map(([key, value]) => (
              <div key={key} style={elementStyle}>
                <strong className="text-capitalize text-primary text-nowrap">
                  {key} :
                </strong>{" "}
                {value}
              </div>
            ))}
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <button onClick={onHide} className="btn btn-outline-danger">
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};
// if (value?.includes("https://images.deepmart.shop")) {
//           transformedData[transformedKey] = (
//             <Badge bg="info">
//               <a href={value} target="_blank" rel="noopener noreferrer">
//                 View
//               </a>
//             </Badge>
//           );
//         } else

export default ViewModal;
