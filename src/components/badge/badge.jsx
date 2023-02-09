import { useSelector } from 'react-redux';

const badge = () => {
  const item = useSelector((state) => state.cart.productItem);

  return (
    <ul className="shopping-cart-items">
      {item.map((element) => (
        <span>{element.amount}</span>
      ))}
    </ul>
  );
};
export default badge;
