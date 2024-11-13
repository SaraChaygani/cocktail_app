import React from 'react';
import { getProductBySlug } from '../data/productsData';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ProductDetails = () => {
  const [product, setProduct] = useState({});

  //fetch for slug using useParams
  const { slug } = useParams();

  const handleProduct = (slug) => {
    const productBySlug = getProductBySlug(slug)[0];
    console.log("prduct by slug: ", productBySlug);
    setProduct(productBySlug);
  }

  useEffect(() => {
    handleProduct(slug);
    console.log(slug);
    console.log('bySetproduct: ', product);
    handleProduct(slug);
  }, [slug]);
  return (
    <main onLoad={handleProduct}>
      <div>
        <h1>Product information</h1>
        <p>{product.productInfo}</p>
      </div>
    </main>

  )
}

export default ProductDetails