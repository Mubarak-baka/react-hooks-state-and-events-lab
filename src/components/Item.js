import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  function handleAddToCart() {
    setInCart(true);
  }

  return (
    <li className={inCart ? "in-cart" : ""}>
      {name} - {category}
      <button onClick={handleAddToCart}>Add to Cart</button>
    </li>
  );
}

export default Item;