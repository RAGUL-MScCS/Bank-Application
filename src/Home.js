import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import "./pagestyle.css";


export default function Home() {
  return (
    <>
      <Container className="Container">
        <Row>
          <h1 id="welcome" className="text-primary text-center mb-10">
           <marquee direction="right">Welcome to Banking Application</marquee> 
          </h1>
        </Row>
      </Container>
    </>
  );
}

