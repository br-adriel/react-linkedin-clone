import * as S from './AuthFooter.style';

const AuthFooter = () => {
  return (
    <S.Footer>
      <p>Adriel Santos, {new Date().getFullYear()}</p>
      <a
        href='https://github.com/br-adriel'
        target='_blank'
        rel='noopener noreferrer'
      >
        Github
      </a>
      <a
        href='https://linkedin.com/in/adriel-fsantos'
        target='_blank'
        rel='noopener noreferrer'
      >
        Linkedin
      </a>
    </S.Footer>
  );
};

export default AuthFooter;
