import { Form } from 'react-bootstrap';

const Input = ({ name, value, onChange, placeholder, type = 'text' }) => {
  const handleChange = (event) => {
    onChange(event.target.value, name);
  };

  return <Form.Control name={name} value={value} onChange={handleChange} type={type} placeholder={placeholder} />;
};

export default Input;
