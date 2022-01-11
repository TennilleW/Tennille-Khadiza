import React from "react";
import "./productList.css";
// Be sure to uncomment this line before trying to use the Product component!
import Product from "./product";

function CardList(props) {
  console.log(props)
  return (
    <div className="ProductList">
      <Product
        addToShoppingCart={props.addToShoopingCart}
        name={props.members[0].name}
      />

      <Product
        addToShoppingCart={props.addToShoppingCart}
        name={props.members[1].name}
      />

      <Product
        addToShoppingCart={props.addToShoppingCart}
        name={props.members[2].name}
      />

      <Product
        addToShoppingCart={props.addToShoppingCart}
        name={props.members[3].name}
      />

      <Product
        addToShoppingCart={props.addToShoppingCart}
        name={props.members[4].name}
      />
    </div>
  );
}

export default CardList;
