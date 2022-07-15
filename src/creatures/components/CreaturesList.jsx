import { useEffect } from 'react';
import Creature from './Creature';
import { Row } from 'react-bootstrap';

const CreaturesList = ({ creatures }) => {
  return (
    creatures && (
      <Row className='gy-5 align-items-stretch'>
        {creatures.map((creature) => (
          <Creature creature={creature} key={creature.id} />
        ))}
      </Row>
    )
  );
};

export default CreaturesList;
