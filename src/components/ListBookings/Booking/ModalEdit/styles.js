import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  position: relative;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);

  width: 70%;
  padding: 48px 24px;
  border-radius: 8px;

  z-index: 1;

  .close {
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;
    background-color: #fff;
    border-radius: 50%;
    border: 1px solid #222;
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  form {
    & > * {
      margin-bottom: 10px;
    }
  }

  .properties {
    display: flex;
    align-items: baseline;
    margin-top: 16px;

    & > * {
      margin-right: 16px;

      &:last-child {
        margin-right: 0;
      }
    }

    .property {
      width: 160px;
      display: flex;
      flex-direction: column;
      cursor: pointer;

      &.selected {
        img {
          box-shadow: 0 0 0 2px var(--color-primary);
        }
        p {
          color: var(--color-primary);
          font-weight: 600;
        }
      }

      img {
        width: 100%;
        border-radius: 8px;
        margin-bottom: 4px;
      }

      p {
        word-wrap: break-word;
        font-size: 16px;
      }
    }
  }

  @media (max-width: 640px) {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

export const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.5);

  width: 100vw;
  height: 100vh;
`;
