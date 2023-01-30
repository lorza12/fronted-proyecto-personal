// import Types from 'prop-types';
import { Link, } from 'react-router-dom';
import './header.css'
// import { useSelector, } from 'react-redux';
// import { useEffect, useState } from "react"
// import { AiOutlineSearch } from 'react-icons/ai';
// import { BsTelephonePlus, BsTelephone } from 'react-icons/bs';
// import { ImProfile } from 'react-icons/im';
// import { GiPlagueDoctorProfile } from 'react-icons/gi';
import { RxAvatar } from "react-icons/rx";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { BsSearch } from "react-icons/bs";
import velefantLogo from './assets/logo-02.png';




const Header = () =>
  // const [profile, setProfile] = useState(null)
  // const navegat = useNavigate();
  // const dispatch = useDispatch();
  // const { isAuth, profile } = useSelector();

  // useEffect(() => {
  //   const fetchProfile = async () => {
  //     const data = await getMyProfile()
  //     setProfile(data)
  //   }
  //   fetchProfile()
  // }, [])

  // const handleLogout = () => {
  //   localStorage.removeItem('auth');
  //   localStorage.removeItem('token');
  //   dispatch(logout());
  //   navegat('/');
  // };
  // const ClickHome = () => {
  //   navegat('/');
  // };
  // const ClickFindDr = () => {
  //   navegat('/FindDr');
  // };
  // const ClickProducts = () => {
  //   navegat('/products');
  // };
  // const ClickCart = () => {
  //   navegat('/cart');
  // };
  // const ClickProfile = () => {
  //   navegat('/profile');
  // };
  // const ClickLogin = () => {
  //   navegat('/login');
  // };
  // const handleAppoiment = () => {
  //   navegat(`/appointment`);
  // };

   (
    <section>
      <section className="hederContainer1">
        <div className="hederContainer1__Logo">
        <Link to="/" className="miniContainer__logoLink">
            <img src={velefantLogo} alt="logo" />
        </Link>
        </div>
        <div className='hederContainer1__extra'>
        <p>
         <BsSearch color='#D8476B'/>
        </p>
        <p>
         <RxAvatar color='#D8476B' />
        </p>
        <p>
        <TfiShoppingCartFull color='#D8476B' />
        </p>
        </div>
        </section>
        <hr className='hrHeader' color="#F5B2B8"/>
        <section className='headerContainer2'>
        <div className='headerContainer2__list'>
          <ol className='lists'>
            <li>Productos</li>
            <li>Rituales</li>
            <li>Blog</li>
          </ol>
        </div>
        </section>
    </section>
  )



// Header.propTypes = {
//   toggle: Types.func.isRequired,
//   open: Types.bool.isRequired,
// };

export default Header;
