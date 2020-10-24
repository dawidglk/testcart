export const priceShipping = (isFree) =>
  isFree ? `$0 - Free shipping` : `$${23.8}`;

export const sumPrice = (data) =>
  data.reduce((total, amount) => total + amount.price, 0) || 0;

export const grandTotal = (value, shipping) => {
  const priceShipping = shipping ? 0 : 23.8;

  if (value > 0) {
    return `$ ${(value + priceShipping).toFixed(2)}`;
  }
};
