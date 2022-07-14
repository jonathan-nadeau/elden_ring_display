import { Container } from 'react-bootstrap';
import Creatures from '../creatures/components/Creatures';

const App = () => {
  return (
    <>
      <header className='container-fluid bg-dark py-5'>
        <Container>
          <h1 className='text-center my-5 text-light'>Elden Ring</h1>
        </Container>
      </header>
      <main className='py-3'>
        <Container>
          <Creatures />
        </Container>
      </main>
    </>
  );
};

export default App;
