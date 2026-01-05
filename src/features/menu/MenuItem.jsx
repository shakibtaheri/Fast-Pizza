function MenuItem({ pizzaData }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizzaData;

  return (
    <li>
      <img src={imageUrl} alt={name} />
      <div>
        <p>{name}</p>
        <p>{ingredients.join(", ")}</p>
        <div>{!soldOut ? <p></p> : <p>Sold out</p>}</div>
      </div>
    </li>
  );
}
// {formatCurrency(unitPrice)}
export default MenuItem;
