import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Product from './Product';
import axios from 'axios';

const Products = () => {

  const [productItems, setProductItems] = useState([]);

  var retrievedList = JSON.parse(localStorage.getItem('myList'));
    if(!retrievedList){
      localStorage.setItem('myList', JSON.stringify([]));
    }



  useEffect(() => {
    async function fetchPosts(){
    await axios
    .get("http://localhost/phpapi/api.php")
    .then((res) => {
      setProductItems(res.data);
    })
    .catch((error) => {
      console.log(error);
    })
    }
    fetchPosts();
    
  },[])

// localStorage.setItem('myList', JSON.stringify(productItems));
// var retrievedList = JSON.parse(localStorage.getItem('myList'));
// console.log(retrievedList);


  function handleAddToCart(id){
    if (retrievedList.indexOf(id) !== -1) {
      alert('This item already in your cart!!!')
      return
  } else {
    alert('You want this item added to your cart?')
    retrievedList.unshift(id);
    localStorage.setItem('myList', JSON.stringify(retrievedList));
  }
  }

  
  
  return (
    <div className='app mb-5'>
      
<h1 className='text-center text-danger mt-3 mb-5 text-capitalize'>Welcome</h1>
<div className="container text-center">
  <div className="row gy-5">
    {
      productItems.map((productItem) => (
        <Product key={productItem.PRODUCT_ID} PRODUCT_NAME = {productItem.PRODUCT_NAME} PRODUCT_PRICE={productItem.PRODUCT_PRICE} PRODUCT_IMAGE={productItem.PRODUCT_IMAGE} 
        PRODUCT_DESCRIPTION = {productItem.PRODUCT_DESCRIPTION} PRODUCT_ID={productItem.PRODUCT_ID} handleAddToCart = {handleAddToCart} 
        />
      ))
    }
  </div>
</div>
    </div>
  )
}

export default Products