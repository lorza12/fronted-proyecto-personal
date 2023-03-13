/* eslint-disable react/jsx-closing-tag-location */
import Types from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './header.css';
import { RxAvatar } from 'react-icons/rx';
import { TfiShoppingCartFull } from 'react-icons/tfi';
import { BsSearch } from 'react-icons/bs';
import { MdOutlineStorage } from 'react-icons/md';
import velefantLogo from './assets/logo-02.png';
import { setProducts } from '../../feactures/products/productoSlice';
import ShoppingCart from '../shoppingCart/shoppingCart';
import Badge from '../badge/badge';
import { selectAuth } from '../../feactures/login/authLoginSlice';

const Header = ({
  toggle, open, toggle2, open2,
}) => {
  const navegat = useNavigate();
  const dispatch = useDispatch();
  const { isAuth, profile } = useSelector(selectAuth);

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

  const handleClickProfile = () => {
    navegat('/profile');
  };

  return (
    <section className="headerContainer">
      <div className="headercontainer2">
        <div className="hederContainer1__namesPages">
          {isAuth && profile.role === 'ADMIN' && (
          <button
            className="buttons__header"
            type="button"
            onClick={ClickCreateProduct}
          >
            Agregar producto
          </button>
          )}
        </div>
        <div className="headerContainer2__profile">
          {isAuth && profile.role === 'USER' && (
          <><p>hola {profile.firstName}</p>&nbsp;<button
            className="buttons__header-profile"
            type="button"
            onClick={handleClickProfile}
          >
            Ver perfil
          </button>
          </>
          )}
        </div>
      </div>
      <section className="hederContainer1">
        <div className="headerContainer1__searcAndMd">
          <div className="miniContainer3">
            <div className="miniContainer3__img1">
              <button type="button" className="butto_cart" onClick={toggle2}>
                <p className="ppp">
                  <MdOutlineStorage color="#D8476B" />
                </p>
              </button>
            </div>
          </div>
        </div>
        <div className="hederContainer1__namesPages">
          <button
            className="buttons__header"
            type="button"
            onClick={ClickProducts}
          >
            Productos
          </button>
        </div>
        <div className="hederContainer1__namesPages">
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
        <div className="hederContainer1__namesPages">
          <button
            className="buttons__header"
            type="button"
            onClick={ClickRituls}
          >
            Rituales
          </button>
        </div>
        <div className="hederContainer1__namesPages">
          <button
            className="buttons__header"
            type="button"
            onClick={ClickBlog}
          >
            Blog
          </button>
        </div>
        <div className="hederContainer1__extra">
          <div className="hederContainer1__search">
            <p className="pppp">
              <BsSearch color="#D8476B" />
            </p>
          </div>
          <div className="hederContainer1__login">
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
      <section className="headerContainer1__nav-pages">
        <div className="headerContainer1__cart-intoo">
          {open2 && (
          <><><><button
            className="buttons__header"
            type="button"
            onClick={ClickProducts}
          >
            Productos
          </button>
            <div>
              <hr />
            </div>
            <button
              className="buttons__header"
              type="button"
              onClick={ClickProducts}
            >
              Kits
            </button>
          </><button
            className="buttons__header"
            type="button"
            onClick={ClickLogin}
          >
            Iniciar sesion
          </button></><button
            className="buttons__header"
            type="button"
            onClick={handleClickProfile}
          >
            Perfil
          </button></>
          )}
        </div>
      </section>
    </section>
  );
};

Header.propTypes = {
  toggle: Types.func.isRequired,
  open: Types.bool.isRequired,
  toggle2: Types.func.isRequired,
  open2: Types.bool.isRequired,
};

export default Header;
