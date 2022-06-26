import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Causes = () => {
  const [name, setName] = useState([]);
useEffect(() => {
  fetchName();
}, []);
const fetchName = () => {
  axios
    .get('https://api.givebacks.com/services/core/causes/search')
    .then((res) => {
      console.log(res);
      setName(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
return (
    <div>
      <h1>Featured Products</h1>
      <div className='item-container'>
        {name.map((name) => (
          <div className='card' key={name.id}>
            <img src={name.image} alt='' />
            <h3>{name.brand}</h3>
            <p>{name.item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Causes;