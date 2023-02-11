import { useSelector } from 'react-redux';
import './badge.css';

const badge = () => {
  const item = useSelector((state) => state.cart.productItem);

  return (
    <ul className="shopping-cart-items">
      {item.map((element) => (
        <span className="spanBadge">{element.amount}</span>
      ))}
    </ul>
  );
};
export default badge;
