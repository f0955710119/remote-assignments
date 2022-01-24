import React from 'react';

import Layout from './components/Layouts/Layout';

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

  return (
    <Layout>
      <h1 onClick={getData}>This is my React app!</h1>;
    </Layout>
  );
};

export default App;
