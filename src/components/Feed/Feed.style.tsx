import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 0.5;
  margin: 0 20px;

  > button {
    width: 100%;
    display: flex;
    justify-content: right;
    align-items: center;
    margin: 8px 0;
    border: none;
    background: none;
    gap: 4px;
    font-size: 12px;
    color: #00000099;
    cursor: pointer;

    hr {
      flex-grow: 1;
    }

    span {
      color: #000000;
      font-weight: 600;
      display: flex;
      align-items: center;
    }
  }
`;

export const InputContainer = styled.div`
  background-color: #fff;
  padding: 10px;
  padding-bottom: 6px;
  border-radius: 10px;
  border: 1px solid #ddd;

  > div:first-of-type {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: left;
    gap: 5px;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 48px;
    height: 48px;
    object-fit: contain;
    border-radius: 50%;
  }
`;

export const Input = styled.div`
  flex-grow: 1;
  border: 1px solid #ddd;
  border-radius: 30px;
  display: flex;
  padding: 10px;
  color: #ddd;
  background-color: #eee;
  padding-left: 15px;

  :focus-within {
    background: #fff;
    color: #000;
  }

  form {
    display: flex;
    width: 100%;

    input {
      border: none;
      flex: 1;
      margin-left: 10px;
      outline-width: 0;
      font-weight: 600;
      background-color: inherit;
    }

    button {
      display: none;
    }
  }
`;

export const InputOptions = styled.div`
  display: flex;
  justify-content: space-between;
`;
