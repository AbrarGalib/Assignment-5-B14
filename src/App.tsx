import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Banner from "./components/Banner"
import Navbar from "./components/Navbar"
import TechSection from "./components/TechSection"
import Footer from "./components/Footer";


function App() {

  return (
    <>
      <Navbar />
      <Banner />
      <TechSection />
  <ToastContainer />
  <Footer />
    </>
  )
}

export default App
