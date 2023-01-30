import { useState,} from 'react';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer'
import Banner from './components/banner/banner'




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
      <Footer />
    </div>
    )

}

export default App;
