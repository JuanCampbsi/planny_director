import styled from 'styled-components';
import LabelFundoTextPD from '../../../../assets/img/LabelFundoTextPD.png';
export const Container = styled.div `
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const WrapperDescription = styled.div `
  width: 68.5rem;
  height: 21.125rem;
  margin-top: 3.75rem;
  margin-bottom: 4.5625rem;
  padding-left: 1.875rem;
  padding-top: 3.4375rem;
  padding-bottom: 3.375rem;

  background: transparent url(${({ url }) => url}) 0% 0% no-repeat padding-box;
  background-size: cover;
  opacity: 1;

  @media (max-width: 73.125rem) {
    width: 56.25rem;
  }
`;
export const WrapperLabelDescription = styled.div `
  width: 28.6875rem;
  height: 14.3125rem;
  padding-left: 2.75rem;
  padding-right: 2.1875rem;
  padding-top: 2.3125rem;
  padding-bottom: 3.1875rem;
  background: transparent url(${LabelFundoTextPD}) 0% 0% no-repeat padding-box;
  opacity: 1;
  background-size: cover;
`;
export const TitleDescription = styled.h1 `
  margin-bottom: 1rem;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--verde-vale);
  text-align: left;
  font: normal normal bold 1.875rem/2.1875rem Segoe UI;
  opacity: 1;
  white-space: nowrap;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
`;
export const TextDescription = styled.p `
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--cinza-escuro);
  text-align: left;
  font: normal normal normal 0.85rem/1.375rem Segoe UI;
  opacity: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 1rem;
  max-height: 8.5625rem;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`;
//# sourceMappingURL=styles.js.map