import styled from 'styled-components';
import { Container1128px } from '../Container';

export const HeaderTag = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #eee;
  z-index: 999;
`;

export const Container = styled(Container1128px)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

export const Brand = styled.a`
  color: #0a66c2;
  text-decoration: none;
  margin-right: 4px;

  svg {
    object-fit: contain;
    width: 40px;
    height: 40px;
  }
`;

export const HeaderSearch = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  color: #555;
  background: #eef3f8;
  gap: 6px;
  transition: all 0.3s ease;
  width: 255px;

  svg {
    width: 20px;
    height: 20px;
  }

  :focus-within {
    gap: 16px;
    flex-grow: 1;
    outline: auto;

    input {
      font-size: 1rem;
    }
  }

  input {
    border: none;
    background: none;
    outline: none;
    flex-grow: 1;
  }
`;

export const HeaderRight = styled.div`
  display: flex;
`;
