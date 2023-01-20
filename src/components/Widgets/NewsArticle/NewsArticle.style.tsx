import styled from 'styled-components';

export const Wrapper = styled.li`
  margin-left: 1rem;
  color: #555;
  cursor: pointer;

  h3 {
    color: #000;
    font-size: 14px;
    font-weight: 600;
  }

  span {
    font-size: 12px;
    opacity: 0.65;
  }

  > div > div {
    display: flex;
    align-items: center;
    width: 100%;
  }
`;
