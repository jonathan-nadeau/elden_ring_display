import { Card, Col } from 'react-bootstrap';

const Creature = ({ creature }) => {
  const { name, image, description, location } = creature.data;
  const { Header, Img, Title, Body, Text, Subtitle } = Card;

  return (
    <Col className='col-12 col-md-6 col-lg-4 col-xl-3'>
      <Card className='p-4 rounded-3 shadow mx-auto text-light bg-dark h-100' style={{ maxWidth: '400px' }}>
        <Header>
          <Img src={image} variant='top' loading='lazy' alt={name} className='rounded-3 mb-3' />
          <Title className='mb-2'>{name}</Title>
          <Subtitle className='mb-3'>{location}</Subtitle>
        </Header>
        <Body>
          <Text>{description}</Text>
        </Body>
      </Card>
    </Col>
  );
};

export default Creature;
