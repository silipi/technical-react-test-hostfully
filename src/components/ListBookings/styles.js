import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 16px;

  & > div {
    margin-bottom: 8px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
