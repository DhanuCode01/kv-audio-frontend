import './App.css';
import AdminPage from './2nd day/AdminPage';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
      <div>
          <AdminPage/>
      </div> 
      </BrowserRouter>
  );
}

export default App;
