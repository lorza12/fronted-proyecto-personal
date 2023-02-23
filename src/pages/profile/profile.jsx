/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-wrap-multilines */
import { useState, useEffect } from 'react';
import './profile.css';
import { useDispatch } from 'react-redux';
import getMyProfile, { modifyUser } from '../../services/user';

const profile = () => {
  const dispatch = useDispatch();
  const [profiles, setProfiles] = useState(null);
  const [open, setOpen] = useState();

  const toggle = () => {
    setOpen(!open);
  };
  useEffect(() => {
    const fetchData = async () => {
      const response = await getMyProfile();
      setProfiles(response);
    };
    fetchData();
  }, []);

  const handleModifyProfile = (event) => {
    event.preventDefault();
    const { firstName } = event.target;
    try {
      const dataToSend = {
        firstName: firstName.value.toLowerCase(),
      };
      console.log(dataToSend, 'id:', profiles._id);
      dispatch(modifyUser(profiles._id, dataToSend));
    } catch (err) {
      throw new Error(err);
    }
  };
  return (
    <section className="profileContainer">
      <section className="profileContainer__section1">
        {profiles && (
        <div className="profileContainer__section1-title">
          <h1>Mi cuenta</h1>
          <p>hola {profiles.firstName} aqui podras ver y editar los datos de tu cuenta</p>
        </div>
        )}
      </section>
      <section className="profileContainer__section2">
        <div className="profileContainer__section2-data">
          {profiles && (
          <><h1>Detalles de la cuenta</h1><tr>
              <th>Nombre:</th>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <th>{profiles.firstName}</th>
            </tr><hr /><tr>
                <th>Apellido:</th>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <th>{profiles.lastName}</th>
              </tr><hr /><tr>
                <th>Correo:</th>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <th>{profiles.email}</th>
              </tr><hr /></>)}
          <button
            type="submit"
            onClick={toggle}
          >
            Editar perfil
          </button>
          {open && (
            <form
              className="form-profile"
              onSubmit={handleModifyProfile}
            >
              <label htmlFor="firstName" className="signupForm__label">
                Nuevo nombre
                <input
                  type="text"
                  name="firstName"
                  className=""
                  placeholder="Ingrese su nuevo nombre"
                  required
                  id="firstName"
                />
              </label>
              <button type="submit">
                Enviar datos
              </button>
            </form>
          )}
        </div>
        <div className="profileContainer__section2-orden">
          <h1>Historial de ordenes</h1>
        </div>

      </section>
    </section>

  );
};

export default profile;
