import react, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import MainSection from './mainSection'
import Footer from './footer'
// import './App.css'

function App() {

  useEffect(()=>{
    AOS.init({
      duration: 1000,
      once: true,

    });
  }, []);
 
  return (
    <>
      <MainSection/>
      <Footer/>
    </>
  )
}

export default App
