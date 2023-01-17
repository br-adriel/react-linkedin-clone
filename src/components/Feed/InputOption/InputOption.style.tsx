import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 14px;
  border-radius: 5px;
  padding: 10px 8px;
  cursor: pointer;

  :hover {
    background: #ebebeb;
  }

  span {
    opacity: 0.65;
    margin-left: 8px;
  }

  svg {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }
`;
