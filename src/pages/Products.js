import React from 'react';
import '../styling/products-style.css';
import products from '../data/productsData';
import { useNavigate } from 'react-router-dom';
import CocktailCard from '../components/CocktailCard';

const Products = ({ navigateBack }) => {
  const navigateToOrdersSummary = useNavigate();
  return (
    <main className='products-main'>
      <section className='products-section main-display'>
        <header className='cocktails-list-header'>
          <button aria-label='Go Back' onClick={() => navigateBack(-1)}>Go Back</button>
          <h1>Cocktails</h1>
        </header>
        <ul className='cocktails-list'>
          {products.map((product) => (
            <CocktailCard product={product} key={product.productID} />
          ))}
        </ul>
        <button className='place-order-button' onClick={() => navigateToOrdersSummary('/order-summary')} >Place Order</button>
      </section>
    </main >
  )
}

export default Products