import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Cart = () => {
  
  const { id } = useParams();
  const [item, setItem] = useState([]);

  console.log(item);
  
  useEffect(() => {
    async function fetchPosts(){
      await axios
      .get(`http://localhost/phpapi/api.php?id=${id}`)
      .then((res) => {
        setItem(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
      }
      fetchPosts();
  },[id]);

  return (
     <>
    {
      item.length > 0 ? (
        <div className='container-fluid '>
    <div className='row row-cols-md-2 row-cols-1'>
        <div className='right-side col'>
          <div className='p-5 d-flex justify-content-center align-content-center '>
        <img src={item[0].PRODUCT_IMAGE} alt="product" className='w-100'/>
        </div>
        </div>
        <div className='left-side col'>
          <div className='p-5'>
          <h1 className='fs-1 fw-bold '>{item[0].PRODUCT_NAME}</h1>
          <p className='fs-4 mt-4'>{item[0].PRODUCT_PRICE}</p>
          <p>{item[0].PRODUCT_DE}</p>
          <div className='btnn d-flex gap-5 mt-5 '>
          <button className='btn btn-primary'>Buy now</button>
          <button className='btn btn-warning'>Add to cart</button>
          </div>
          </div>
        </div>
    </div>
    </div>
      ) : (
        <p>Loading...</p>
      )
    }
    </>
  )
  
}

export default Cart