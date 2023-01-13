import styled from 'styled-components';
export const Container = styled.button `
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
export const Title = styled.p `
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  opacity: 1;

  font: normal normal 600 0.75rem/1rem Segoe UI;
`;
//# sourceMappingURL=styles.js.map