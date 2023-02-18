import { useSelector } from 'react-redux';
import './badge.css';

const badge = () => {
  const item = useSelector((state) => state.cart.productItem);

  return (
    <ul className="badge-cart-items">
      {item.length}
    </ul>
  );
};
export default badge;
