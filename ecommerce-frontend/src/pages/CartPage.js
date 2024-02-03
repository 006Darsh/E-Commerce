import React from "react";
import Cart from "../features/Cart/Cart";
import Navbar from "../features/navbar/Navbar";

const CartPage = () => {
  return (
    <div>
      <Navbar>
        <Cart></Cart>
      </Navbar>
    </div>
  );
};

export default CartPage;
