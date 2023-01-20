import { BsInfoSquareFill, BsThreeDots } from 'react-icons/bs';
import Footer from '../Footer';
import NewsArticle from './NewsArticle';
import { News } from './NewsArticle/NewsArticle';
import Promoted from './Promoted';
import { PromotedInfo } from './Promoted/Promoted';
import * as S from './Widgets.style';

const news: News[] = [
  {
    title: 'Lorem ipsum dolor, sit amet',
    subtitle: 'Notícias mais lidas',
    readers: 1234,
  },
  {
    title: 'Lorem ipsum dolor, sit amet',
    subtitle: 'Notícias mais lidas',
    readers: 1234,
  },
  {
    title: 'Lorem ipsum dolor, sit amet',
    subtitle: 'Notícias mais lidas',
    readers: 1234,
  },
  {
    title: 'Lorem ipsum dolor, sit amet',
    subtitle: 'Notícias mais lidas',
    readers: 1234,
  },
  {
    title: 'Lorem ipsum dolor, sit amet',
    subtitle: 'Notícias mais lidas',
    readers: 1234,
  },
];

const promoted: PromotedInfo[] = [
  {
    title: 'Lorem ipsum dolor, sit amet',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet hic ut quia distinctio, laboriosam dignissimos.',
    image:
      'https://media.licdn.com/dms/image/C560EAQFtY0tsKSAGzA/rightRail-logo-shrink_200_200/0/1653061524124?e=1674853200&v=beta&t=Yv08egS8O37ngit6tyKqqdp0q4FPlvOCFM-SQdp0ML0',
  },
  {
    title: 'Lorem ipsum dolor, sit amet',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet hic ut quia distinctio, laboriosam dignissimos.',
    image:
      'https://media.licdn.com/dms/image/C560EAQFtY0tsKSAGzA/rightRail-logo-shrink_200_200/0/1653061524124?e=1674853200&v=beta&t=Yv08egS8O37ngit6tyKqqdp0q4FPlvOCFM-SQdp0ML0',
  },
  {
    title: 'Lorem ipsum dolor, sit amet',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet hic ut quia distinctio, laboriosam dignissimos.',
    image:
      'https://media.licdn.com/dms/image/C560EAQFtY0tsKSAGzA/rightRail-logo-shrink_200_200/0/1653061524124?e=1674853200&v=beta&t=Yv08egS8O37ngit6tyKqqdp0q4FPlvOCFM-SQdp0ML0',
  },
];

const Widgets = () => {
  return (
    <S.Wrapper>
      <S.Widget>
        <S.Header>
          <h2>Linkedin Notícias</h2>
          <BsInfoSquareFill />
        </S.Header>
        <S.Content>
          {news.map((n, i) => (
            <div>
              <NewsArticle key={`news${i}`} {...n} />
            </div>
          ))}
        </S.Content>
      </S.Widget>
      <S.BottomSection>
        <S.Widget>
          <S.Header>
            <h2 style={{ fontWeight: 500, opacity: 0.75 }}>Promovido</h2>
            <BsThreeDots />
          </S.Header>
          {promoted.map((p, i) => {
            return <Promoted {...p} key={`promoted${i}`} />;
          })}
        </S.Widget>
        <Footer />
      </S.BottomSection>
    </S.Wrapper>
  );
};

export default Widgets;
