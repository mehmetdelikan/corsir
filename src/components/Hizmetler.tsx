
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaBullhorn, FaPaintBrush, FaChartLine } from 'react-icons/fa';

const Hizmetler = () => {
  const hizmetlerListesi = [
    {
      ikon: <FaBullhorn size={40} className="mb-3" />,
      baslik: 'Dijital Pazarlama',
      aciklama: 'Sosyal medya yönetimi, SEO ve SEM hizmetleri ile markanızın dijitaldeki yüzünü güçlendiriyoruz.'
    },
    {
      ikon: <FaPaintBrush size={40} className="mb-3" />,
      baslik: 'Grafik Tasarım',
      aciklama: 'Logo, kurumsal kimlik ve diğer tüm görsel materyalleriniz için özgün ve yaratıcı tasarımlar sunuyoruz.'
    },
    {
      ikon: <FaChartLine size={40} className="mb-3" />,
      baslik: 'Stratejik Danışmanlık',
      aciklama: 'Pazar araştırması ve rakip analizi ile markanız için en doğru stratejiyi belirliyoruz.'
    }
  ];

  return (
    <section id="hizmetler" className="py-5">
      <Container>
        <h2 className="text-center mb-5">Hizmetlerimiz</h2>
        <Row>
          {hizmetlerListesi.map((hizmet, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="text-center h-100">
                <Card.Body>
                  {hizmet.ikon}
                  <Card.Title>{hizmet.baslik}</Card.Title>
                  <Card.Text>{hizmet.aciklama}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Hizmetler;
