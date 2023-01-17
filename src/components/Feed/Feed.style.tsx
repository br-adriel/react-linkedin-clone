import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 0.5;
  margin: 0 20px;
`;

export const InputContainer = styled.div`
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 15px;

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
