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
        <Navbar/>        
      <div className="max-w-7xl mx-auto px-6">    
        <HeroSection/>
        <FeatureSection/>
        <Workflow/>
        <Pricing/>
        <Testimonials/>     
      </div>  
         <Footer/> 
    </>
  )
}

export default App;