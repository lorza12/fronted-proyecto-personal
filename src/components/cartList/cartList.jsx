/* eslint-disable no-shadow */
import { useDispatch, useSelector } from 'react-redux';
import './cartList.css';
import { RiDeleteBinLine } from 'react-icons/ri';
import { GrFormSubtract } from 'react-icons/gr';
import { MdOutlineAdd } from 'react-icons/md';
import { DeleteItem, incrementAmount, decrementAmount } from '../../feactures/cart/cartSlice';

const cartList = () => {
  const item = useSelector((state) => state.cart.productItem);
  console.log('🚀 ~ file: cartList.jsx:9 ~ cartList ~ item', item);
  const dispatch = useDispatch();

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
              <div className="counterCart">
                <button
                  type="button"
                  aria-label="save"
                  className="buttonsCart"
                  onClick={() => dispatch(decrementAmount(element._id))}
                >
                  <GrFormSubtract />
                </button>
                <p>{element.amount}</p>
                <button
                  type="button"
                  aria-label="save"
                  className="buttonsCart"
                  onClick={() => dispatch(incrementAmount(element._id))}
                >
                  <MdOutlineAdd />
                </button>
              </div>
              <p>$ {element.price}</p>
              <div className="iconButtonDelete">
                <button
                  type="button"
                  className="buttonsCart"
                  aria-label="Save"
                  onClick={() => dispatch(DeleteItem(element._id))}
                >
                  <RiDeleteBinLine className="delectIcon" />
                </button>
              </div>
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
