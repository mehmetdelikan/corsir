
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Sun, Moon } from 'react-icons/fi';

interface Props {
  toggleTheme: () => void;
  theme: string;
}

const Navigation = ({ toggleTheme, theme }: Props) => {
  return (
    <Navbar bg={theme} variant={theme} expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">Reklam Ajansı</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#hizmetler">Hizmetler</Nav.Link>
            <Nav.Link href="#portfolyo">Portfolyo</Nav.Link>
            <Nav.Link href="#hakkimizda">Hakkımızda</Nav.Link>
            <Nav.Link href="#iletisim">İletişim</Nav.Link>
            <Button variant="outline-secondary" onClick={toggleTheme} className="ms-2">
              {theme === 'light' ? <Moon /> : <Sun />}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
