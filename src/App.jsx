import './App.css';
import AdminPage from './pages/admin/AdminPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/homePage';
import Testing from './components/Testing';
import LoginPage from './pages/login/LoginPage';
import  { Toaster } from 'react-hot-toast';

function App() {
  return (
      <BrowserRouter>
            <Toaster position="top-right" />
            <Routes path="/*">
              {/* <Route path="/Testing" element={<Testing/>}></Route> */}
              <Route path="/login" element={<LoginPage/>} />
              <Route path="/admin/*" element={<AdminPage/>} />
              <Route path="/*" element={<HomePage/>}/>
            </Routes>
      </BrowserRouter>
  );
}

export default App;
