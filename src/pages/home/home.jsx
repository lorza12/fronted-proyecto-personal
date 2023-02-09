import Banner from '../../components/banner/banner';
import InfoClient from '../../components/infoClient/infoClient';
import Category from '../../components/categorys/category';
import MiniBanner from '../../components/miniBanner/miniBanner';
import Blog from '../../components/blog/blog';
import BannerRedes from '../../components/bannerRedes/bannerRedes';

const home = () => (
  <section>
    <Banner />
    <InfoClient />
    <Category />
    <MiniBanner />
    <Blog />
    <BannerRedes />
  </section>
);

export default home;
