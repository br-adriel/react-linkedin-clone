import { BsCalendarDate, BsPlayBtnFill } from 'react-icons/bs';
import { HiPhotograph } from 'react-icons/hi';
import { RiArticleFill } from 'react-icons/ri';
import * as S from './Feed.style';
import InputOption from './InputOption';

const Feed = () => {
  return (
    <S.Wrapper>
      <S.InputContainer>
        <div>
          <a href=''>
            <img
              src='https://www.svgrepo.com/show/404551/avatar-man-profile-user-5.svg'
              alt=''
            />
          </a>
          <S.Input>
            <form>
              <input type='text' placeholder='Começar publicação' />
              <button type='submit'>Publicar</button>
            </form>
          </S.Input>
        </div>
        <S.InputOptions>
          <InputOption Icon={HiPhotograph} title='Foto' color='#378FE9' />
          <InputOption Icon={BsPlayBtnFill} title='Vídeo' color='#5F9B41' />
          <InputOption Icon={BsCalendarDate} title='Evento' color='#C37D16' />
          <InputOption
            Icon={RiArticleFill}
            title='Escrever artigo'
            color='#E16745'
          />
        </S.InputOptions>
      </S.InputContainer>
    </S.Wrapper>
  );
};

export default Feed;
