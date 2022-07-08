import { useEffect } from 'react';
import Creature from './Creature';
import { Row } from 'react-bootstrap';

const CreaturesList = ({ creatures }) => {
  useEffect(() => {
    console.log(creatures);
  }, [creatures]);

  return (
    <Row className='gy-5 align-items-stretch'>
      {creatures.map((creature) => (
        <Creature key={creature.name} creature={creature} />
      ))}
    </Row>
  );
};

export default CreaturesList;
