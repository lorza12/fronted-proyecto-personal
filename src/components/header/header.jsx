import Types from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './header.css';
import { RxAvatar } from 'react-icons/rx';
import { TfiShoppingCartFull } from 'react-icons/tfi';
import { BsSearch } from 'react-icons/bs';
import velefantLogo from './assets/logo-02.png';
import { setProducts } from '../../feactures/products/productoSlice';
import ShoppingCart from '../shoppingCart/shoppingCart';
import Badge from '../badge/badge';
import { selectAuth } from '../../feactures/login/authLoginSlice';

const Header = ({ toggle, open }) => {
  const navegat = useNavigate();
  const dispatch = useDispatch();
  const { isAuth } = useSelector(selectAuth);
  console.log('🚀 ~ file: header.jsx:19 ~ Header ~ isAuth', isAuth);

  const ClickRituls = () => {
    navegat('/');
  };
  const ClickCreateProduct = () => {
    navegat('/create-product');
  };
  const ClickProducts = (e) => {
    e.preventDefault();
    navegat('/products');
    dispatch(setProducts());
  };
  const ClickBlog = () => {
    navegat('/');
  };

  const ClickLogin = () => {
    navegat('/login');
  };

  return (
    <section>
      <section className="hederContainer1">
        <div className="hederContainer1__search">
          <p className="ppp">
            <BsSearch color="#D8476B" />
          </p>
        </div>
        <div className="hederContainer1__products">
          <button
            className="buttons__header"
            type="button"
            onClick={ClickProducts}
          >
            Productos
          </button>
        </div>
        <div className="hederContainer1__kits">
          <button
            className="buttons__header"
            type="button"
            onClick={ClickProducts}
          >
            Kits
          </button>
        </div>
        <div className="hederContainer1__logo">
          <Link to="/" className="miniContainer__logoLink">
            <img src={velefantLogo} loading="eager" alt="logo" />
          </Link>
        </div>
        <div className="hederContainer1__products">
          <button
            className="buttons__header"
            type="button"
            onClick={ClickRituls}
          >
            Rituales
          </button>
        </div>
        <div className="hederContainer1__kits">
          <button
            className="buttons__header"
            type="button"
            onClick={ClickBlog}
          >
            Blog
          </button>
        </div>
        <div className="hederContainer1__creatProducts">
          {isAuth && (
            <button
              className="buttons__header"
              type="button"
              onClick={ClickCreateProduct}
            >
              Agregar producto
            </button>
          )}
        </div>
        <div className="hederContainer1__extra">
          <div>
            <button type="button" className="butto_cart" onClick={ClickLogin}>
              <p className="ppp">
                <RxAvatar color="#D8476B" />
              </p>
            </button>
          </div>
          <div className="headerContainer1__icon-cart">
            <div className="cartt">
              <button className="butto_cart" type="button" onClick={toggle}>
                <p className="ppp">
                  <TfiShoppingCartFull color="#D8476B" className="iconnn" />
                </p>
              </button>
            </div>
          </div>
          <div className="bodge">
            <Badge className="bodge" />
          </div>
        </div>
      </section>
      <div className="hrHeader">
        <hr color="#D8476B" />
      </div>
      <section className="headerContainer1__cart">
        <div className="headerContainer1__cart-into">
          {open && (
            <section className="cartInto">
              <ShoppingCart />
            </section>
          )}
        </div>
      </section>
    </section>
  );
};

Header.propTypes = {
  toggle: Types.func.isRequired,
  open: Types.bool.isRequired,
};

export default Header;
