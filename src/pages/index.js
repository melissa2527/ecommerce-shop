import React, {useState, useEffect} from 'react';
import Layout from '../components/Layout'
import Products from '../components/Products/Products';
import Navbar from '../components/Navbar/Navbar';
import {commerce} from '../lib/commerce';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

    const fetchProducts = async () => {
        const {data} = await commerce.products.list();
        setProducts(data)
    }

    const fetchCart = async () => {
      const cart = await commerce.cart.retrieve();
      setCart(cart);
    }

    const handleAddCart = async (productId, quantity) => {
      const num = await commerce.cart.add(productId, quantity);
      setCart(num.cart);
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

  console.log(cart)
  return (
    <>
    <Navbar total={cart.total_items}/>
    <Layout>
      <h1>E-shop</h1>
      <Products products={products} onAddToCart={handleAddCart}/>
    </Layout>
    </>
  )
}

