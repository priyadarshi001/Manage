import Features from './component/Features';
import Footer from './component/Footer';
import Hero from './component/Hero';
import Navbar from './component/Navbar';
import Testimonials from './component/Testimonials';
import './index.css';

function App() {
  return (
    <div className='p-0 m-0'>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
