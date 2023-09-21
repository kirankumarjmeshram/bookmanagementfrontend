import { Container, Navbar, Nav } from "react-bootstrap";
import { FaSearch, FaBookOpen } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img src={logo} alt="logo" className="w-25" />
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/search">
                <Nav.Link>
                  <FaSearch />
                  Search Book
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/add">
                <Nav.Link>
                  <FaBookOpen />
                  Add Book
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
