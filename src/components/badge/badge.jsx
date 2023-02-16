// import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './badge.css';

const badge = () => {
  const item = useSelector((state) => state.cart.productItem);
  // const [countProduct, setCountProduct] = useState(0);

  // useEffect(() => {
  //   setCountProduct(amount)
  // }, []);

  return (
    <ul className="badge-cart-items">
      {item.length}
    </ul>
  );
};
export default badge;
