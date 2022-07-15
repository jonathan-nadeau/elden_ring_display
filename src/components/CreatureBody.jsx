const CreatureBody = ({ creature }) => {
  return (
    <>
      <p className='display-5 fw-light mb-4'>{creature.description}</p>
      <h2 className='display-4 fw-semibold'>Drops</h2>
      <ul className='list-group'>
        {creature.drops.map((drop, index) => (
          <li className='list-group-item' key={index}>
            {drop}
          </li>
        ))}
      </ul>
    </>
  );
};

export default CreatureBody;
