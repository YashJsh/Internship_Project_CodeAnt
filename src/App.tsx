import { BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css'

import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/signup" element={<Signup/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
