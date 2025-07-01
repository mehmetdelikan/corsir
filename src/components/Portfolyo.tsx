
import { Container, Row, Col, Card, Image } from 'react-bootstrap';

const Portfolyo = () => {
  const portfolyoListesi = [
    { id: 1, resim: 'https://via.placeholder.com/400x300.png/FFC107/000000?Text=Proje+1', baslik: 'Proje 1' },
    { id: 2, resim: 'https://via.placeholder.com/400x300.png/0DCAF0/FFFFFF?Text=Proje+2', baslik: 'Proje 2' },
    { id: 3, resim: 'https://via.placeholder.com/400x300.png/DC3545/FFFFFF?Text=Proje+3', baslik: 'Proje 3' },
    { id: 4, resim: 'https://via.placeholder.com/400x300.png/198754/FFFFFF?Text=Proje+4', baslik: 'Proje 4' },
    { id: 5, resim: 'https://via.placeholder.com/400x300.png/6F42C1/FFFFFF?Text=Proje+5', baslik: 'Proje 5' },
    { id: 6, resim: 'https://via.placeholder.com/400x300.png/FD7E14/000000?Text=Proje+6', baslik: 'Proje 6' },
  ];

  return (
    <section id="portfolyo" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">Portfolyomuz</h2>
        <Row>
          {portfolyoListesi.map(proje => (
            <Col lg={4} md={6} key={proje.id} className="mb-4">
              <Card className="h-100">
                <Card.Img variant="top" src={proje.resim} />
                <Card.Body>
                  <Card.Title className="text-center">{proje.baslik}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolyo;
