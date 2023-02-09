import { useSelector } from 'react-redux';

const cartList = () => {
  const item = useSelector((state) => state.cart.productItem);

  return (
    <ul className="shopping-cart-items">
      {item.map((element) => (
        <><img className="image" src={element.image} alt="" />
          <p>{element.description}</p>
        </>
      ))}
    </ul>
  );
};
export default cartList;
