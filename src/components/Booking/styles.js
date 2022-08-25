import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  border-radius: 8px;
  padding: 4px 8px;
  border: 1px solid #ccc;
  align-items: center;

  .image {
    width: 48px;
    height: 48px;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 8px;
    margin-right: 16px;
  }

  .content {
    h3 {
      font-size: 16px;
    }
    & > div {
      display: flex;
      p {
        font-size: 14px;
        margin-right: 12px;
      }
    }
  }

  .actions {
    margin-left: auto;

    .update {
      background-color: #4d85ee;
      margin-right: 8px;
    }

    .delete {
      background-color: #eb3b5a;
    }
  }
`;
