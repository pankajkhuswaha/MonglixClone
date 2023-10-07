import { Col, Row, Image, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import err from "./err.png";
export default function PageNotFound() {
  return (
    <>
      <Container>
        <Row>
          <Col sm={12}>
            <div className="text-center">
              <div className="mb-3 flex items-center justify-center">
                <Image src={err} alt="" className="img-fluid" />
              </div>
              <h1 className="display-4 fw-bold">Oops! the page not found.</h1>
              <p className="mb-4">
                Or simply leverage the expertise of our consultation team.
              </p>
              <Link to="/" className="btn btn-primary">
                Go Home
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
