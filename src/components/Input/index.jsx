/* eslint-disable react/jsx-props-no-spreading */
import { StyledInput, Label, Container } from './styles';

const Input = ({ type, placeholder, value, onChange, label, id, ...props }) => (
  <Container>
    {label && id && <Label htmlFor={id}>{label}</Label>}
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      id={id}
      onChange={(e) => onChange(e.target.value)}
      {...props}
    />
  </Container>
);

export default Input;
