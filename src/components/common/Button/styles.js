import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: var(--color-primary);
  border: none;
  outline: none;
  border-radius: 4px;
  color: #fff;
  font-size: 14px;
  padding: 8px 8px;
  cursor: pointer;
  height: min-content;

  &:hover {
    background-color: var(--color-primary--hover);
  }
`;
