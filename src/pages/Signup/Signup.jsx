import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Modal from '../modal/modal';
import Terms from '../../components/terminos/Terms';
import './Signup.css';
import { createUser } from '../../feactures/users/usersSlice';
import { openModal } from '../../feactures/modal/loginmodalSlice';

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.modal);
  const [errorMessage, setErrorMessage] = useState(false);

  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      firstName, lastName, password, email, birthday, gender,
    } = e.target;

    try {
      const action = createUser({
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value.toLowerCase(),
        password: password.value,
        birthday: birthday.value,
        gender: gender.value,
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
      }, 200);
      throw new Error(err);
    }
  };

  const gender = ['Male', 'Female', 'Other'];

  return (
    <div>
      {errorMessage === true ? <Modal text="Wrong Credentials" /> : null}
      {isOpen && <Terms />}
      <div className="signupForm__globalContainer">
        <form className="signupForm__container" onSubmit={handleSubmit}>
          <h1 className="signupForm__title">Registro</h1>
          <label htmlFor="firstName" className="signupForm__label">
            Nombre
            <input
              type="text"
              name="firstName"
              className="signupForm__input"
              placeholder="Ingrese su nombre"
              required
            />
          </label>
          <label htmlFor="lastName" className="signupForm__label">
            Apellido
            <input
              type="text"
              name="lastName"
              className="signupForm__input"
              placeholder="Ingrese sus apellido"
              required
            />
          </label>
          <label htmlFor="email" className="signupForm__label">
            Correo electronico
            <input
              type="email"
              name="email"
              className="signupForm__input"
              placeholder="Ingrese su correo"
              required
            />
          </label>
          <label htmlFor="password" className="signupForm__label">
            Contraseña
            <input
              type="password"
              name="password"
              className="signupForm__input"
              placeholder="Ingrese una contraseña"
              required
            />
          </label>
          <label htmlFor="gender" className="signupForm__label">
            Sexo
            <select
              name="gender"
              id="gender"
              className="signupForm__input signupForm__input--select"
              required
              // onChange={handleInput}
            >
              {gender.map((data) => (
                <option key={data} value={data}>
                  {data}
                </option>
              ))}
            </select>
          </label>

          <label htmlFor="password" className="signupForm__label">
            Fecha de nacimiento
            <input
              type="date"
              name="birthday"
              className="signupForm__input signupForm__input--date"
              placeholder="Birthday"
              required
            />
          </label>

          <div className="signupOptions__container">
            <span className="signupForm__span">
              <label htmlFor="conditions" className="signupForm__labelOpt">
                <input
                  type="checkbox"
                  name="conditions"
                  className="signupForm__inputOpt"
                  onClick={handleCheck}
                  required
                />
                De acuerdo
                <button
                  onClick={() => dispatch(openModal())}
                  type="button"
                  className="signupForm__terms--conditions"
                >
                  Terminos y condiciones
                </button>
              </label>
            </span>
          </div>
          {checked === true ? (
            <button type="submit" className="signupForm__btn">
              Regístrate ahora →
            </button>
          ) : (
            <button type="submit" className="signupForm__btn" disabled>
              Regístrate ahora →
            </button>
          )}
          <Link to="/login" className="signupForm__link--login">
            ¿Ya tienes una cuenta? Acceder
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
