import styled from 'styled-components';

interface TitleProps {
  isActive: boolean;
}

export const Container = styled.div`
  width: 100%;
  position: relative;
  height: 14.6875rem;
`;

export const ContainerWrapper = styled.div`
  width: 100%;
  position: absolute;
`;

export const SectionMenu = styled.div`
  width: 100%;
  height: 4.0625rem;
  display: flex;
  align-items: center;

  background: var(--branco) 0% 0% no-repeat padding-box;
  box-shadow: 0px 2px 4px #0000000d;
  opacity: 1;
  position: absolute;
  z-index: 15;
`;

export const Iconer = styled.img`
  width: 1.4375rem;
  height: 1.6875rem;
  cursor: pointer;
  margin-left: 2.3125rem;
  margin-bottom: 1.1875rem;
  margin-top: 1.1875rem;
  margin-right: 1.625rem;
`;

export const UserSectionWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 65px;
  position: absolute;
`;

export const UserPictureContainer = styled.div`
  width: 7.6875rem;
  height: 7.6875rem;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: 8.4375rem;
  margin-right: 1.4375rem;

  border-radius: 50%;
  border: 1px solid #fff;
  background: #66646412;
  z-index: 3;
  margin-top: 41px;
`;

export const BannerHeader = styled.img`
  width: 100%;
  height: 8.6875rem;
  z-index: 1;
  background-size: contain;
`;

export const UserPicture = styled.img`
  width: 6.75rem;
  height: 6.75rem;
  border-radius: 50%;
  background-size: cover;
  border: 5px solid #ffff;
  box-shadow: inset 0 0 10px 10px #ffff;
  position: absolute;
  z-index: 3;
`;

export const NameUserWrapper = styled.div`
  margin-top: 70px;
  z-index: 3;
`;

export const TitleNameUser = styled.h1<TitleProps>`
  color: var(--branco);
  letter-spacing: var(--unnamed-character-spacing-0);
  font: ${({ isActive }) => (isActive ? '25px' : '18px')} Segoe UI;
`;

export const MenuList = styled.div`
  margin-left: 4.5rem;

  ul {
    display: flex;
    gap: 2.5rem;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      font: normal normal normal 0.875rem /1.625rem Segoe UI;
      letter-spacing: var(--unnamed-character-spacing-0);
      color: var(--cinza-escuro);
      text-align: left;
      opacity: 1;
      cursor: pointer;
      text-decoration: none;

      :hover {
        color: #292828;
      }
    }
  }
`;

export const TitleProject = styled.h1`
  color: var(--cinza-escuro);

  letter-spacing: var(--unnamed-character-spacing-0);
  opacity: 1;
  :hover {
    color: #292828;
  }
  cursor: pointer;
  font: normal normal normal 19px/26px Segoe UI, Regular;
`;
