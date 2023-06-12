import styled from 'styled-components';
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  width: 100%;
  margin-left: 20px;
  gap: 16px;

  .form-label {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .label-name {
    font-weight: bold;
    font-size: 18px;
    line-height: 1.2;
    margin: 0;
  }
  .form-input {
    width: 100%;
  }

  .form-btn {
    background: #000;
    color: #fff;
    padding: 15px;
    border-radius: 10px;
    cursor: pointer;
    border: 1px solid black;
    :hover {
      background: #fff;
      color: #000;
      border: 1px solid black;

    }
  }
`;
