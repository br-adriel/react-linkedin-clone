import { AiOutlineLike, AiOutlineRetweet } from 'react-icons/ai';
import { BiMessageRoundedDetail } from 'react-icons/bi';
import { IoIosSend } from 'react-icons/io';
import InputOption from '../InputOption';
import * as S from './Post.style';

type Props = {
  name: string;
  description: string;
  message: string;
  photoUrl?: string;
};

const Post: React.FC<Props> = ({ description, message, name, photoUrl }) => {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Avatar>
          <img
            src='https://www.svgrepo.com/show/404551/avatar-man-profile-user-5.svg'
            alt=''
          />
        </S.Avatar>
        <S.Info>
          <h2>{name}</h2>
          <p>{description}</p>
        </S.Info>
      </S.Header>
      <S.Body>
        <p>{message}</p>
      </S.Body>

      <S.Buttons>
        <InputOption Icon={AiOutlineLike} title='Gostei' color='#5E5E5E' />
        <InputOption
          Icon={BiMessageRoundedDetail}
          title='Comentar'
          color='#5E5E5E'
        />
        <InputOption
          Icon={AiOutlineRetweet}
          title='Compartilhar'
          color='#5E5E5E'
        />
        <InputOption Icon={IoIosSend} title='Enviar' color='#5E5E5E' />
      </S.Buttons>
    </S.Wrapper>
  );
};

export default Post;
