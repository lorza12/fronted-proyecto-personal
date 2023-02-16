import './feetPage.css';
import { ImWhatsapp } from 'react-icons/im';
import { HiOutlineMail } from 'react-icons/hi';
import { GoLocation } from 'react-icons/go';
import { FiFacebook } from 'react-icons/fi';
import { AiOutlineInstagram } from 'react-icons/ai';

const footer = () => (
  <section>
    <section className="footerContainer">
      <div className="footerContainer__nosotros">
        <div>
          <h1>Nosotros</h1>
        </div>
        <div className="footerContainer__parrafo">
          <p>Quienes somos</p>
          <ol className="listsFooter">
            <li>Productos</li>
            <li>Rituales</li>
            <li>Blog</li>
          </ol>
        </div>
      </div>
      <div className="footerContainer__ayuda">
        <div>
          <h1>Ayuda</h1>
        </div>
        <div>
          <ol className="listsFooter">
            <li>Preguntas frecuentes</li>
            <li>Politica de provacidad</li>
            <li>Terminos y condiciones</li>
            <li>Cambios y garantias</li>
            <li>Entregas y envios</li>
          </ol>
        </div>
      </div>
      <div className="footerContainer__velefant">
        <div>
          <h1>Velefant</h1>
        </div>
        <div className="footerContainer__velefant__icons">
          <div className="lineaVelefant">
            <p>
              <GoLocation color="E58624" />
            </p>
            <p className="parrafoVelefant"> Cali,Colombia</p>
          </div>
          <div className="lineaVelefant">
            <p>
              <HiOutlineMail color="E58624" />
            </p>
            <p className="parrafoVelefant"> velefant@gmail.com</p>
            <div />
          </div>
          <div className="lineaVelefant">
            <p>
              <ImWhatsapp color="E58624" />
            </p>
            <p className="parrafoVelefant"> +57 300 443 9205</p>
          </div>
          <div className="redes">
            <p>
              <FiFacebook color="E58624" />
            </p>
            <p>
              <AiOutlineInstagram color="E58624" />
            </p>
          </div>
        </div>
      </div>
    </section>
  </section>
);

export default footer;
