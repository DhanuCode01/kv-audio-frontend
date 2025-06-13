import './App.css';
import AdminPage from './pages/admin/AdminPage.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage.jsx';
import Testing from './components/Testing.jsx';
import LoginPage from './pages/login/LoginPage.jsx';
import  { Toaster } from 'react-hot-toast';
import RegisterPage from './pages/register/RegisterPage.jsx';
import TestingSuperBase from './components/TestingSuperBase.jsx';


//
function App() {
  return (
      <BrowserRouter>
            <Toaster position="top-right" />
            <Routes path="/*">
              <Route path="/Testing" element={<TestingSuperBase/>}/>
              <Route path="/login" element={<LoginPage/>} />
              <Route path="/register" element={<RegisterPage/>} />
              <Route path="/admin/*" element={<AdminPage/>} />
              <Route path="/*" element={<HomePage/>}/>
            </Routes>
      </BrowserRouter>
  );
}

export default App;
