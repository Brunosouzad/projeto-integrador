import { Button, Col, Container, Row } from "react-bootstrap";
import { Calendars } from "../Calendars/index.jsx";

export function Home() {
  return (
    <div className="bg-secondary py-4">
      <Container>
        <h1 className="text-white text-center">
          Buscar ofertas em hotéis, casas e muito mais
        </h1>

        <Row>
          <Col>
            <Row>
              <Col md={6}>
                <input
                  className="form-control"
                  list="datalistOptions"
                  id="exampleDataList"
                  placeholder="📌 Para onde vamos?"
                />
              </Col>
              <Col md={6}>
                <Calendars />
              </Col>
            </Row>
          </Col>
          <Col md="auto">
            <Button>Buscar</Button>
          </Col>
        </Row>

        <datalist id="datalistOptions">
          <option value="San Francisco" />
          <option value="New York" />
          <option value="Seattle" />
          <option value="Los Angeles" />
          <option value="Chicago" />
        </datalist>
      </Container>
    </div>
  );
}
