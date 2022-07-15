import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Creature = ({ creature }) => {
  const { name, image, description, location, id } = creature.data;
  const { Header, Img, Title, Body, Text, Subtitle } = Card;

  return (
    <Col className='col-12 col-md-6 col-lg-4 col-xl-3'>
      <Link to={`/creature/${id}`} className='text-decoration-none text-dark'>
        <Card className='p-4 rounded-3 shadow mx-auto h-100' style={{ maxWidth: '400px' }}>
          <Header>
            <Img src={image} variant='top' loading='lazy' alt={name} className='rounded-3 mb-3' />
            <Title className='mb-2'>{name}</Title>
            <Subtitle className='mb-3'>{location}</Subtitle>
          </Header>
          <Body>
            <Text>{description}</Text>
          </Body>
        </Card>
      </Link>
    </Col>
  );
};

export default Creature;
