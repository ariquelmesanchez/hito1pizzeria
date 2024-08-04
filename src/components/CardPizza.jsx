import React from 'react';
import './CardPizza.css';

export const CardPizza = ({ nombre, price, ingredients, img }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={img} className="card-img-top" alt={nombre} />
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">Price: ${price}</p>
        <p className="card-text">Ingredients: {ingredients.join(', ')}</p>
        <div className="button-group">
          <button className="btn btn-primary">Ver Más</button>
          <button className="btn btn-secondary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};


