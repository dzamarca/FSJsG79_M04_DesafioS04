import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home/Home'
import LoginPage from './components/Login/LoginPage';
import RegistrerPages from './components/Login/RegistrerPages';
import { Cart } from './components/Cart/Cart';
import Pizza from './components/Pizza/Pizza';

function App() {
  return (
    <>
      <Navbar/>
      {/* <Home/> */}
      {/* <RegistrerPages/> */}
      {/* <LoginPage/> */}
      {/* <Cart/> */}
      <Pizza/>
      <Footer/>
    </>
  )
}

export default App
