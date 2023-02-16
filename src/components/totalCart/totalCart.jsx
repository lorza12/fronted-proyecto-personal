import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './total.css';

const totalCart = () => {
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  const item = useSelector((state) => state.cart.productItem);
  console.log('🚀 ~ file: totalCart.jsx:11 ~ totalCart ~ m', item);
  window.localStorage.setItem('total', total);

  const totalProduct = () => {
    let totalPrice = 0;
    item.forEach((element) => {
      totalPrice += element.price * element.amount;
    });
    return totalPrice;
  };

  const price = item.map((element) => {
    return element.price;
  });
  const amount = item.map((element) => {
    return element.amount;
  });

  useEffect(() => {
    setTotal(price * Number(amount));
  });

  const handleClick = () => {
    navigate('/form-pay');
  };

  return (
    <section>
      <div>
        <p>SUBTOTAL: ${totalProduct()}
        </p>
      </div>
      <div>
        <button
          className="button-sub"
          type="button"
          onClick={handleClick}
        >Ir a pagar
        </button>
      </div>
    </section>
  );
};

export default totalCart;
