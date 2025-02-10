import './App.css';
import AdminPage from './pages/admin/AdminPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/homePage';
import Testing from './components/Testing';
import LoginPage from './pages/login/LoginPage';

function App() {
  return (
      <BrowserRouter>
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
