import './miniBanner.css';
import { useNavigate } from 'react-router-dom';
import image from './assest/Velaa-07.png';
import image2 from './assest/vela sola-07.png';

const miniBanner = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/products');
  };

  return (
    <section className="miniBannerContainer">
      <div className="infoClientContainer__vela">
        <img src={image} loading="eager" alt="Minibanner" className="fondo" />
        <button type="button" className="buttonVerMas" onClick={handleClick}>
          Ver mas
        </button>
        <p><img src={image2} loading="eager" alt="Minibanner" className="vela" /></p>
      </div>
    </section>
  );
};

export default miniBanner;
