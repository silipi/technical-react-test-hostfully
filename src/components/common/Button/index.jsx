/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */

import { StyledButton } from './styles';

const Button = ({ children, onClick, className, type, ...props }) => (
  <StyledButton
    type={type || 'button'}
    className={`${className} button`}
    onClick={onClick}
    {...props}
  >
    {children}
  </StyledButton>
);

export default Button;
