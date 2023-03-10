import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { BsCalendarDate, BsPlayBtnFill } from 'react-icons/bs';
import { HiPhotograph } from 'react-icons/hi';
import { RiArrowDownSFill, RiArticleFill } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { PostType } from '../../global/types';
import { db } from '../../services/firebase';
import { RootState } from '../../store';
import * as S from './Feed.style';
import InputOption from './InputOption';
import Post from './Post';

const Feed = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const user = useSelector((state: RootState) => state.user.user);

  useEffect(() => {
    const postsCollectionRef = collection(db, 'posts');
    const q = query(postsCollectionRef, orderBy('timestamp', 'desc'));
    onSnapshot(q, (snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() } as PostType;
        })
      );
    });
  }, []);

  const sendPost = async (e: any) => {
    e.preventDefault();

    const postsCollectionRef = collection(db, 'posts');
    await addDoc(postsCollectionRef, {
      name: user?.displayName,
      description: user?.email,
      message: e.target['content'].value,
      photoUrl: user!.photoURL,
      timestamp: serverTimestamp(),
    });

    e.target.reset();
  };

  return (
    <S.Wrapper>
      <S.InputContainer>
        <div>
          <a href=''>
            <img src={user?.photoURL || '#'} alt='' />
          </a>
          <S.Input>
            <form onSubmit={(e) => sendPost(e)}>
              <input
                type='text'
                placeholder='Começar publicação'
                name='content'
              />
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

      <button>
        <hr />
        Classificar por:{' '}
        <span>
          Recentes <RiArrowDownSFill />
        </span>
      </button>

      {posts.map((post) => {
        return <Post key={post.id} {...post} />;
      })}
    </S.Wrapper>
  );
};

export default Feed;
