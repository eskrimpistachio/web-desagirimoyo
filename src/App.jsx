import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Struktur from './pages/Struktur'
import Footer from './components/Footer'
import Lembaga from './pages/Lembaga';

function App() {
  return (
    <div className='text-white font-poppins'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/struktur' element = {<Struktur/>}/>
          <Route path='/lembaga' element = {<Lembaga/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
