import { useEffect, useState } from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";
import { Container, Row, Col, Alert, Spinner } from "react-bootstrap";
import { getPizzaImage } from "../utils/pizzaImages";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getPizzas = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/pizzas");

      if (!response.ok) {
        throw new Error("No se pudieron cargar las pizzas");
      }

      const data = await response.json();
      setPizzas(data);
    } catch (error) {
      setError("Error al cargar las pizzas desde la API");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <>
      <Header />

      <Container className="my-5">
        {loading && (
          <div className="text-center my-5">
            <Spinner animation="border" />
            <p className="mt-3">Cargando pizzas...</p>
          </div>
        )}

        {error && <Alert variant="danger">{error}</Alert>}

        {!loading && !error && (
          <Row className="g-4">
            {pizzas.map((pizza) => (
              <Col key={pizza.id} xs={12} md={6} lg={4}>
                <CardPizza
                  name={pizza.name}
                  price={pizza.price}
                  ingredients={pizza.ingredients}
                  img={getPizzaImage(pizza.id, pizza.img)}
                  desc={pizza.desc}
                />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
};

export default Home;