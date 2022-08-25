import styled from 'styled-components';

export const Container = styled.div`
  h2 {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 8px;
  }
`;

export const Carrousel = styled.div`
  display: flex;

  & > div {
    margin-right: 16px;

    &:last-child {
      margin-right: 0;
    }
  }
`;
