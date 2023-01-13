import styled from 'styled-components';
import SetaTextViewFilter from '../../../../../assets/components/SetaTextViewFilter';
import BarraModal from '../../../../../assets/img/BarraModal.png';
import MapaBackground from '../../../../../assets/icons/MapaBackground.svg';
import Mapa from '../../../../../assets/components/Mapa';

interface IProps {
  isActive?: boolean;
  isWidth?: string;
  isLoading?: boolean;
  isDisabled?: boolean
}

export const Container = styled.div`
  width: 68.5rem;
  height: 36.875rem;
  margin-bottom: 4.0625rem;

  margin-top: 5.5rem;
  background: #007470ed 0% 0% no-repeat padding-box;
  box-shadow: 0rem 0rem 0.625rem #00000040;
  opacity: 1;
`;

export const WrapperTopIcon = styled.div<IProps>`
  position: absolute;
  width: ${({ isActive }) => (isActive ? '75rem' : '68.5rem')};
  height: 3.75rem;

  display: flex;
  align-items: center;
  padding-left: 1.875rem;

  background: transparent url(${BarraModal}) 0% 0% no-repeat padding-box;
  background-size: cover;
  @media (max-width: 73.125rem) {
    width: 56.25rem;
  }
`;

export const WrapperTopTitle = styled.p`
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--branco);
  text-align: left;
  font: normal normal 600 1.25rem/1.6875rem Segoe UI;
  opacity: 1;
`;

export const ContainerWrapper = styled.div`
  display: flex;
`;

export const MapaContainerBg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 3.125rem;
  width: 34.25rem;

  margin-top: 3.75rem;
  background: url(${MapaBackground}) 0% 0% no-repeat padding-box;
`;
export const ContainerCapacete = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;
export const ImgCapacete = styled.img`
  width: 2.6875rem;
  height: 2.6875rem;
`;

export const WrapperTextBoxCorredor = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextBoxCorredor = styled.h4`
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--branco);
  text-align: left;
  font: normal normal normal 1rem/1.625rem Segoe UI;
  color: #ffffff;
`;

export const MapaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledMapa = styled(Mapa)<IProps>`
  height: 26.75rem;
  margin-top: 1.125rem;
  margin-left: 2.375rem;

  @media (max-width: 72.9375rem) {
    height: 21.875rem;
  }
`;

export const FiltredContainer = styled.div`
  width: 34.25rem;
  height: 36.875rem;
  padding-top: 6.4375rem;
  padding-left: 3.1875rem;
  padding-right: 4.125rem;
  padding-bottom: 5.375rem;

  background: #007470 0% 0% no-repeat padding-box;
  box-shadow: 0rem 0rem 0.625rem #00000040;
  opacity: 1;
`;

export const TitleFiltredMapa = styled.h1`
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--branco);
  text-align: left;
  font: normal normal 600 1.25rem/1.625rem Segoe UI;
  opacity: 1;
`;

export const Separator = styled.div`
  margin-top: 1.5625rem;
  margin-bottom: 0.6875rem;
  height: 0.0625rem;
  width: 100%;
  border: 0.0625rem solid #006c68;
  opacity: 0.5;
`;

export const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SeparatorInput = styled.div`
  margin-top: 0.375rem;
  margin-bottom: 0.875rem;
  width: 1.875rem;
  height: 0rem;
  border: 0.0625rem solid var(--amarelo-vale);
  opacity: 1;
`;
export const LabelInput = styled.label`
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--branco);
  text-align: left;
  font: normal normal 600 0.75rem/1rem Segoe UI;
  opacity: 1;
`;

export const WrapperButton = styled.button<IProps>`
  display: flex;
  gap: 1.25rem;
  justify-content: flex-end;
  margin-top: 2.5rem;
  border: none;
  outline: none;
  background-color: transparent;
`;

export const WrapperButttonPrint = styled.div<IProps>`
  height: 2.625rem;
  padding: 0.8125rem 1.0625rem 0.8125rem 1.0625rem;
  border: 0.0625rem solid #f9f9f9;
  display: flex;
  gap: 0.625rem;
  cursor: pointer;
  background-color: ${({isDisabled}) => isDisabled? '#a5a5a5' : 'transparent'};
  border-color: ${({isDisabled}) => isDisabled? '#a5a5a5' : '#f9f9f9'};

 ${({isDisabled}) => !isDisabled && `
   :hover {
    background: var(--amarelo-vale);
    animation: fadeIn 0.5s;
    border: transparent;
  }
 `}
`;

export const IconPrint = styled.img`
  width: 1.0625rem;
  height: 0.875rem;
  cursor: pointer;
`;

export const TextButtonPrint = styled.p`
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--branco);
  text-align: left;
  font: normal normal 600 0.75rem/1rem Segoe UI;
  cursor: pointer;
`;

export const WrapperModal = styled.div`
  width: 75rem;
  height: auto;
  box-shadow: 0rem 0.125rem 0.25rem #0000001a;
  background: #ffffff 0% 0% no-repeat padding-box;
  position: absolute;
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

export const WrapperBoxModal = styled.div`
  position: relative;
  padding: 6.0625rem 4.5625rem 3.5625rem 4.5625rem;
`;

export const IconClose = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  position: absolute;
  z-index: 5;
  top: -3.1875rem;
  left: 75.5rem;
`;

export const SetaTextFilterView = styled.h1`
  margin-left: 0.625rem;
  margin-right: 0.625rem;
  color: var(--branco);
`;
