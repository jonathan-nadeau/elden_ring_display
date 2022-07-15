import { useEffect } from 'react';

const CreatureHeader = ({ creature }) => {
  return (
    <>
      <h1 className='display-1 mb-5'>{creature.name}</h1>
      <figure className='figure'>
        <img className=' figure-img img-fluid rounded shadow-lg' src={creature.image} alt={creature.name} />
        <figcaption className='figure-caption'>
          Location: <br />
          {creature.location}
        </figcaption>
      </figure>
    </>
  );
};

export default CreatureHeader;
