import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, Container } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar className='navbar-dark bg-dark mb-5'>
      <Container>
        <Link to='/' className='navbar-brand'>
          Elden Ring
        </Link>
        <Nav>
          <NavItem>
            <Link to='/' className='text-decoration-none nav-link'>
              Creatures
            </Link>
          </NavItem>
          <NavItem>
            <Link to='/login' className='text-decoration-none nav-link'>
              Login
            </Link>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
