import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 16px;

  h2 {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 8px;
  }

  form {
    display: flex;
    align-items: flex-end;

    & > * {
      margin-right: 8px;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  .actions {
    width: 100%;
    display: flex;

    & > * {
      margin-right: 8px;
      flex: 1;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  @media (max-width: 640px) {
    form {
      flex-direction: column;
      align-items: unset;

      & > * {
        margin-bottom: 8px;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
`;
