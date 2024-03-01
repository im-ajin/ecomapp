import React from "react";
import { Link } from "react-router-dom";

const Product = ({
  PRODUCT_NAME,
  PRODUCT_PRICE,
  PRODUCT_IMAGE,
  PRODUCT_DESCRIPTION,
  PRODUCT_ID,
  handleAddToCart,
  btnStatus,
  handleRemoveFromCart
}) => {
  return (
    <div className="col d-flex justify-content-center ">
      <div className="card" style={{ width: "18rem" }}>
        <Link to={`cart/${PRODUCT_ID}`}>
          <img
            src={PRODUCT_IMAGE}
            className="card-img-top biganimation"
            alt="..."
            height={250}
          />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{PRODUCT_NAME}</h5>
          <p className="card-text">{PRODUCT_DESCRIPTION}</p>
          <div className="d-flex justify-content-between align-items-center pt-3">
            <div className="d-flex align-items-center pt-3">
              <p className="pointer fs-5 fw-bold ">{PRODUCT_PRICE}</p>
            </div>
            <button
              className="btn btn-primary"
              onClick={() => {
                btnStatus === "remove" ? handleRemoveFromCart(PRODUCT_ID) :
                handleAddToCart(PRODUCT_ID)
              }
              }
            >
              {btnStatus === "remove" ? "Remove from Cart" : "Add to Cart"}
            </button>
            {/* <Link to='/cart' className="btn btn-primary">Buy now</Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
