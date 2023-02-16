import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RiQuestionFill } from 'react-icons/ri';
import './formPay.css';

const formPay = () => {
  const navigate = useNavigate();
  const item = useSelector((state) => state.cart.productItem);
  const total = window.localStorage.getItem('total');

  const handleClick = () => {
    navigate('/payment');
  };
  return (
    <section className="formPayContainer">
      <section className="formPayContainer__form">
        <p>Informacion de contacto&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <spas className="span1">¿Ya tienes una cuenta? </spas><spas className="span">inicia sesion</spas>
        </p>
        <input type="text" className="destinatario" placeholder="Correo" />
        <br />
        <br />
        <label><input type="checkbox" id="cbox1" value="first_checkbox" />
          Enviarme novedades y ofertas
        </label>
        <p>Dirección de envío</p>
        <input type="text" className="destinatario" placeholder="Pais/Nacionalidad" />
        <br />
        <br />
        <input type="text" className="name-last" placeholder="Nombre" />
        <input type="text" className="name-last" placeholder="Apellido" />
        <br />
        <br />
        <input type="text" className="destinatario" placeholder="Cedula o Nit" />
        <br />
        <br />
        <input type="text" className="destinatario" placeholder="Direccion" />
        <br />
        <br />
        <input type="text" className="destinatario" placeholder="Numero cas/depart, nombre de unidad oconjunto..." />
        <br />
        <br />
        <input type="text" className="destinatarios" placeholder="Ciudad" />
        <input type="text" className="destinatarios" placeholder="Departamento" />
        <input type="text" className="destinatarios" placeholder="Codigo postal" />
        <br />
        <br />
        <label><input type="checkbox" id="cbox1" value="first_checkbox" /> Guardad mi informacion
        </label>
        <br />
        <br />
        <button type="button" className="Finalizar" onClick={handleClick}>
          finalizar compra
        </button>
      </section>
      <hr />
      <section className="formPayContainer__infoPay">
        {item.map((element) => (
          <>
            <div className="headerFormPay">
              <img className="imageinfoPay" src={element.image} loading="eager" alt="" />
              <p>{element.tittle}</p>
              <p> ${total}</p>
            </div>
            <hr />
            <button type="button" className="button_shopping">
              Agregar cupon de descuento
            </button>
            <button type="button" className="button_shopping2">
              Usar
            </button>
            <hr />
            <div className="subTotal">
              <p>SUBTOTAL &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;$ {total}
              </p>
            </div>
            <p>Envios <RiQuestionFill /></p>
            <hr />
            <p>Total &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;cop {total}
            </p>
          </>
        ))}
      </section>
    </section>
  );
};

export default formPay;
