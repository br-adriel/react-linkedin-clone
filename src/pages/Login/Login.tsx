import { signInWithEmailAndPassword } from 'firebase/auth';
import { useSelector } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import AuthFooter from '../../components/AuthFooter';
import AuthHeader from '../../components/AuthHeader';
import { auth } from '../../services/firebase';
import store, { RootState } from '../../store';
import * as S from './Login.style';

const Login = () => {
  const navigate = useNavigate();

  const loginToApp = async (e: any) => {
    e.preventDefault();

    const email = e.target['email'].value;
    const password = e.target['password'].value;

    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    store.dispatch({
      type: 'user/login',
      payload: {
        displayName: user.displayName,
        email: user.email,
        photoUrl: user.photoURL,
        uid: user.uid,
      },
    });

    navigate('/');
  };

  const { user } = useSelector((state: RootState) => state.user);
  if (user) return <Navigate to='/' />;
  return (
    <S.Wrapper>
      <AuthHeader />
      <S.Card>
        <h1>Entrar</h1>
        <p>Acompanhe as novidades do seu mundo profissional</p>
        <form onSubmit={loginToApp}>
          <input type='email' name='email' placeholder='E-mail' />
          <input
            type='password'
            name='password'
            placeholder='Senha'
            minLength={8}
          />
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
