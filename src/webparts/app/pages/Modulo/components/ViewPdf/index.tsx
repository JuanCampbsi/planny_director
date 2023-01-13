import * as React from 'react';
import * as S from './styles';
import IconClose from '../../../../assets/icons/IconClose.svg';
interface Props {
  url: string;
  children?: React.ReactNode;
}
const ViewPdf = ({ url, children, ...rest }: Props) => {
  return (
    <>
      <S.Container>
        <S.IconClose src={IconClose} />
        <S.TopBarContainer>
          <S.TitleView>Documento</S.TitleView>
        </S.TopBarContainer>
        <S.WrapperView>
          <iframe style={{ width: '1050px', height: '100%', border: 'none', padding: '0' }} src={url} />
        </S.WrapperView>
        {children}
      </S.Container>
    </>
  );
};
export default ViewPdf;
