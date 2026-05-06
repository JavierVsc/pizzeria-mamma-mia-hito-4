import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { pizzaCart } from "../pizzas";
import { formatPrice } from "../utils/formatPrice";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const increasePizza = (id) => {
    const updatedCart = cart.map((pizza) =>
      pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
    );

    setCart(updatedCart);
  };

  const decreasePizza = (id) => {
    const updatedCart = cart
      .map((pizza) =>
        pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
      )
      .filter((pizza) => pizza.count > 0);

    setCart(updatedCart);
  };

  const total = cart.reduce(
    (acc, pizza) => acc + pizza.price * pizza.count,
    0
  );

  return (
    <Container className="cart-container py-5">
      <div className="cart-box">
        <h4 className="mb-4">Detalles del pedido:</h4>

        {cart.map((pizza) => (
          <div key={pizza.id} className="cart-item">
            <div className="cart-info">
              <img src={pizza.img} alt={pizza.name} className="cart-img" />
              <span className="fw-semibold text-capitalize">{pizza.name}</span>
            </div>

            <div className="cart-actions">
              <span className="fw-bold">${formatPrice(pizza.price)}</span>

              <Button
                variant="outline-danger"
                size="sm"
                onClick={() => decreasePizza(pizza.id)}
              >
                -
              </Button>

              <span className="fw-semibold">{pizza.count}</span>

              <Button
                variant="outline-primary"
                size="sm"
                onClick={() => increasePizza(pizza.id)}
              >
                +
              </Button>
            </div>
          </div>
        ))}

        <h3 className="mt-4">Total: ${formatPrice(total)}</h3>

        <Button variant="dark" className="mt-3">
          Pagar
        </Button>
      </div>
    </Container>
  );
};

export default Cart;