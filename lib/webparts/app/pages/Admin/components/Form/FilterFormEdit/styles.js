import styled from 'styled-components';
export const Container = styled.div `
  margin-top: 1.25rem;
`;
export const WrapperButton = styled.div `
  display: flex;
  width: 100%;
  justify-content: right;
`;
export const FilterBox = styled.div `
  width: 65.625rem;
  height: 6.75rem;
  border: 1px solid #e8e8e8;
  border-radius: 0.25rem;
  margin-top: 0.9375rem;
  display: flex;
  padding: 0 1.125rem;
  justify-content: space-between;
  align-items: flex-end;
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
export const FilterBtn = styled.button `
  width: 6.875rem;
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
export const WrapperIcon = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.25rem;
  margin-right: 1.125rem;
  cursor: pointer;
`;
export const Icon = styled.img `
  width: 5.5rem;
  height: 5.875rem;
`;
export const ContainerIframe = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const WrapperIframe = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.625rem;

  margin-top: 4.3125rem;
  width: 45.25rem;
  height: 12.5rem;
  background: #f9f9f9 0% 0% no-repeat padding-box;
  border: 0.0625rem dashed #e8e8e8;
  border-radius: 0.25rem;
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
export const TextSpan = styled.span `
  font: normal normal bold 0.75rem/1rem Segoe UI;
  color: #007e7a;
`;
export const WrapperText = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const WrapperSpinner = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  top: 35%;
  position: relative;
  margin-top: 8.375rem;
`;
//# sourceMappingURL=styles.js.map