
import '../styles/App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './Home';
import Articles from './Articles';

function App() {

  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className='nav-link'>Home</Link>
            </Nav>
            <Nav className="me-auto">
              <Link to="/articles" className='nav-link'>Ver Articulos</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/articles" element={<Articles />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
