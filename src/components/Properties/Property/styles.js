import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;

  ${({ isSelected }) =>
    isSelected &&
    css`
      border: 1px solid var(--color-primary);
      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
      background-color: #f0f0f0;
    `};

  img {
    width: 100%;
  }

  .body {
    padding: 8px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .text {
      h3 {
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 4px;
      }
      p {
        font-size: 14px;
        font-weight: 400;
        color: var(--color-text-secondary);
      }
    }

    button {
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
    }
  }
`;
