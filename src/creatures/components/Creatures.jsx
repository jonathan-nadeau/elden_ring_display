import { useEffect, useState } from 'react';
import CreaturesService from '../services/CreaturesService';
import CreaturesList from './CreaturesList';

const creaturesService = new CreaturesService();

const Creatures = () => {
  const [creatures, setCreatures] = useState([]);

  const getCreatures = async () => {
    const creatures = await creaturesService.getAllCreatures();

    setCreatures(await Promise.all(creatures.map((creature) => creaturesService.getCreatureById(creature.id))));
  };

  useEffect(() => {
    getCreatures();
  }, []);

  return <CreaturesList creatures={creatures} />;
};

export default Creatures;
