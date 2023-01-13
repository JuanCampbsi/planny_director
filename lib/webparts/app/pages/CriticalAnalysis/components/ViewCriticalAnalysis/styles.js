import styled from 'styled-components';
import bg from '../../../../assets/img/FundoModulo.png';
export const Container = styled.div ``;
export const Banner = styled.div `
  width: 45.3125rem;
  height: 4.5rem;
  background-image: url(${bg});
  background-repeat: no-repeat;
  position: relative;
  padding: 1rem 2.25rem;
  padding-bottom: 1.875rem;
`;
export const YellowBar = styled.div `
  width: 0.625rem;
  height: 4.4375rem;
  background: var(--amarelo-vale);
  position: absolute;
  left: 0;
  top: 0;
`;
export const FilterMsg = styled.h3 `
  font: normal normal 600 1.125rem;
  color: var(--verde-vale);
  margin-top: 1.8125rem;
`;
export const ModuloName = styled.h2 `
  font-size: 1.5625rem;
  font-weight: 500;
  color: #fff;
  text-align: left;
`;
export const TitleContext = styled.h3 `
  font: normal normal 600 1.125rem;
  color: var(--verde-vale);
  margin-top: 1.8125rem;
`;
export const WrapperTextArea = styled.div `
  border: 1px solid #e8e8e8;
  border-radius: 0.25rem;
  width: 45.25rem;
  margin-top: 0.9375rem;
  margin-bottom: 3.75rem;
  height: 28.575003rem;
  padding: 0.4375rem 0.625rem 0.4375rem 0.625rem;
  overflow: auto;
  background: #f9f9f9;
`;
export const TextArea = styled.p `
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--cinza-escuro);
  text-align: left;
  font: normal normal 0.875rem/1.1875rem Segoe UI;
  text-align: justify;
`;
export const WrapperInput = styled.div `
  display: flex;
  flex-direction: column;
  padding-top: 0.6875rem;
`;
export const LabelInput = styled.label `
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--cinza-escuro);
  text-align: left;
  font: normal normal 600 0.75rem;
  opacity: 1;
`;
export const SeparatorInput = styled.div `
  margin-top: 0.375rem;
  margin-bottom: 0.875rem;
  width: 1.875rem;
  height: 0;
  border: 0.0625rem solid var(--amarelo-vale);
  opacity: 1;
`;
export const FilterBox = styled.div `
  width: 45.25rem;
  height: 6.75rem;
  border: 1px solid #e8e8e8;
  border-radius: 0.25rem;
  margin-top: 0.9375rem;
  display: flex;
  padding: 0 1.125rem;
  justify-content: space-between;
  align-items: flex-end;
`;
export const WrapperNotConteudo = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.625rem;
  height: 100%;
`;
export const TitleNotView = styled.h1 `
  display: flex;
  align-items: center;
  flex-direction: column;

  margin-bottom: 0.3125rem;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--verde-vale);
  text-align: left;
  font: normal normal 600 0.875rem/1.3125rem Segoe UI;
  color: #007e7a;
`;
export const SubTitleNotView = styled.p `
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: center;
  font: normal normal normal 0.75rem/1rem Segoe UI;
  color: #53565a;
`;
export const Icon = styled.img `
  width: 5.125rem;
  height: 5.125rem;
`;
export const FilterBtn = styled.button `
  padding: 0.8125rem 1.625rem;
  color: var(--branco);
  font: normal normal 600 0.75rem;
  background: var(--verde-vale);
  border-radius: 0.125rem;
  margin-bottom: 1rem;
  border: none;
  outline: none;
  cursor: pointer;

  :active {
    transform: scale(0.95);
  }
`;
//# sourceMappingURL=styles.js.map