import './infoClient.css';
import image from './assets/info-06.png';

const infoClient = () => (
  <section className="infoClientContainer">
    <div className="infoContainer__img">
      <img src={image} loading="eager" alt="info" />
    </div>
  </section>
);

export default infoClient;
