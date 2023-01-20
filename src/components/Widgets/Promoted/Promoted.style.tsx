import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  padding: 0 10px;

  :hover {
    h3 {
      text-decoration: underline;
      color: #0a66c2;
    }

    svg {
      color: #0a66c2;
    }
  }

  h3 {
    font-weight: 400;
    font-size: 14px;
  }

  p {
    font-size: 12px;
  }

  svg {
    width: 30px;
    height: 30px;
  }
`;
