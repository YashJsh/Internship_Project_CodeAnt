import { BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css'

import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/signin" element={<SignIn/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
