import './miniBanner.css';
import { useNavigate } from 'react-router-dom';

const miniBanner = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/products');
  };

  return (
    <section className="miniBannerContainer">
      <div className="infoClientContainer__vela">
        <img src="https://res.cloudinary.com/df4snwy5t/image/upload/v1677078485/dataFiles/Velaa-07_axdfhf.png" loading="eager" alt="Minibanner" className="fondo" />
        <button type="button" className="buttonVerMas" onClick={handleClick}>
          Ver mas
        </button>
        <p><img src="https://res.cloudinary.com/df4snwy5t/image/upload/v1677079837/dataFiles/Pagweb1-07_1_vyxxpj.png" loading="eager" alt="Minibanner" className="vela" /></p>
      </div>
    </section>
  );
};

export default miniBanner;
