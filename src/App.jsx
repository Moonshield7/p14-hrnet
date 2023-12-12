
import { Route, Routes } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/home';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
