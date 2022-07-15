import { Link } from 'react-router-dom';
import { Navbar, NavLink, NavbarBrand, Nav, NavItem, Container } from 'react-bootstrap';

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
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
