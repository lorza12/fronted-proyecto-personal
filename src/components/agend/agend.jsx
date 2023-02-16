import './agend.css';
import image from './assest/agendas-08.png';
import image2 from './assest/agendas fotos-08.png';

const agend = () => (
  <section className="agendContainer">
    <div className="agendContainer__agend">
      <img src={image} loading="eager" alt="Minibanner" className="fondo" />
      <button type="button" className="AgendVerMas">
        Ver mas
      </button>
      <p><img src={image2} loading="eager" alt="Minibanner" className="agenda" /></p>
    </div>
  </section>
);

export default agend;
