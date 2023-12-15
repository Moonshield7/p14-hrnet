import { Link, useLocation } from 'react-router-dom';

function Header () {
  const currentPage = useLocation();

  return (
    <nav className="navbar">
      <h1 className="navbar-title">HRnet</h1>
      {
        currentPage.pathname === '/employees' ? <Link to="/" className="navbar-button">Create a new employee</Link> : <Link to="employees" className="navbar-button">View current employees</Link>
      }
    </nav>
  );
}

export default Header;