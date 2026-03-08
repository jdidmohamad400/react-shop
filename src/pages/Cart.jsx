import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {

  const { cart } = useContext(CartContext);

  return (
    <div>

      <h1>Cart</h1>

      {cart.map((item, index) => (
        <div key={index}>
          <p>{item.title}</p>
          <p>${item.price}</p>
        </div>
      ))}

    </div>
  );
}

export default Cart;