import { useSelector } from 'react-redux';
import './cartList.css';

const cartList = () => {
  const item = useSelector((state) => state.cart.productItem);

  return (
    <section className="shoppingCartList">
      <ul className="ulCart">
        {item.map((element) => (
          <div className="shoppingCartList__1" key={element._id}>
            <div className="shoppingCartList__items">
              <img className="image" src={element.image} loading="eager" alt="" />
            </div>
            <div className="shoppingCartList__description">
              <p>{element.tittle}</p>
              <p>{element.amount}</p>
              <p>$ {element.price}</p>
            </div>
          </div>
        ))}
      </ul>
      <hr className="hr__cart" />
      <div className="shoppingCartList__coment">
        <button type="button" className="button_shopping">
          Agregar comentario a la orgen
        </button>
        <button type="button" className="button_shopping">
          Cupon de descuento
        </button>
      </div>
    </section>
  );
};
export default cartList;
