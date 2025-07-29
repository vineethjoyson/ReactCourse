const sum = (data) => {
  let total = data.reduce((acc, item) => {
    acc = acc + item.card.info.price / 100;
    return acc;
  }, 0);
  return total;
};
export default sum;
