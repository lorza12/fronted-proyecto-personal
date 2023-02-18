import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './total.css';

const totalCart = () => {
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  const item = useSelector((state) => state.cart.productItem);
  window.localStorage.setItem('total', total);

  const totalProduct = () => {
    let totalPrice = 0;
    item.forEach((element) => {
      totalPrice += element.price * element.amount;
    });
    return totalPrice;
  };

  useEffect(() => {
    setTotal(totalProduct);
  });

  const handleClick = () => {
    navigate('/form-pay');
  };

  return (
    <section>
      <div>
        <p>SUBTOTAL: ${total}
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
