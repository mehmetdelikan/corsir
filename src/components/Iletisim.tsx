
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Iletisim = () => {
  return (
    <section id="iletisim" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">Bize Ulaşın</h2>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Adınız Soyadınız</Form.Label>
                <Form.Control type="text" placeholder="Adınızı ve soyadınızı girin" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>E-posta Adresiniz</Form.Label>
                <Form.Control type="email" placeholder="E-posta adresinizi girin" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicMessage">
                <Form.Label>Mesajınız</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Mesajınızı yazın" />
              </Form.Group>

              <div className="d-grid">
                <Button variant="primary" type="submit">
                  Gönder
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Iletisim;
