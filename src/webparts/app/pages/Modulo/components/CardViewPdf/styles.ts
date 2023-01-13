import styled from 'styled-components';

interface IProps {
  topDate?: boolean;
}

export const Container = styled.div`
  width: 45.3125rem;
  margin-bottom: 3.75rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const WrapperBoxView = styled.div`
  display: flex;
  justify-content: space-between;
  width: 22rem;
  max-width: 22rem;
  min-height: 8.8rem;

  padding-top: 0.6875rem;
  padding-left: 0.75rem;
  padding-right: 1.0625rem;
  padding-bottom: 0.9375rem;

  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0rem 0rem 0.375rem #00000005;
  border: 0.0625rem solid #edebe9;
  border-radius: 0.25rem;
`;

export const WrapperIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1.125rem;
  cursor: pointer;

  width: 2.0625rem;
  height: 2.0625rem;
  background: var(--branco) 0% 0% no-repeat padding-box;
  border: 0.0625rem solid #edebe9;
  border-radius: 0.1875rem;
`;

export const IconPdf = styled.img`
  width: 1.3125rem;
  height: 1.3125rem;
  background-size: cover;
`;

export const WrapperBox = styled.div`
  width: 100%;
  display: flex;
`;

export const WrapperBoxTitle = styled.div`
  width: 100%;
  margin-top: 0.625rem;
  cursor: pointer;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.75rem;
`;

export const TitleComplexo = styled.h1`
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  font: normal normal bold 0.875rem/1rem Segoe UI;
  color: #3e3e3e;
`;

export const IconViewPdf = styled.img`
  width: 0.75rem;
  height: 0.75rem;
  cursor: pointer;
`;

export const WrapperBoxFase = styled.div`
  display: flex;
  gap: 0.625rem;
  flex-wrap: wrap;
`;

export const WrapperFase = styled.div`
  min-width: 3.8125rem;
  height: 1.3125rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0.0625rem solid #ebebeb;
  border-radius: 0.25rem;
  opacity: 1;
`;

export const TextFase = styled.div`
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--verde-vale);
  text-align: left;
  font: normal normal normal 0.6875rem/0.9375rem Segoe UI;
  opacity: 1;
`;

export const WrapperDateFile = styled.div<IProps>`
  top: ${({ topDate }) => (!!topDate ? '21px' : '0')};
  margin-top: 1.25rem;
  left: 8.3125rem;
  position: relative;
  min-width: 8.8125rem;
  height: 1.3125rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0.0625rem solid #ebebeb;
  border-radius: 0.25rem;
  opacity: 1;
`;

export const TextDateFile = styled.p`
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--cinza-escuro);
  text-align: left;
  font: normal normal normal 0.6875rem/0.9375rem Segoe UI;
  opacity: 1;
`;
