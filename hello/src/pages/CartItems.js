import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../components/Product";

const CartItems = () => {
  const [cartItems, setCartItems] = useState([]);

  //console.log(typeof cartItems);

  var retrievedList = JSON.parse(localStorage.getItem("myList"));
  if (!retrievedList) {
    localStorage.setItem("myList", JSON.stringify([]));
  }

  function handleRemoveFromCart(id) {
    if (retrievedList.indexOf(id) !== -1) {
      retrievedList.splice(retrievedList.indexOf(id), 1);
      localStorage.setItem("myList", JSON.stringify(retrievedList));
    } else {
      return;
    }

    const updatedCartItems = cartItems.filter(
      (cartItem) => cartItem.PRODUCT_ID !== id
    );
    // console.log(typeof updatedCartItems);
    // console.log(updatedCartItems);
    setCartItems(updatedCartItems || []);
  }

  useEffect(() => {
    var retrievedList = JSON.parse(localStorage.getItem("myList"));
    if (retrievedList) {
      let query = "";
      for (let i = 0; i < retrievedList.length; i++) {
        query = query + retrievedList[i] + ",";
      }
    //   console.log("query",query);
      async function fetchPosts() {
        if(query){
        await axios
          .get(`http://localhost/phpapi/api.php?id=${query}`)
          .then((res) => {
            setCartItems(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }else{
        setCartItems([])
      }
    }
      fetchPosts();
    }
  }, []);
  return (
    <div className="app mb-5">
      <h1 className="text-center text-danger mt-3 mb-5 text-capitalize">
        Cart Items
      </h1>
      <div className="container text-center">
        <div className="row gy-5">
          {cartItems.length > 0 ? (
            cartItems.map((cartItem) => (
              <Product
                key={cartItem.PRODUCT_ID}
                PRODUCT_NAME={cartItem.PRODUCT_NAME}
                PRODUCT_PRICE={cartItem.PRODUCT_PRICE}
                PRODUCT_IMAGE={cartItem.PRODUCT_IMAGE}
                PRODUCT_DESCRIPTION={cartItem.PRODUCT_DESCRIPTION}
                PRODUCT_ID={cartItem.PRODUCT_ID}
                btnStatus={"remove"}
                handleRemoveFromCart={handleRemoveFromCart}
              />
            ))
          ) : (
            <p className="fs-1 ">Cart is EMPTY!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartItems;
