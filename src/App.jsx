import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Courses from './components/Courses';
import Testimonials from './components/Testimonials';
import Registration from './components/Registration';
import Footer from './components/Footer';
import './styles/global.css';

function App() {
  return (
    <div className="App">

      <Header />
      <Hero />
      <Features />
      <Courses />
      {/* <Testimonials /> */}
      <Registration />
      <Footer />

    </div>
  );
}

export default App;