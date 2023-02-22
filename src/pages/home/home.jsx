import Banner from '../../components/banner/banner';
import InfoClient from '../../components/infoClient/infoClient';
import Expe from '../../components/expe/expe';
import MiniBanner from '../../components/miniBanner/miniBanner';
import Agend from '../../components/agend/agend';
import BannerRedes from '../../components/bannerRedes/bannerRedes';
import Ritual from '../../components/ritual/ritual';

const home = () => (
  <section className="home">
    <Banner />
    <InfoClient />
    <Expe />
    <MiniBanner />
    <Agend />
    <Ritual />
    <BannerRedes />
  </section>
);

export default home;
