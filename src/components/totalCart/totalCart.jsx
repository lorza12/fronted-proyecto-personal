import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const totalCart = () => {
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  const item = useSelector((state) => state.cart.productItem);
  window.localStorage.setItem('total', total);

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
        <p>total {total}</p>
      </div>
      <div>
        <button
          type="button"
          onClick={handleClick}
        >Ir a pagar
        </button>
      </div>
    </section>
  );
};

export default totalCart;
