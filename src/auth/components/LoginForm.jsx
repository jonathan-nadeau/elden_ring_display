import Input from '../../components/Input';
import { Container, Col, Row, Button, Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const navigate = useNavigate();

  const onChange = (value, objKey) => {
    setFormData({
      ...formData,
      [objKey]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    navigate('/');
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <h2 className='text-center my-5'>Login</h2>
          </Col>
        </Row>
        <Row>
          <Col className='col-4 offset-4 mb-2'>
            <Form.Group>
              <Form.Label visuallyHidden>Email</Form.Label>
              <Input
                name='email'
                value={formData.email}
                onChange={onChange}
                placeholder='name@example.ca'
                type='email'
              />
            </Form.Group>
          </Col>
          <Col className='col-4 offset-4 mb-4'>
            <Form.Group>
              <Form.Label visuallyHidden>Password</Form.Label>
              <Input
                name='password'
                value={formData.password}
                onChange={onChange}
                placeholder='password'
                type='password'
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col className='col-12 d-flex justify-content-center'>
            <Button type='submit' className='btn-dark px-5'>
              Login
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default LoginForm;
