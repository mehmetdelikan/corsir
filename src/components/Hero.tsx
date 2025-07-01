
import { Container, Row, Col, Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <div className="hero-section bg-primary text-white text-center py-5">
      <Container>
        <Row>
          <Col>
            <h1 className="display-3 fw-bold">Yaratıcılığın Sınırlarını Zorluyoruz</h1>
            <p className="lead">Markanızı geleceğe taşıyacak modern ve etkili çözümler sunuyoruz.</p>
            <Button variant="light" size="lg" href="#hizmetler">Hizmetlerimizi Keşfedin</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
