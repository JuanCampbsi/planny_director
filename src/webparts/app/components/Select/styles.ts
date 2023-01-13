import styled from 'styled-components';
import Seta from '../../assets/components/SetaInput';

interface IProps {
  width?: any;
  height?: any;
  maxHeightOptions?: any;
  bottomOptions?: any;
  topOptions?: any;
  marginTop?: any;
  marginBottom?: any;
  marginLeft?: any;
  marginRight?: any;
  paddingTop?: any;
  paddingBottom?: any;
  paddingRight?: any;
  paddingLeft?: any;
  disabled?: any;
  isToogle?: boolean;
  isYellow?: boolean;
  isAfeter?: boolean;
  isFilterSelect?: boolean;
}

export const Container = styled.div<IProps>`
  width: ${({ width }) => (width ? width : '432px')};
  height: 2.625rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : '16px')};
  padding: 0.8125rem 0.625rem 0.8125rem 0.625rem;
  position: relative;
  background: #f9f9f9;
  border: 0.0625rem solid #e6e6e6;
  cursor: pointer;
  ${({ disabled }) =>
    disabled &&
    `
    background: var(--cinza-claro);
    
  `}
`;

export const Value = styled.p<IProps>`
  ${({ isFilterSelect }) =>
    isFilterSelect &&
    `
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 1rem;
    max-height: 8.5625rem;
    max-width: 6.5625rem;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  `}

  letter-spacing: var(--unnamed-character-spacing-0);
  color: ${({ isYellow }) => (isYellow ? 'var(--amarelo-vale)' : 'var(--cinza-escuro)')};
  text-align: left;
  font: normal normal normal 12px/16px Segoe UI;
  opacity: ${(type) => (type.disabled ? 0.45 : 1)};
  font-weight: ${({ isYellow }) => isYellow && '700'};
`;

export const SetaInput = styled(Seta)<IProps>`
  width: 1rem;
  height: 0.5rem;
  background-size: cover;
  transition: transform 0.3s;
  cursor: pointer;

  ${({ isToogle }) =>
    isToogle &&
    `
    transform: rotate(-90deg);
  `}
`;

export const OptionsBox = styled.div<IProps>`
  width: ${({ width }) => (width ? width : '27rem')};
  max-height: ${({ maxHeightOptions }) => (maxHeightOptions ? maxHeightOptions : '7.5rem')};
  background: #f9f9f9;
  position: absolute;
  right: 50%;
  top: ${({ topOptions }) => (topOptions ? topOptions : 'auto')};
  bottom: ${({ bottomOptions }) => (bottomOptions ? bottomOptions : '-7.8125rem')};
  transform: translateX(50%);
  z-index: 10;
  overflow: auto;
  box-shadow: 0rem 0.125rem 0.25rem #0704047a;
  p,
  h1 {
    color: var(--cinza-escuro);
  }
`;

export const Option = styled.div<IProps>`
  width: 100%;
  cursor: pointer;
  padding: 5px 0;
  padding-bottom: 0.625rem;
  position: relative;
  ::after {
    content: '';
    width: 95%;
    height: 0.0625rem;
    border-bottom: ${({ isAfeter }) => (isAfeter ? 'auto' : '1px solid var(--cinza-claro)')};

    position: absolute;
    bottom: 0.3125rem;
    right: 50%;
    transform: translateX(50%);
  }

  :hover {
    background-color: var(--amarelo-vale);

    ::after {
      border-bottom: 0.0625rem solid #fff;
    }

    p {
      color: #fff;
    }
  }
`;

export const OptionValue = styled.p`
  text-align: left;
  color: var(--cinza-escuro);
  margin: 0 0.8125rem;
  font-weight: 400;
  font-size: 0.8125rem;
`;

export const WrapperOptionValue = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.625rem;
`;
