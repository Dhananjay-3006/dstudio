import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import HeroSection from './component/HeroSection';
import FeatureSection from './component/FeatureSection';
import Workflow from './component/Workflow';
import Pricing from './component/Pricing';
import Testimonials from './component/Testimonials';
import Footer from './component/Footer';



const App = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Navbar/>
        <HeroSection/>
        <FeatureSection/>
        <Workflow/>
        <Pricing/>
        <Testimonials/>
        <Footer/>
      </div>
    </>
  )
}

export default App;