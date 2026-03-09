import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home';
import NavBar from './components/navbar';
import About from './pages/About';
import { Routes, Route } from 'react-router';

const App = () => { 
  // const [count, setCount] = useState(0)
  const bookNumber = 1;

  return (
    <> {/* this is called fragment */}
      <NavBar />
      <div>
        <div>
          <Routes>
            <Route path='/' element={<Home />}>Home</Route>
            <Route path='/about' element={<About />}>About</Route>
          </Routes>
        </div>
        <Home />
      </div>
    </>
  )
}

export default App
