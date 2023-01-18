import { Link } from 'react-router-dom';
import AuthFooter from '../../components/AuthFooter';
import AuthHeader from '../../components/AuthHeader';
import * as S from './Login.style';

const Login = () => {
  const loginToApp = (e: any) => {
    e.preventDefault();
  };
  return (
    <S.Wrapper>
      <AuthHeader />
      <S.Card>
        <h1>Entrar</h1>
        <p>Acompanhe as novidades do seu mundo profissional</p>
        <form onSubmit={loginToApp}>
          <input type='email' name='email' placeholder='E-mail ou telefone' />
          <input type='password' name='senha' placeholder='Senha' />
          <a href='#'>Esqueceu a senha?</a>
          <button type='submit'>Entrar</button>
        </form>
      </S.Card>
      <S.NewUser>
        <p>
          Novo no LinkedIn? <Link to='/signup'>Cadastre-se</Link>
        </p>
      </S.NewUser>
      <AuthFooter />
    </S.Wrapper>
  );
};

export default Login;
