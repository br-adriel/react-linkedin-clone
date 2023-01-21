import { FirebaseError } from 'firebase/app';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import AuthFooter from '../../components/AuthFooter';
import AuthHeader from '../../components/AuthHeader';
import { auth } from '../../services/firebase';
import store, { RootState } from '../../store';
import * as S from './SignUp.style';

const SignUp = () => {
  const navigate = useNavigate();
  const signUpToApp = async (e: any) => {
    e.preventDefault();

    const defaultProfile =
      'https://firebasestorage.googleapis.com/v0/b/linkedin-clone-e99cf.appspot.com/o/default_profile.jpg?alt=media&token=c5bdeb48-b789-42f0-9958-3e890475b672';

    const email = e.target['email'].value.trim();
    const name = e.target['name'].value.trim();
    const photoUrl = e.target['image'].value.trim();
    const password = e.target['password'].value;
    const password2 = e.target['password2'].value;
    if (password !== password2) {
      alert('As senhas não são iguais');
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      updateProfile(user, {
        displayName: name,
        photoURL: photoUrl ? photoUrl : defaultProfile,
      }).then(() => {
        store.dispatch({
          type: 'user/login',
          payload: {
            displayName: user.displayName,
            email: user.displayName,
            photoUrl: user.photoURL,
            uid: user.uid,
          },
        });
      });

      navigate('/');
    } catch (error: unknown) {
      if ((error as FirebaseError).code === 'auth/email-already-in-use') {
        alert('O email já está vinculado a uma conta');
      } else {
        alert('Um erro ocorreu');
      }
    }
  };

  const { user } = useSelector((state: RootState) => state.user);
  if (user) return <Navigate to='/' />;
  return (
    <S.Wrapper>
      <Helmet>
        <title>Cadastre-se | LinkedIn</title>
      </Helmet>
      <AuthHeader />
      <S.Card>
        <h1>Cadastre-se</h1>
        <p>Aproveite sua vida profissional ao máximo</p>
        <form onSubmit={signUpToApp}>
          <input type='email' name='email' placeholder='E-mail' required />
          <input type='text' name='name' placeholder='Nome completo' required />
          <input
            type='url'
            name='image'
            placeholder='URL da imagem de perfil'
          />
          <input
            type='password'
            name='password'
            placeholder='Senha'
            required
            minLength={8}
          />
          <input
            type='password'
            name='password2'
            placeholder='Confirmação de senha'
            required
            minLength={8}
          />
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
