import * as React from 'react';
import { useAppSelector } from '../../../../../../dataflow/hooks';
import * as S from './styles';

const Description: React.FC = () => {
  const listInfoCentral = useAppSelector((state) => state.state.listInfoCentral);
  return (
    <>
      {!!listInfoCentral &&
        listInfoCentral.map((item) => (
          <S.Container>
            <S.WrapperDescription url={item.Background}>
              <S.WrapperLabelDescription>
                <S.TitleDescription>{item.Title}</S.TitleDescription>
                <S.TextDescription>{item.Conteudo}</S.TextDescription>
              </S.WrapperLabelDescription>
            </S.WrapperDescription>
          </S.Container>
        ))}
    </>
  );
};

export default Description;
