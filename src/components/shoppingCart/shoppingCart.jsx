import CartList from '../cartList/cartList';
import TotalCart from '../totalCart/totalCart';
import './shoppingCart.css';

const shoppingCart = () => {
  return (
    <section className="shopping-cart">
      <div className="sopping-cart__header">
        <h1>Tu carrito</h1>
        <p> ¡Nos encanta los productos que elegiste!</p>
        <hr className="hr__cart1" />
      </div>
      <div className="shopping-cart__cartList">
        <CartList />
        <br />
        <br />
        <br />
        <br />
        <br />
        <hr className="hr__shoppingCart" />
        <TotalCart />
      </div>
    </section>
  );
};

export default shoppingCart;
