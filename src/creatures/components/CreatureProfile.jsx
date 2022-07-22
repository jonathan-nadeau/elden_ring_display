import { useState, useEffect, useCallback } from 'react';
import CreaturesService from '../services/CreaturesService';
import { useParams } from 'react-router-dom';
import CreatureHeader from '../../components/CreatureHeader';
import CreatureBody from '../../components/CreatureBody';

const creaturesService = new CreaturesService();

const CreatureProfile = () => {
  const [creature, setCreature] = useState(null);
  const params = useParams();

  const getCreature = useCallback(async () => {
    if (params.id) {
      const creature = await creaturesService.getCreatureById(params.id);
      setCreature(creature);
    }
  }, [params]);

  useEffect(() => {
    getCreature();
  }, [params, getCreature]);

  return (
    creature && (
      <>
        <CreatureHeader creature={creature.data} />
        <CreatureBody creature={creature.data}></CreatureBody>
      </>
    )
  );
};

export default CreatureProfile;
