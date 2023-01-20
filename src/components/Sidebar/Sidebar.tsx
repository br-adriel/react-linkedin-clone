import * as S from './Sidebar.style';
import { BiHash } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const Sidebar = () => {
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <S.Wrapper>
      <S.SidebarTop>
        <S.UserProfile>
          <img
            src='https://img.freepik.com/free-photo/gradient-dark-blue-futuristic-digital-grid-background_53876-129728.jpg?auto=format&h=200'
            alt=''
          />
          <S.ProfileImg src={user?.photoURL || '#'} alt='' />
          <h2>{user?.displayName}</h2>
          <h4>{user?.email}</h4>
        </S.UserProfile>
        <S.SidebarStats>
          <S.SidebarStat>
            <p>Quem viu seu perfil</p>
            <span>2.543</span>
          </S.SidebarStat>
          <S.SidebarStat>
            <p>Impressões da sua publicação</p>
            <span>4.321</span>
          </S.SidebarStat>
        </S.SidebarStats>
      </S.SidebarTop>
      <S.SidebarBottom>
        <S.Recent>
          <h3>Recentes</h3>
          <a href=''>
            <BiHash /> React
          </a>
        </S.Recent>
        <a href=''>Grupos</a>
        <a href=''>Eventos</a>
        <a href=''>Hashtags seguidas</a>
      </S.SidebarBottom>
    </S.Wrapper>
  );
};

export default Sidebar;
