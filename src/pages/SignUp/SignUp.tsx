import { Link } from 'react-router-dom';
import AuthFooter from '../../components/AuthFooter';
import AuthHeader from '../../components/AuthHeader';
import * as S from './SignUp.style';

const SignUp = () => {
  const signUpToApp = (e: any) => {
    e.preventDefault();
  };
  return (
    <S.Wrapper>
      <AuthHeader />
      <S.Card>
        <h1>Cadastre-se</h1>
        <p>Aproveite sua vida profissional ao máximo</p>
        <form onSubmit={signUpToApp}>
          <input type='email' name='email' placeholder='E-mail ou telefone' />
          <input type='password' name='senha' placeholder='Senha' />
          <button type='submit'>Cadastre-se</button>
        </form>
      </S.Card>
      <S.NewUser>
        <p>
          Já se cadastrou no LinkedIn? <Link to='/login'>Entre</Link>
        </p>
      </S.NewUser>
      <AuthFooter />
    </S.Wrapper>
  );
};

export default SignUp;
