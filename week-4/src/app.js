import React from 'react';

const App = () => {
  function getData() {
    async function getProducts(url) {
      const response = await fetch(url);

      if (response.ok) {
        const data = await response.json();
        return data;
      }
    }
    let data = [];
    getProducts(
      'https://appworks-school.github.io/Remote-Aassigiment-Data/products'
    ).then((products) => data.push(...products));
    console.dir(data);
  }

  return <h1 onClick={getData}>This is my React app!</h1>;
};

export default App;
