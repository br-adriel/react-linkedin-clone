import React from 'react';
import { IconType } from 'react-icons/lib';
import * as S from './InputOption.style';

type Props = {
  Icon: IconType;
  title: string;
  color: string;
};

const InputOption: React.FC<Props> = ({ Icon, title, color }) => {
  return (
    <S.Wrapper>
      <Icon style={{ color: color }} />
      <span>{title}</span>
    </S.Wrapper>
  );
};

export default InputOption;
