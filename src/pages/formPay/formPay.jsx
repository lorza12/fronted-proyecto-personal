import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const formPay = () => {
  const navigate = useNavigate();
  const item = useSelector((state) => state.cart.productItem);
  const total = window.localStorage.getItem('total');

  const handleClick = () => {
    navigate('/payment');
  };
  return (
    <section>
      <section className="form">
        <h1>formulario</h1>
        <button type="button" onClick={handleClick}>
          finalizar compra
        </button>
      </section>
      <section className="info.pay">
        {item.map((element) => (
          <>
            <p>cop ${total}</p>
            <img className="image" src={element.image} alt="" />
            <p>{element.description}</p>
          </>
        ))}
      </section>
    </section>
  );
};

export default formPay;
