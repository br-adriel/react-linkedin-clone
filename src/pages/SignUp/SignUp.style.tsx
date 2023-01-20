import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  background: #fff;
  min-height: 100vh;
`;

export const Card = styled.main`
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  padding: 24px;
  border-radius: 10px;
  min-width: 376px;

  h1 {
    font-weight: 600;
    font-size: 32px;
    padding-bottom: 4px;
  }

  p {
    font-size: 14px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    input {
      margin-top: 24px;
      padding: 16px 12px;
      border-radius: 4px;
      border: 1px solid #222;
      font-size: 16px;
      width: 100%;

      :focus {
        outline-color: #0a66c2;
      }
    }

    a {
      width: auto;
      font-weight: 600;
      color: #0a66c2;
      padding: 8px 12px;
      margin-left: -12px;
      margin-top: 16px;
      border-radius: 16px;

      :hover {
        background: #d0e8ff;
      }
    }

    button {
      background: #0a66c2;
      color: #fff;
      padding: 14px 24px;
      font-weight: 600;
      font-size: 16px;
      border: none;
      margin-top: 16px;
      border-radius: 28px;
      width: 100%;
      cursor: pointer;

      :hover {
        background: #004182;
      }
    }
  }
`;

export const NewUser = styled.div`
  display: flex;
  margin-top: 32px;
  justify-content: center;
  a {
    width: auto;
    font-weight: 600;
    color: #0a66c2;
    padding: 8px 12px;
    margin-top: 16px;
    border-radius: 16px;

    :hover {
      background: #d0e8ff;
    }
  }
`;
