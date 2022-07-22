import { Container } from 'react-bootstrap';
import Creatures from '../creatures/components/Creatures';
import CreatureProfile from '../creatures/components/CreatureProfile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import AuthLayout from '../auth/components/AuthLayout';

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Container>
        <Routes>
          <Route path='/' element={<Creatures />} />
          <Route path='/creature/:id' element={<CreatureProfile />} />
          <Route path='/login' element={<AuthLayout />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
