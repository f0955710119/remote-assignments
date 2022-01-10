const dataAssignment = {
  size: 3,
  products: [
    {
      name: 'Product 1',
      price: 100,
    },
    {
      name: 'Product 2',
      price: 700,
    },
    {
      name: 'Product 3',
      price: 250,
    },
  ],
};

function avg(data) {
  let sumPrice = 0;
  const productAmount = data.products.length;

  for (const product of data.products) {
    sumPrice += product.price;
  }

  const avgPrice = sumPrice / productAmount;
  console.log(`The average price of all products is ${avgPrice}.`);
  return avgPrice;
}

module.exports = {
  dataAssignment,
  avg,
};
