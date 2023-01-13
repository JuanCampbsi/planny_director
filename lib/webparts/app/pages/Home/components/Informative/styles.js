import styled from 'styled-components';
import PictureKnowMore from '../../../../assets/img/KnowMoreWrapper.png';
export const Container = styled.div `
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.25rem;
  box-sizing: border-box;
`;
export const CarouselBox = styled.div `
  width: 39.4375rem;
  margin-top: 1.1875rem;
  margin-bottom: 5.4375rem;
`;
export const SectionKnowMoreWrapper = styled.div `
  width: 39.4375rem;
  height: 25.1875rem;
  margin-top: 2.6875rem;
  margin-bottom: 1.875rem;
  position: relative;

  background: transparent url(${({ pictureBackground }) => pictureBackground}) 0% 0% no-repeat padding-box;
  background-size: cover;
  opacity: 1;
`;
export const KnowMoreWrapper = styled.div `
  width: 21.125rem;
  height: 15.375rem;
  margin-top: -22.875rem;
  margin-left: 1.875rem;
  margin-bottom: 4.9375rem;
  position: absolute;
  background: transparent url(${PictureKnowMore}) 0% 0% no-repeat padding-box;
  background-size: cover;
  z-index: 8;

  padding-top: 2.125rem;
  padding-left: 2.1875rem;
`;
export const TitleKnowMoreWrapper = styled.h1 `
  margin-bottom: 1.9375rem;

  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--verde-vale);
  text-align: left;
  opacity: 1;

  font: normal normal bold 1.875rem/2.1875rem Segoe UI;
`;
export const SubTitleKnowMoreWrapper = styled.h4 `
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--cinza-escuro);
  text-align: left;
  opacity: 1;

  font: normal normal normal 1.125rem/1.3125rem Segoe UI;
`;
export const WrapperKnowMoreButton = styled.div `
  margin-left: 2.1875rem;
  margin-top: 2.125rem;
  margin-bottom: 2.8125rem;
`;
export const SectionInformativesItems = styled.div `
  width: 27.8125rem;
  height: 25.3125rem;
  margin-top: 2.6875rem;
  margin-bottom: 6.125rem;
  background: var(--branco) 0% 0% no-repeat padding-box;
  box-shadow: 0rem 0.125rem 0.25rem #0000001a;
  opacity: 1;
`;
export const InfoBox = styled.div `
  width: 100%;
  height: 85%;
  padding-bottom: 1.25rem;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #007e7ad6;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--verde-vale);
  }
`;
export const WrapperTitleInfo = styled.div `
  margin-top: 0.625rem;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.9375rem;
`;
export const Separator = styled.div `
  height: 0.0625rem;
  width: 100%;
  background: var(--cinza-claro);
  opacity: 0.5;
`;
export const IconInfo = styled.img `
  width: 2.5rem;
  height: 2.5rem;
  margin-left: 1.25rem;
`;
export const TitleInfo = styled.h1 `
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--verde-vale);
  text-align: left;
  opacity: 1;

  font: var(--unnamed-font-normal-600-18-26-segoi);
`;
export const WrapperInfo = styled.div `
  margin-top: 0.9375rem;
  margin-left: 1.25rem;
  margin-right: 1.25rem;
`;
export const SubWrapperInfo = styled.div `
  display: flex;
  margin-bottom: 0.8125rem;
  gap: 1.25rem;
`;
export const SubTextWrapperInfo = styled.div `
  width: 100%;
  display: inline-block;
  cursor: pointer;
`;
export const IconWrapperInfo = styled.img `
  min-width: 7.375rem;
  min-height: 4.6875rem;

  max-width: 7.375rem;
  max-height: 4.6875rem;
  cursor: pointer;
`;
export const SubTitleInfo = styled.h4 `
  width: 260px;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 1rem;
  max-height: 8.5625rem;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--verde-vale);

  :hover {
    color: #5abcb9;
  }
  text-align: left;
  opacity: 1;

  font: var(--unnamed-font-normal-600-14-21-segoi);
`;
export const TextInfo = styled.p `
  margin-top: 5px;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 1rem;
  max-height: 8.5625rem;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;

  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--cinza-escuro);
  text-align: left;
  opacity: 1;

  font: var(--unnamed-font-normal-600-12-16-segoi);
`;
export const TexDatetInfo = styled.p `
  margin-top: 0.3125rem;
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  color: #a5a5a5;
  opacity: 1;

  font: normal normal normal 0.625rem/1rem Segoe UI;
`;
export const UrlLink = styled.p `
  text-decoration: none;
  color: var(--branco);
`;
//# sourceMappingURL=styles.js.map