import styled from 'styled-components';

export const Wrapper = styled.aside`
  height: 100%;
  flex: 0.2;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SidebarTop = styled.div`
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 10px;
`;

export const UserProfile = styled.div`
  background: #fff;
  border-radius: 10px 10px 0 0;
  text-align: center;

  h2 {
    font-weight: 600;
    font-size: 16px;
    padding: 0 12px;
  }

  h4 {
    font-weight: 400;
    font-size: 12px;
    opacity: 0.6;
    padding: 0 12px 16px 12px;
  }

  img:first-of-type {
    width: 100%;
    border-radius: 10px 10px 0 0;
  }
`;

export const ProfileImg = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  position: relative;
  top: -38px;
  margin-bottom: -30px;
  border: 3px solid #fff;
  background: #fff;
`;

export const SidebarStats = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 12px 0;
  background-color: #fff;
  border-radius: 0 0 10px 10px;
`;

export const SidebarStat = styled.a`
  display: flex;
  justify-content: space-between;
  padding: 4px 12px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;

  :hover {
    text-decoration: none;
    background: #ebebeb;
  }

  p {
    opacity: 0.6;
  }

  span {
    color: #0a66c2;
    opacity: 1;
  }
`;

export const SidebarBottom = styled.div`
  position: sticky;
  top: 80px;
  border-radius: 10px;
  background: #fff;
  padding: 12px 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px;
  border: 1px solid #ddd;

  h3 {
    padding: 0 12px;
  }

  a {
    color: #0a66c2;
    font-weight: 600;
    font-size: 12px;
    padding: 4px 12px;
  }
`;

export const Recent = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  svg {
    width: 16px;
    height: 16px;
    object-fit: contain;
  }

  h3,
  a {
    opacity: 0.6;
  }

  h3 {
    font-size: 12px;
    font-weight: 400;
    padding: 4px 12px;
  }

  a {
    color: #000;
    display: flex;
    align-items: center;
    justify-content: left;

    :hover {
      text-decoration: none;
      background: #ebebeb;
    }
  }
`;
