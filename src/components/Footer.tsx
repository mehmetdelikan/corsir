
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-4 bg-dark text-white">
      <Container>
        <Row>
          <Col md={6} className="text-center text-md-start">
            <p>&copy; 2025 Reklam Ajansı. Tüm Hakları Saklıdır.</p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <Nav className="justify-content-center justify-content-md-end">
              <Nav.Link href="#" className="text-white"><FaFacebook size={24} /></Nav.Link>
              <Nav.Link href="#" className="text-white"><FaTwitter size={24} /></Nav.Link>
              <Nav.Link href="#" className="text-white"><FaInstagram size={24} /></Nav.Link>
              <Nav.Link href="#" className="text-white"><FaLinkedin size={24} /></Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
