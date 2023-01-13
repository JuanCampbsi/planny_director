import styled from 'styled-components';
export const Container = styled.div ``;
export const Spinner = styled.div `
  border: 5px solid #007e7ab3;
  border-top: 5px #ffba0e solid;
  border-radius: 50%;
  height: 80px;
  width: 80px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
//# sourceMappingURL=styles.js.map