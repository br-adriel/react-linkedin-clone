import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #555;
  cursor: pointer;
  padding: 4px 0;
  position: relative;

  h3 {
    font-size: 12px;
    font-weight: 400;
    display: flex;
    align-items: center;

    svg {
      width: 16px;
      height: 16px;
    }
  }

  :hover {
    * {
      color: #000;
    }
  }

  &.active h3::after {
    content: ' ';
    width: 100%;
    position: absolute;
    bottom: 0px;
    left: 0px;
    background: #000;
    height: 2px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 26px;

  svg {
    object-fit: contain;
    width: 24px;
    height: 24px;
  }
`;

export const Avatar = styled.div`
  padding: 0 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 50%;
    object-fit: contain;
    width: 24px;
    height: 24px;
  }
`;
