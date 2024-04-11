import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'

import Home from './pages/Home';
import Form from './pages/Form';

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
