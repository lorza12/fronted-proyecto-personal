import './banner.css';
import image from './assest/Banner1.png';

const banner = () => (
  <section className="bannerContainer">
    <img src={image} alt="banner" />
  </section>
);

export default banner;
