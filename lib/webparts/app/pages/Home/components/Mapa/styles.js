import styled from 'styled-components';
export const Container = styled.div `
  width: 100%;
  height: auto;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: #f7f9f9 0% 0% no-repeat padding-box;
  opacity: 1;

  @media (max-width: 81.25rem) {
    width: 100%;
  }
`;
export const WrapperLabelTimeline = styled.div `
  height: 2.9375rem;
  margin: -1.5rem;
  position: absolute;
  padding: 0 2.125rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.9375rem;

  background: #0abb98 0% 0% no-repeat padding-box;
  opacity: 1;
`;
export const LabelTimelineTitle = styled.p `
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--branco);
  text-align: left;
  font: normal normal normal 1.125rem/1.3125rem Segoe UI;

  letter-spacing: 0rem;
  opacity: 1;
`;
export const IconTimeline = styled.img `
  width: 1.25rem;
  height: 1.25rem;
`;
export const TimeLine = styled.div `
  width: 100%;
  max-height: 4.3125rem;
  margin-top: 7.25rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Line = styled.div `
  border: 0.1875rem solid #ededed;
  opacity: 1;
  width: 100%;
`;
export const TimeLineWrapper = styled.div `
  display: -webkit-box;
  justify-content: center;
  align-items: center;
  gap: 17.8125rem;
  position: absolute;
  z-index: 4;
  scroll-behavior: smooth;
  overflow: scroll;
  transition: all 0.5s ease-in;
  ::-webkit-scrollbar {
    display: none;
  }
  width: 50rem;
`;
export const CicloElipseWrapper = styled.div `
  max-width: 57rem;
  display: contents;
`;
export const CicloElipse = styled.div `
  width: 4.3125rem;
  height: 4.3125rem;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #ededed 0% 0% no-repeat padding-box;

  border: 0.1875rem solid var(--branco);
  border-radius: 50%;

  letter-spacing: var(--unnamed-character-spacing-0);
  font: normal normal 600 1.125rem/1.5rem Segoe UI;
  text-align: left;
  color: var(--cinza-escuro);
  opacity: 1;

  ${({ isHovered }) => isHovered &&
    `
    background-color: #ECB11F;
    color: #fff;
  `}
`;
export const ButtonLeftContainer = styled.button `
  position: absolute;
  left: 10%;
  z-index: 7;
  border: none;
  outline: 0;
  background: transparent;
  cursor: pointer;
  :hover {
    transform: scale(1.2);
    transition: all 0.5s;
  }
`;
export const Left = styled.img `
  width: 2.125rem;
  height: 4.3125rem;
  display: ${({ isActive }) => (isActive ? 'block' : 'none')};
`;
export const ButtonRightContainer = styled.button `
  position: absolute;
  right: 10%;
  z-index: 7;
  border: none;
  outline: 0;
  background: transparent;
  cursor: pointer;
  :hover {
    transform: scale(1.2);
    transition: all 0.5s;
  }
`;
export const Right = styled.img `
  width: 2.125rem;
  height: 4.3125rem;
  display: ${({ isActive }) => (isActive ? 'block' : 'none')};
`;
//# sourceMappingURL=styles.js.map