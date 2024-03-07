import { Col } from "react-bootstrap";
import "./Copyrights.css";

export function Copyrights() {
    return (
      <div className="copyrights">
        <Col md={9}>
        <p className="footerstatement">Copyright &copy; Canteen Management 2023</p>
      </Col>
       </div>
    );
    }