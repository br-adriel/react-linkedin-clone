import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #fff;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 15px;
  border: 1px solid #ddd;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const Avatar = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  img {
    border-radius: 50%;
    object-fit: contain;
    width: 48px;
    height: 48px;
  }
`;

export const Info = styled.div`
  margin-left: 10px;

  h2 {
    font-size: 14px;
    font-weight: 600;
  }

  p {
    font-size: 12px;
    opacity: 0.6;
  }
`;

export const Body = styled.div`
  overflow-wrap: anywhere;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;
