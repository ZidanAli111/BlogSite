import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import { Signup } from './pages/Signup'
import { Signin } from './pages/signin';
import { Blogs } from './pages/Blogs';
import { Blog } from './pages/Blog';
import { Publish } from './pages/Publish';

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/signin" replace />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/blog/:id" element={<Blog />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path='/publish' element={<Publish />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App
