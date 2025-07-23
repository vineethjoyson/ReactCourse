const ItemList = ({ data }) => {
  console.log({ data });
  return (
    <div className="ItemConatiner p-4 bg-gray-100 text-base m-2">
      <h2>{data?.card?.info?.name}</h2>
      <h3>{data?.card?.info?.price}</h3>
    </div>
  );
};
export default ItemList;
