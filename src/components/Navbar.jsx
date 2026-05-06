import { Container, Navbar as BootstrapNavbar, Nav, Button } from "react-bootstrap";
import { formatPrice } from "../utils/formatPrice";

const Navbar = ({ setView }) => {
  const total = 25000;
  const token = false;

  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg" className="py-3">
      <Container>
        <BootstrapNavbar.Brand className="fw-bold">
          Pizzería Mamma Mía!
        </BootstrapNavbar.Brand>

        <Nav className="me-auto gap-2">
          <Button
            variant="outline-light"
            size="sm"
            onClick={() => setView("home")}
          >
            🍕 Home
          </Button>

          <Button
            variant="outline-light"
            size="sm"
            onClick={() => setView("pizza")}
          >
            🍕 Pizza
          </Button>

          {token ? (
            <>
              <Button variant="outline-light" size="sm">
                🔓 Profile
              </Button>

              <Button variant="outline-light" size="sm">
                🔒 Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="outline-light"
                size="sm"
                onClick={() => setView("login")}
              >
                🔐 Login
              </Button>

              <Button
                variant="outline-light"
                size="sm"
                onClick={() => setView("register")}
              >
                🔐 Register
              </Button>
            </>
          )}
        </Nav>

        <Button
          variant="outline-info"
          size="sm"
          onClick={() => setView("cart")}
        >
          🛒 Total: ${formatPrice(total)}
        </Button>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;