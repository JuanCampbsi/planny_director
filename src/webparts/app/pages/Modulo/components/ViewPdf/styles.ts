import styled from 'styled-components';
import Barra from '../../../../assets/img/BarraModal.png';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 70.375rem;
  height: 42.5rem;
  margin-top: -4.3125rem;

  background: var(--branco) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0rem 0.125rem 0.25rem #0000001a;
  opacity: 1;
  position: relative;
  z-index: 99;
  min-height: 74.5rem;
  max-height: 259.5rem;

  @media (max-width: 1290px) {
    width: 65.375rem;
  }

  @media (max-width: 1175px) {
    width: 60.375rem;
  }
`;

export const TopBarContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 2.125rem;

  width: 70.375rem;
  height: 3.75rem;
  margin-bottom: 1.0625rem;

  background: transparent url(${Barra}) 0% 0% no-repeat padding-box;
  background-size: cover;

  @media (max-width: 1290px) {
    width: 65.375rem;
  }

  @media (max-width: 1175px) {
    width: 60.375rem;
  }
`;

export const TitleView = styled.h1`
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--branco);
  text-align: left;
  font: normal normal 600 1.25rem/1.6875rem Segoe UI;
  color: #ffffff;
`;

export const WrapperView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 68.375rem;
  height: 67.625rem;
  padding-top: 0.9375rem;
  padding-bottom: 0.9375rem;
  margin-bottom: 1.0625rem;

  background: #f8f8f8 0% 0% no-repeat padding-box;
  border: 0.0625rem solid #e4e4e4;
  border-radius: 0.75rem;

  @media (max-width: 1290px) {
    width: 59.375rem;
  }

  @media (max-width: 1175px) {
    width: 54.375rem;
  }
`;

export const WrapperViewPowerBi = styled.div.attrs({
  className: 'ViewPowerBi',
})`
  iframe {
    width: 1050px;
    height: 1031px;
    border: none;
    padding: 0;
    position: relative;
  }
`;

export const IconClose = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  position: absolute;
  z-index: 5;
  top: -2.1875rem;
  left: 72.25rem;
  margin-right: 0.625rem;

  @media (max-width: 1290px) {
    left: 66.25rem;
  }

  @media (max-width: 1175px) {
    left: 62.25rem;
  }
`;
