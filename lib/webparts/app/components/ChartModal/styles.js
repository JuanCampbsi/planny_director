import styled, { keyframes } from 'styled-components';
export const Container = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: ${({ sucess, error }) => (sucess || error ? 'fixed' : 'absolute')};
  height: 100%;
  top: 0;
  left: 0;
  background: #0000001a 0% 0% no-repeat padding-box;
  z-index: 9;
`;
export const ContainerSpinner = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  background: #ffffffab 0% 0% no-repeat padding-box;
  z-index: 1;
`;
export const Box = styled.div `
  width: 90vw;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 10px 35px;
  
`;
export const ChildrenContainer = styled.div `
  width: 100%;
  overflow: auto;
  max-height: 60vh;
  padding: 0 10px;
  display: flex;
  justify-content: center;
`;
export const WrapperMenssages = styled.div `
  /* width: 43.8125rem; */
  height: 30.8125rem;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 2px 4px #0000001a;
  opacity: 1;
  animation: fadeIn 0.5s;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
export const TopBarContainer = styled.div `
  display: flex;
  align-items: center;
`;
export const TopBar = styled.img `
  display: flex;
  align-items: center;
  position: relative;

  width: 43.8125rem;
  height: 3.75rem;
`;
const heartBeat = keyframes `  
  20%
  {
    transform: scale(.75);
  }
  100%
  {
    transform: scale( 1.1 );
  }
`;
export const Icon = styled.img `
  width: 152px;
  height: 152px;

  animation: ${heartBeat} 3s infinite;
`;
export const WrapperContent = styled.div `
  width: 43.8125rem;
  height: 433px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
export const WrapperText = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.h1 `
  text-align: left;
  font: normal normal 37px/48px Segoe UI;
  letter-spacing: 0px;
  color: #707070;
`;
export const SubTitle = styled.h1 `
  text-align: left;
  font: normal normal 20px/30px Segoe UI;
  letter-spacing: 0px;
  color: #707070;
`;
export const IconClose = styled.img `
  width: 2.5rem;
  height: 2.5rem;
  position: absolute;
  z-index: 5;
  margin-right: 0.625rem;
  margin-left: 46.625rem;
  margin-top: -101px;
`;
export const WrapperButton = styled.div `
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
  margin-top: 30px;
`;
//# sourceMappingURL=styles.js.map