import Types from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './header.css';
// import { useEffect, useState } from 'react';
import { RxAvatar } from 'react-icons/rx';
import { TfiShoppingCartFull } from 'react-icons/tfi';
import { BsSearch } from 'react-icons/bs';
import velefantLogo from './assets/logo-02.png';
import { setProducts } from '../../feactures/products/productoSlice';
import ShoppingCart from '../shoppingCart/shoppingCart';
import Badge from '../badge/badge';
import { selectAuth } from '../../feactures/login/authLoginSlice';
// import getMyProfile from '../../services/user';

const Header = ({ toggle, open }) => {
  // const data = useSelector((state) => state.product);
  // const [profile, setProfile] = useState(null);
  const navegat = useNavigate();
  const dispatch = useDispatch();
  const { isAuth } = useSelector(selectAuth);
  console.log('🚀 ~ file: header.jsx:19 ~ Header ~ isAuth', isAuth);

  // useEffect(() => {
  //   const fetchProfile = async () => {
  //     const data = await getMyProfile();
  //     setProfile(data);
  //   };
  //   fetchProfile();
  // }, []);

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
  // const clearCart = () => {
  // };
  const ClickBlog = () => {
    navegat('/');
  };
  // const ClickLogin = () => {
  //   navegat('/login');
  // };
  // const handleAppoiment = () => {
  //   navegat(`/appointment`);
  // };

  return (
    <section>
      <section className="hederContainer1">
        <div className="hederContainer1__Logo">
          <Link to="/" className="miniContainer__logoLink">
            <img src={velefantLogo} alt="logo" />
          </Link>
        </div>
        <div className="hederContainer1__extra">
          <p>
            <BsSearch color="#D8476B" />
          </p>
          <p>
            <RxAvatar color="#D8476B" />
          </p>
          <div className="icon-badge">
            <p>
              <button
                className=""
                type="button"
                onClick={toggle}
              >
                <TfiShoppingCartFull color="#D8476B" />
              </button>
            </p>
            <p>
              <Badge />
            </p>
          </div>
        </div>
      </section>
      {open && (
        <section>
          <ShoppingCart />
        </section>
      )}
      <hr className="hrHeader" color="#F5B2B8" />
      <section className="headerContainer2">
        <div className="headerContainer2__list">
          <ol className="lists">
            <li>
              <button
                className="buttons__header"
                type="button"
                onClick={ClickProducts}
              >
                Productos
              </button>
            </li>
            <li>
              <button
                className="buttons__header"
                type="button"
                onClick={ClickRituls}
              >
                Rituales
              </button>
            </li>
            <li>
              <button
                className="buttons__header"
                type="button"
                onClick={ClickBlog}
              >
                Blog
              </button>
            </li>
            <li>
              {isAuth && (
                <button
                  className="buttons__header"
                  type="button"
                  onClick={ClickCreateProduct}
                >
                  Agregar producto
                </button>
              )}
            </li>
          </ol>
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
