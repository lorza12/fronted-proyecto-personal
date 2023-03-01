/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { RiQuestionFill } from 'react-icons/ri';
import './formPay.css';
import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import Loader from '../../components/loader/loader';
import Message from '../../components/message/message';

const initialForm = {
  name: '',
  email: '',
  identification: '',
  address: '',
  home: '',
  city: '',
  country: '',
  department: '',
  postalCode: '',
  comments: '',
};
const validationsFomr = (form) => {
  const errors = {};
  const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  const regexIdentification = /^([0-9])*$/;

  if (!form.email.trim()) {
    errors.email = "*Requiere el 'correo'";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "*El campo 'Correo' es incorrecto";
  }

  if (!form.name.trim()) {
    errors.name = "*El campo 'Nombre' es requerido";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "*El campo 'Nombre' solo acepta letras y espacios en blanco";
  }

  if (!form.identification.trim()) {
    errors.identification = '*Numero de identificacion requerido';
  } else if (!regexIdentification.test(form.identification.trim())) {
    errors.identification = '*Solo se aceptan numeros';
  }

  if (!form.address.trim()) {
    errors.address = "*El campo 'Direccion' es requerido";
  }

  if (!form.home.trim()) {
    errors.home = '*Este campo es requerido';
  }

  if (!form.country.trim()) {
    errors.country = "*El campo 'Pais' es requerido";
  } else if (!regexName.test(form.country.trim())) {
    errors.country = "*El campo 'Pais' solo acepta letras y espacios en blanco";
  }

  if (!form.city.trim()) {
    errors.city = "*El campo 'Cuidad' es requerido";
  } else if (!regexName.test(form.city.trim())) {
    errors.city = "*El campo 'Cuidad' solo acepta letras y espacios en blanco";
  }

  if (!form.department.trim()) {
    errors.department = "*El campo 'Departamento' es requerido";
  } else if (!regexName.test(form.department.trim())) {
    errors.department = "*El campo 'Departamento' solo acepta letras y espacios en blanco";
  }

  if (!form.postalCode.trim()) {
    errors.postalCode = "*El campo 'Codigo postal' es requerido";
  } else if (!regexIdentification.test(form.postalCode.trim())) {
    errors.postalCode = '*Solo se aceptan numeros';
  }

  return errors;
};

const formPay = () => {
  const item = useSelector((state) => state.cart.productItem);
  const total = window.localStorage.getItem('total');
  const {
    form,
    errors,
    loading,
    resp,
    handleChange,
    handleBlur,
    handleSubmit,
    handleClick,
  } = useForm(initialForm, validationsFomr);

  return (
    <section className="formPayContainer">
      <section className="formPayContainer__form">
        <form onSubmit={handleSubmit}>
          <p>
            Informacion de
            contacto&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <spas className="span1">¿Ya tienes una cuenta?</spas>
&nbsp;
            <Link to="/login" className="goLogin">
              <spas className="span">inicia sesion</spas>
            </Link>
          </p>
          <input
            type="email"
            name="email"
            className="destinatario"
            placeholder="Escribe tu correo"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.email}
            required
          />
          {errors.email && <p className="errorStyles">{errors.email}</p>}
          <br />
          <br />
          <label>
            <input type="checkbox" id="cbox1" value="first_checkbox" />
            Enviarme novedades y ofertas
          </label>
          <p>Datos de envío</p>
          <input
            type="text"
            name="name"
            className="destinatario"
            placeholder="Escribe tu nombre"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.name}
            required
          />
          {errors.name && <p className="errorStyles">{errors.name}</p>}
          <br />
          <br />
          <input
            type="text"
            name="identification"
            className="destinatario"
            placeholder="Cedula o Nit"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.identification}
            required
          />
          {errors.identification && <p className="errorStyles">{errors.identification}</p>}
          <br />
          <br />
          <input
            type="text"
            name="address"
            className="destinatario"
            placeholder="Direccion"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.address}
            required
          />
          {errors.address && <p className="errorStyles">{errors.address}</p>}
          <br />
          <br />
          <input
            type="text"
            name="home"
            className="destinatario"
            placeholder="Numero de la casa/apartamento, nombre de la unidad o conjunto..."
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.home}
            required
          />
          {errors.home && <p className="errorStyles">{errors.home}</p>}
          <br />
          <br />
          <input
            type="text"
            name="country"
            className="destinatario"
            placeholder="Pais"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.country}
            required
          />
          {errors.country && <p className="errorStyles">{errors.country}</p>}
          <br />
          <br />
          <input
            type="text"
            name="city"
            className="destinatarios"
            placeholder="Cuidad"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.city}
            required
          />
          {errors.city && <p className="errorStyles">{errors.city}</p>}
          <input
            type="text"
            name="department"
            className="destinatarios"
            placeholder="Departamento"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.department}
            required
          />
          {errors.department && <p className="errorStyles">{errors.department}</p>}
          <input
            type="text"
            name="postalCode"
            className="destinatarios"
            placeholder="Codigo postal"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.postalCode}
            required
          />
          {errors.postalCode && <p className="errorStyles">{errors.postalCode}</p>}
          <br />
          <br />
          <label>
            <input type="checkbox" id="cbox1" value="first_checkbox" />
            {' '}
            Guardad
            mi informacion
          </label>
          <br />
          <br />
          <textarea
            name="comments"
            cols="50"
            rows="5"
            placeholder="Comentarios"
            onChange={handleChange}
            value={form.comments}
            required
          />
          <input type="submit" value="Enviar formulario" className="Finalizar" />
        </form>
        <br />
        {loading && <Loader />}
        {resp && <Message msg="los datos han sido enviados correctamente" bgColor="#E58624" />}
        <br />
        <hr />
        {resp && (
        <button
          type="button"
          className="Finalizar"
          onClick={handleClick}
        >
          Continuar con el pago
        </button>
        )}
      </section>
      <hr />
      <section className="formPayContainer__infoPay">
        {item.map((element) => (
          <>
            <div className="headerFormPay">
              <img
                className="imageinfoPay"
                src={element.image}
                loading="eager"
                alt=""
              />
              <p>{element.tittle}
                <br />
                <br />
                <br />
                Cantidad: &nbsp; {element.amount}
              </p>
              <p>
                {' '}
                $
                {element.price}
              </p>
            </div>
            <hr />
          </>
        ))}
        <button type="button" className="button_shopping">
          Agregar cupon de descuento
        </button>
        <button type="button" className="button_shopping2">
          Usar
        </button>
        <hr />
        <div className="subTotal">
          <p>
            SUBTOTAL
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;$
            {' '}
            {total}
          </p>
        </div>
        <p>
          Envios
          {' '}
          <RiQuestionFill />
        </p>
        <hr />
        <p>
          Total &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;cop
          {' '}
          {total}
        </p>
      </section>
    </section>
  );
};

export default formPay;
