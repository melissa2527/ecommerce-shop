import React from 'react';
import Layout from '../components/Layout'
import Products from '../components/Products/Products';


export default function Home({products}) {
  console.log(products)
  return (
    <Layout>
      <h1>E-shop</h1>
      <Products products={products}/>
    </Layout>
  )
}


export const getStaticProps = async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();

  return {
    props: {
      products,
    }
  }
}