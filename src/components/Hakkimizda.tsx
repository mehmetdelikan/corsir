
import { Container, Row, Col, Image } from 'react-bootstrap';

const Hakkimizda = () => {
  return (
    <section id="hakkimizda" className="py-5">
      <Container>
        <h2 className="text-center mb-5">Hakkımızda</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <Image src="https://via.placeholder.com/500x400.png/6C757D/FFFFFF?Text=Ekibimiz" rounded fluid />
          </Col>
          <Col md={6}>
            <h3>Biz Kimiz?</h3>
            <p>
              Yaratıcı ve dinamik bir ekiple, markaların dijital dünyada fark yaratmasını sağlıyoruz. Müşteri odaklı yaklaşımımız ve yenilikçi fikirlerimizle, her projeye özel çözümler üretiyoruz.
            </p>
            <p>
              Misyonumuz, markaların potansiyelini en üst düzeye çıkararak, hedef kitleleriyle güçlü bir bağ kurmalarına yardımcı olmaktır. Vizyonumuz ise, sektörde öncü ve ilham veren bir ajans olmaktır.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hakkimizda;
