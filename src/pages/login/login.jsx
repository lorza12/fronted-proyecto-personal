import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import Modal from '../modal/modal';
import { loginAction } from '../../feactures/login/authLoginSlice';

const Login = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = e.target;

    try {
      const action = loginAction({
        email: email.value,
        password: password.value,
      });
      const { payload } = await dispatch(action);
      const { token } = payload;
      window.localStorage.setItem('token', token);

      localStorage.setItem('auth', JSON.stringify(payload));
      navigate('/');
    } catch (err) {
      setErrorMessage(true);
      setTimeout(() => {
        setErrorMessage(false);
      }, 1000);
      throw new Error(err);
    }
  };

  return (
    <div>
      {errorMessage === true ? <Modal text="Wrong Credentials" /> : null}
      <div className="loginForm__globalContainer">
        <form onSubmit={handleSubmit} className="loginForm__container">
          <h1 className="loginForm__title">Ingresar</h1>
          <label htmlFor="user" className="loginForm__label">
            Correo
            <input
              className="loginForm__input"
              type="email"
              name="email"
              placeholder="Ingrese su correo electronico"
              required
            />
          </label>
          <label htmlFor="password" className="loginForm__label">
            Contraseña
            <input
              className="loginForm__input"
              type="password"
              name="password"
              placeholder="Contraseña"
              required
            />
          </label>
          <div className="options__container">
            <span className="loginForm__span">
              <label htmlFor="remember" className="loginForm__labelOpt">
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  className="loginForm__inputOpt"
                  checked={checked}
                  onChange={handleCheck}
                />
                Recordar contraseña
              </label>
            </span>
            <span className="loginForm__span">
              Eres nuevo? &nbsp;
              <Link to="/sign-up" className="loginForm__link">
                Crea tu cuenta aqui
              </Link>
            </span>
          </div>
          <button type="submit" className="loginForm__btn">
            Ingresar →
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
