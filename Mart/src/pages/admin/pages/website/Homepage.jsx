import Row from "react-bootstrap/Row";

const Homepage = () => {
  return (
    <div className="w-full">
      <form>
        <Row>
          <div className="col-12 col-md-6 mb-3">
            <label className="text-gray-500 text-sm mb-1">
              Add Website Name :
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-12 col-md-6 mb-3">
            <label className="text-gray-500 text-sm mb-1">
              Add Website logo :
            </label>
            <input type="file" className="form-control" />
          </div>
          <div className="col-12 col-md-6 mb-3">
            <label className="text-gray-500 text-sm mb-1">
              Choose Website Primary color :
            </label>
            <input type="color" className="form-control p-2" />
          </div>
          <div className="col-12 col-md-6 mb-3">
            <label className="text-gray-500 text-sm mb-1">
              Choose Website Secondary color :
            </label>
            <input type="color" className="form-control p-2" />
          </div>
        </Row>
        <button type="submit" className="btn btn-outline-primary">Change Occurence</button>
      </form>
    </div>
  );
};

export default Homepage;
