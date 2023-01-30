import { useState,} from 'react';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer'
import Banner from './components/banner/banner'
import InfoClient from './components/infoClient/infoClient'
import Category from './components/categorys/category';
import MiniBanner from './components/miniBanner/miniBanner'
import Blog from './components/blog/blog';
import BannerRedes from './components/bannerRedes/bannerRedes';


const App = () => {
    const [open, setOpen] = useState(false);
    const toggle = () => {
      setOpen(!open);
    };
    return (
      <div className="App">
      <header className="App-header">
        <Header toggle={toggle} open={open}/>
      </header>
      <Banner />
      <InfoClient />
      <Category />
      <MiniBanner />
      <Blog />
      <BannerRedes />
      <Footer />
    </div>
    )

}

export default App;
