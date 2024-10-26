import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { Header } from './components/Header';
import {HeroSection} from './components/HeroSection';

import { MobileAppDownload } from './components/MobileAppDownload';
import PopularDishes from './components/PopularDishes';
import BrowseCategories from './components/BrowseCategories';
import { Feedback } from './components/Feedback';
import { Footer } from './components/Footer';
function App() {
  return (
    <>
    <Header/>
    <HeroSection/>
    <MobileAppDownload />
    <PopularDishes />
    <BrowseCategories />
    <Feedback/>
    <Footer />
    </>
  );
}

export default App;
