import React from 'react';
import { Link } from 'react-router-dom';
import ProductDetails from '../pages/ProductDetails';

const CocktailCard = ({ product }) => {
  if (!product) {
    return null;
  }
  return (
    <li>
      <img src={product.productImg} alt="someting" />
      <div className="cocktail-info">
        <div className="content-text">
          <h3 className='cocktail-name'>{product.productID}</h3>
          <p className='info'>{product.alcoholic ? "Alcoholic" : "Non-Alcoholic"}</p>
        </div>
        <Link to={`/Products/${product.productID}`}>
          <button >View Details</button>
        </Link>
      </div>
    </li>
  )
}

export default CocktailCard