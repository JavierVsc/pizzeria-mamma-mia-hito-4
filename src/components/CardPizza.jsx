import { Card, Button, ListGroup } from "react-bootstrap";
import { formatPrice } from "../utils/formatPrice";

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <Card className="pizza-card h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={img}
        alt={`Pizza ${name}`}
        className="pizza-card-img"
      />

      <Card.Body>
        <Card.Title className="fs-3 text-capitalize">
          Pizza {name}
        </Card.Title>
      </Card.Body>

      <ListGroup className="list-group-flush text-center">
        <ListGroup.Item className="text-muted fs-5">
          Ingredientes:
        </ListGroup.Item>

        <ListGroup.Item>
          <ul className="ingredients-list">
            {ingredients.map((ingredient) => (
              <li key={ingredient}>🍕 {ingredient}</li>
            ))}
          </ul>
        </ListGroup.Item>

        <ListGroup.Item>
          <strong className="fs-4">
            Precio: ${formatPrice(price)}
          </strong>
        </ListGroup.Item>
      </ListGroup>

      <Card.Body className="d-flex justify-content-between">
        <Button variant="outline-dark">Ver más</Button>
        <Button variant="dark">Añadir 🛒</Button>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;