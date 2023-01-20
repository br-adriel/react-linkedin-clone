import { SlArrowRight } from 'react-icons/sl';
import * as S from './Promoted.style';

export interface PromotedInfo {
  title: string;
  description: string;
  image: string;
}

const Promoted = ({ title, description, image }: PromotedInfo) => {
  return (
    <S.Wrapper>
      <img src={image} alt='' />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <SlArrowRight />
    </S.Wrapper>
  );
};

export default Promoted;
