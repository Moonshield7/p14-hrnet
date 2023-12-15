
import { Route, Routes } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/home';
import EmployeesList from './pages/EmployeesList/EmployeesList';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/employees' element={<EmployeesList />} />
      </Routes>
    </Router>
  );
}

export default App;
