import styled from 'styled-components';

export const Wrapper = styled.aside`
  flex: 0.3;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Widget = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  border: 1px solid #ddd;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;

  h2 {
    font-weight: 600;
    font-size: 16px;
  }

  svg {
    width: 16px;
    height: 16px;
    object-fit: contain;
  }
`;

export const Content = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;

  > div {
    padding: 2px 10px;

    :hover {
      background-color: #ebebeb;
    }
  }
`;

export const BottomSection = styled.div`
  position: sticky;
  top: 70px;
`;
