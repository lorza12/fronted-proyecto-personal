import './expe.css';
import image from './assest/experiencia cortado-07.png';

const expe = () => (
  <section className="expeContainer">
    <section className="expeContainer__img-text">
      <img src={image} loading="eager" alt="banner" />
      <p> <hr color="#FAC77C" className="hrTexr" /> <hr /> <hr /> <hr /> <hr /> <hr /> <hr /> <hr /> Queremos ser la luz en <br /> tu día a día,
        brindándote <br /> esto siempre desde el <br /> amor y
        sabiduría con <br /> nuestro arte. Apoyándote <br /> y nutriéndote
        en tu desa - <br /> rrollo personal y conexión <br /> espiritual potenciando
        esto <br /> desde los elementales y <br /> tus necesidades
      </p>
    </section>

  </section>
);

export default expe;
