import styled from 'styled-components';
import Seta from '../../assets/components/SetaInput';
export const Container = styled.div `
  width: ${({ width }) => (width ? width : '432px')};
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : '16px')};
  padding: 0.8125rem 0.625rem 0.8125rem 0.625rem;
  position: relative;
  background: #f9f9f9;
  border: 0.0625rem solid #e6e6e6;
  cursor: pointer;
  ${({ disabled }) => disabled &&
    `
    background: var(--cinza-claro);
    
  `}

  ::after {
    width: 203px;
    line-break: normal;
    text-align: center;
    display: none;
    content: '${({ isContent }) => isContent}';
    position: absolute;
    top: -3.125rem;
    left: 90%;
    padding: 0.625rem;
    background: #ffff;
    border: 0.0625rem solid #e6e6e6;
    box-shadow: 0rem 0.125rem 0.25rem #0704047a;
    transform: translateX(-90%) translateY(-80%);
  }

  :hover {
    ::after {
      display: ${({ isVisibleHover }) => (isVisibleHover ? 'block' : 'none')};
    }
  }
`;
export const Value = styled.span `
  width: max-content;
  min-width: fit-content;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: ${({ isYellow }) => (isYellow ? 'var(--amarelo-vale)' : 'var(--cinza-escuro)')};
  text-align: left;
  font: normal normal normal 12px/16px Segoe UI;
  opacity: ${(type) => (type.disabled ? 0.45 : 1)};
  font-weight: ${({ isYellow }) => isYellow && '700'};
`;
export const SetaInput = styled(Seta) `
  width: 1rem;
  height: 0.5rem;
  background-size: cover;
  transition: transform 0.3s;
  cursor: pointer;

  ${({ isToogle }) => isToogle &&
    `
    transform: rotate(-90deg);
  `}
`;
export const OptionsBox = styled.div `
  width: ${({ width }) => (width ? width : '432px')};
  max-height: ${({ maxHeightOptions }) => (maxHeightOptions ? maxHeightOptions : '120px')};
  background: #f9f9f9;
  position: absolute;
  right: 50%;
  top: ${({ topOptions }) => (topOptions ? topOptions : 'auto')};
  bottom: ${({ bottomOptions }) => (bottomOptions ? bottomOptions : '-125px')};
  transform: translateX(50%);
  z-index: 5;
  box-shadow: 0rem 0.125rem 0.25rem #0704047a;
  overflow: auto;
  p,
  h1 {
    color: var(--cinza-escuro);
  }
`;
export const listOptions = styled.li `
  padding-right: 8px;
  display: flex;
  justify-content: space-between;
`;
export const Option = styled.div `
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
export const OptionValue = styled.p `
  text-align: left;
  color: var(--cinza-escuro);
  margin: 0 0.8125rem;
  font-weight: 400;
`;
export const WrapperOptionValue = styled.div `
  width: 90%;
  display: flex;
  gap: 0.1875rem;
  overflow: hidden;
  height: 33px;
  align-items: center;
`;
//# sourceMappingURL=styles.js.map