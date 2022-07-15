import { Container } from 'react-bootstrap';
import Creatures from '../creatures/components/Creatures';
import CreatureProfile from '../creatures/components/CreatureProfile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Container>
        <Routes>
          <Route path='/' element={<Creatures />} />
          <Route path='/creature/:id' element={<CreatureProfile />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
