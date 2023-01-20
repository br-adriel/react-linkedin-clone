import { IconType } from 'react-icons/lib';
import { RiArrowDownSFill } from 'react-icons/ri';
import * as S from './HeaderOption.style';

type Props = {
  Icon?: IconType;
  title: string;
  avatar?: string;
  onClick?: Function;
};

const HeaderOption: React.FC<Props> = ({ Icon, title, avatar, onClick }) => {
  return (
    <S.Wrapper onClick={() => !!onClick && onClick()}>
      {Icon && (
        <S.IconWrapper>
          <Icon />
        </S.IconWrapper>
      )}
      {avatar && (
        <S.Avatar>
          <img src={avatar} alt='' />
        </S.Avatar>
      )}
      <h3>
        {title} {avatar && <RiArrowDownSFill />}
      </h3>
    </S.Wrapper>
  );
};

export default HeaderOption;
