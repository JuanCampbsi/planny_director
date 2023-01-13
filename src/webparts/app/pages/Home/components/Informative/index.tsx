import * as React from 'react';
import IconInformatives from '../../../../assets/icons/IconInformatives.svg';
import { format } from 'date-fns';
import Carousel from 'nuka-carousel';

import { IInformativosCarroselFormated } from '../../../../interfaces/IInformativosCarrosel';

import * as S from './styles';
import { useAppSelector } from '../../../../../../dataflow/hooks';

const Informative: React.FC = () => {
  const listInformatives = useAppSelector((state) => state.state.listInformativos);
  const listInformativesLabel: IInformativosCarroselFormated[] = useAppSelector((state) => state.state.listInfoLabel)
    .slice()
    .sort(function (x, y) {
      return x.Fixaritem === y.Fixaritem ? 0 : x.Fixaritem ? -1 : 1;
    });

  const linkUrl = (url: any) => {
    window.open(url, '_blank');
  };

  const renderInformativeItem = (item: IInformativosCarroselFormated, index: number, lenght: number) => {
    return (
      <S.WrapperInfo>
        <S.SubWrapperInfo>
          <S.IconWrapperInfo onClick={() => linkUrl(item.UrlLink)} src={item.Background.serverUrl + item.Background.serverRelativeUrl} />
          <S.SubTextWrapperInfo onClick={() => linkUrl(item.UrlLink)}>
            <S.SubTitleInfo>{item.Title}</S.SubTitleInfo>
            <S.TextInfo>{item.SubTitulo}</S.TextInfo>
            <S.TexDatetInfo>{`${format(new Date(item.Modified), 'dd.MM.yyyy')}`}</S.TexDatetInfo>
          </S.SubTextWrapperInfo>
        </S.SubWrapperInfo>
        {index !== lenght && <S.Separator />}
      </S.WrapperInfo>
    );
  };

  const renderCard = (item: IInformativosCarroselFormated) => {
    return <S.SectionKnowMoreWrapper pictureBackground={item.Background.serverUrl + item.Background.serverRelativeUrl} />;
  };

  return (
    <>
      <S.Container>
        <S.CarouselBox>
          <Carousel
            wrapAround={true}
            autoplay={true}
            renderCenterLeftControls={() => <span></span>}
            renderCenterRightControls={() => <span></span>}
            disableEdgeSwiping={true}
            defaultControlsConfig={{
              pagingDotsStyle: {
                fill: '#007E7A',
              },
            }}
          >
            {listInformatives && listInformatives.map((item) => renderCard(item))}
          </Carousel>
          {listInformatives &&
            listInformatives.map((item) => (
              <S.KnowMoreWrapper>
                <S.TitleKnowMoreWrapper>{item.Title}</S.TitleKnowMoreWrapper>
                <S.SubTitleKnowMoreWrapper>{item.SubTitulo}</S.SubTitleKnowMoreWrapper>
              </S.KnowMoreWrapper>
            ))[0]}
        </S.CarouselBox>
        <S.SectionInformativesItems>
          <S.WrapperTitleInfo>
            <S.IconInfo src={IconInformatives} />
            <S.TitleInfo>Informativos</S.TitleInfo>
          </S.WrapperTitleInfo>
          <S.Separator />
          <S.InfoBox>{listInformativesLabel.map((item, index) => renderInformativeItem(item, index, listInformativesLabel.length - 1))}</S.InfoBox>
        </S.SectionInformativesItems>
      </S.Container>
    </>
  );
};

export default Informative;
