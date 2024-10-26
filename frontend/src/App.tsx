import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import { Signup } from './pages/Signup'
import { Signin } from './pages/signin';

function App() {

  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Navigate to="/signin" replace />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
        </Routes>
    </BrowserRouter>
);
}

export default App
