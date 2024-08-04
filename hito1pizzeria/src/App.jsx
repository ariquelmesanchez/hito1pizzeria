/* eslint-disable no-unused-vars */
import './App.css';
import { Navbar } from './components/Navbar';
import { CardPizza } from './components/CardPizza';
import { Home } from './components/Home';
import { Footer } from './components/Footer';

import React from 'react';

function App() {
  const data = [
    {
      img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c",
      nombre: "Napolitana",
      price: 5950,
      ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab",
      nombre: "Española",
      price: 6950,
      ingredients: ["mozzarella", "gorgonzola", "parmesano", "provolone"],
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3",
      nombre: "Pepperoni",
      price: 6950,
      ingredients: ["mozzarella", "pepperoni", "orégano"],
    },
  ];

  return (
    <>
      <Navbar />
      <Home />
      <div className="card-grid">
        {data.map((pizza, index) => (
          <CardPizza
            key={index}
            nombre={pizza.nombre}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default App;
