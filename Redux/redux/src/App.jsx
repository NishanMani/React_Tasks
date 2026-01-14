import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home.jsx'    
import Users from './Pages/Users.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Navbar from './components/Navbar.jsx'


function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/users' element={<Users />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
