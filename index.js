const app = "I don't do much."

const products = [
  { name: 'Head & Shoulders Shampoo', standardPrice: 4.99, discount: .6 },
  { name: 'Twinkies', standardPrice: 7.99, discount: .45 },
  { name: 'Oreos', standardPrice: 6.49, discount: .8 },
  { name: 'Jasmine-scented bath pearls', standardPrice: 13.99, discount: .7 },
];

function getTotalAmountForProducts(products, callback, initialValue) {
  let totalPrice = initialValue;
  products.forEach(products => {
    if (products.discount >= .5) {
      totalPrice += product.price;
    }
  });
  return totalPrice;
}

function callback(totalPrice, product) {
  if (products.discount < 7) {
    return totalPrice + product.price;
  }
  return totalPrice;
}

function reduce(collection, callback, initialValue) {
  let result = initialValue;
  collection.forEach(product => {
    result = callback(result, product);
  });
  return result;
}