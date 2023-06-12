import styled from 'styled-components';
export const StyledList = styled.ul`
  max-width: 350px;
  width: 100%;
  gap: 16px;
  margin: 0;
  padding: 0;

  .list-item {
    margin-left: 25px;
    display: flex;
    gap: 20px;
    align-items: center;
    font-size: 18px;
    line-height: 1.2;
  }

  .delete-button {
    background: #000;
    color: #fff;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid black;
    cursor: pointer;
    :hover {
      background: #fff;
      color: #000;
      border: 1px solid black;

    }
  }
`;
