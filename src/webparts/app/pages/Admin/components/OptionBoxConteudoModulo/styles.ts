import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 4.375rem 14.5rem 7.125rem 14.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WrapperContainer = styled.div`
  width: 56.375rem;
  background: #007e7a 0% 0% no-repeat padding-box;
  box-shadow: 0rem 0.125rem 0.25rem #0000001a;
  opacity: 1;
`;

export const TopBarContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const TopBar = styled.img`
  display: flex;
  align-items: center;
  position: relative;

  width: 56.375rem;
  height: 3.75rem;
`;

export const TitleView = styled.h1`
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--branco);
  text-align: left;
  font: normal normal 600 1.25rem/1.6875rem Segoe UI;
  position: absolute;
  z-index: 3;
  margin-left: 2.1875rem;
`;

export const WrapperBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WrapperCardView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  flex-wrap: wrap;
  width: 696px;
  margin: 3.125rem 6.1875rem 3.125rem 6.1875rem;
  cursor: pointer;
`;

export const CardView = styled.div`
  width: 10.125rem;
  height: 10.75rem;
  padding: 1.5rem 10px 1.75rem 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.9375rem;
  background: var(--branco);
`;

export const TitleCard = styled.h1`
  letter-spacing: var(--unnamed-character-spacing-0);
  color: #747678;
  text-align: center;
  font: 0.9375rem/1.125rem Segoe UI;

  :hover {
    color: #9d9d9ed9;
  }
`;

export const Icon = styled.img`
  width: 4.8125rem;
  height: 4.8125rem;
`;
