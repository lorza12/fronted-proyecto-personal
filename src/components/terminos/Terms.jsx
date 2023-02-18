import { useDispatch } from 'react-redux';
import { closeModal } from '../../feactures/modal/loginmodalSlice';
import './Terms.css';

const Terms = () => {
  const dispatch = useDispatch();
  return (
    <div className="termsOfService__global">
      <div className="termsOfService__container">
        <h1 className="termsOfService__title">
          TÉRMINOS Y CONDICIONES
        </h1>
        <p className="termsOfService__subtitle">

          Términos y condiciones de uso del sitio web en relación con www.velefant.com

        </p>
        <p className="termsOfService__paragraph">
          Estos Términos y condiciones rigen
          su uso del sitio web de Velefant ubicado en el nombre de dominio www.velefant.com.

          Al acceder y utilizar el Sitio Web, el Usuario acepta quedar obligado por los
          Términos y Condiciones establecidos en este aviso legal. El Usuario no podrá
          acceder, mostrar, usar, descargar y/o copiar o distribuir de otro modo
          Contenido obtenido en el sitio web para marketing y otros fines
          sin el consentimiento del proveedor
        </p>

        <p className="termsOfService__subtitle">Comunicaciones Electrónicas</p>
        <p className="termsOfService__paragraph">
          Al utilizar este Sitio Web o comunicarse con el Proveedor por medios electrónicos
          significa, el Usuario consiente y reconoce que todos y cada uno de los acuerdos,
          avisos, divulgaciones o cualquier otra comunicación satisface cualquier requisito legal
          requisito. incluyendo pero no limitado al requisito de que tal
          las comunicaciones deben ser por escrito.
        </p>
        <p className="termsOfService__subtitle">Comercio electrónico y privacidad</p>
        <p className="termsOfService__paragraph">
          El Sitio Web www.mebid.com vende productos de farmacia y médicos
          citas en línea. El uso de cualquier producto de servicio comprado de
          este sitio web es por cuenta y riesgo del comprador. El uso de cualquier producto
          del servicio comprado en este sitio web es por cuenta y riesgo del comprador.
          El comprador/usuario indemniza y mantiene indemne al Proveedor frente a
          cualquier pérdida, lesión o daño que pueda sufrir como resultado de
          utilizando los productos vendidos en el Sitio Web.
          <br />
          La información privada necesaria para la ejecución de las órdenes cursadas
          a través de la instalación de comercio electrónico, a saber, los datos personales
          del Usuario
          información y datos de la tarjeta de crédito, dirección y teléfono de entrega
          números serán mantenidos en la más estricta confidencialidad por el Proveedor y
          no vendidos ni puestos en conocimiento de terceros. Solo lo necesario
          información, es decir, la dirección de entrega y el teléfono de contacto
          se dará a conocer a los terceros que entreguen el producto. Crédito
          Los datos de la tarjeta no son conservados por el Proveedor en ningún caso.
          <br />
          El Proveedor no se hace responsable de las violaciones de seguridad.
          ocurriendo en el dispositivo electrónico del Usuario (Computadora Personal o
          otro dispositivo electrónico utilizado para navegar por el sitio web), lo que puede
          resultar
          debido a la falta de software de protección antivirus adecuado o spyware que
          el Usuario haya instalado sin darse cuenta en su dispositivo.
          <br />
          El Proveedor suministrará todos los bienes a la empresa de entrega en buen
          orden. El Proveedor no será responsable del estado de los bienes
          llegando a la dirección de entrega elegida por el Usuario.
        </p>
        <div className="termsOfService__agree">
          <h4 className="termsOfService__agree--title">

            Acepto los <span>Términos de servicio</span> y leo la Privacidad
            Aviso.
          </h4>
          <button
            className="termsOfService__btn"
            type="submit"
            onClick={() => dispatch(closeModal())}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Terms;
