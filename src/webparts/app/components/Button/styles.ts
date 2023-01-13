import styled from 'styled-components';
interface Props {
  funcAction?: any;
  widthButton?: any;
  heightButton?: any;
  marginTopButton?: any;
  marginBottomButton?: any;
  marginLeftButton?: any;
  marginRightButton?: any;
  paddingTopButton?: any;
  paddingBottomButton?: any;
  paddingRightButton?: any;
  paddingLeftButton?: any;
  titleColorButton?: any;
  backgroundButton?: any;
  hoverButton?: any;
  disabled?: any;
}

export const Container = styled.button<Props>`
  width: ${(type) => type.widthButton || '120px'};
  height: ${(type) => type.heightButton || '42px'};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(type) => type.titleColorButton || 'var(--branco)'};
  background: ${(type) => type.backgroundButton || 'var(--verde-vale)'} 0% 0% no-repeat padding-box;

  :hover {
    background: ${(type) => type.hoverButton || 'var(--cinza-claro)'} 0% 0% no-repeat padding-box;
  }

  :disabled {
    background: #a5a5a5;
  }

  opacity: 1;
`;

export const Title = styled.p<Props>`
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  opacity: 1;

  font: normal normal 600 0.75rem/1rem Segoe UI;
`;
