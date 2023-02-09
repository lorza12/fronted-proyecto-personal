import CartList from '../cartList/cartList';
import TotalCart from '../totalCart/totalCart';

const shoppingCart = () => {
  return (
    <section className="shopping-cart">
      <div className="sopping-cart__header">
        <h1>Tu carrito</h1>
        <p> ¡Nos encanta los productos que elegiste!</p>
        <br />
        <CartList />
      </div>
      <TotalCart />
    </section>
  );
};

export default shoppingCart;
