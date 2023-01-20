import { BsDot } from 'react-icons/bs';
import * as S from './NewsArticle.style';

export type News = {
  title: string;
  subtitle: string;
  readers: number;
};

const NewsArticle = ({ title, subtitle, readers }: News) => {
  return (
    <S.Wrapper>
      <div>
        <h3>{title}</h3>
        <div>
          <span>{subtitle}</span>
          <BsDot />
          <span>{readers} leitores</span>
        </div>
      </div>
    </S.Wrapper>
  );
};

export default NewsArticle;
