import styled from 'styled-components';
export const Wrapper = styled.div `
  width: 20.6875rem;
  height: fit-content;
  padding: 1.875rem;
  padding-bottom: 0;
  background: #ffffff;
  border: 0.0625rem solid #e6e6e6;
  margin-bottom: 3.125rem;
`;
export const Title = styled.h3 `
  color: var(--verde-vale);
  text-align: left;
  font: normal normal 600 1.125rem/1.5rem Segoe UI;
  position: relative;
  height: fit-content;
  margin-bottom: 2.9063rem;

  ::after {
    content: '';
    width: 1.875rem;
    border-bottom: 0.125rem solid var(--amarelo-vale);
    position: absolute;
    bottom: -0.5938rem;
    left: 0;
  }
`;
export const ButtonBox = styled.button `
  width: 16.8125rem;
  background-color: transparent;
  padding-bottom: 1.5313rem;
  margin-bottom: ${({ isLastIndex }) => !isLastIndex && '1.2188rem'};
  border: none;
  border-bottom: ${({ isLastIndex }) => !isLastIndex && '.0625rem solid #E6E6E6'};
  display: flex;
  align-items: center;
  justify-content: space-between;

  :disabled {
    p {
      color: var(--cinza-claro);
    }
  }
`;
export const ButtonName = styled.p `
  font: normal normal 600 1rem 'Segoe UI', sans-serif;
  color: ${({ isHovered }) => (isHovered ? 'var(--verde-vale)' : '#555555')};
  text-align: left;
  width: 70%;
  cursor: pointer;
`;
export const ButtonIcon = styled.img `
  cursor: pointer;
`;
//# sourceMappingURL=styles.js.map