import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 85.375rem;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 12.5rem;
  gap: 3.6875rem;

  @media (max-width: 83.75rem) {
    flex-wrap: wrap;
  }
`;

export const Column = styled.div`
  width: 20.8125rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.625rem;
`;

export const TopBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;

  :after {
    content: '';
    width: 100%;
    height: 0.0625rem;
    border-top: 0.125rem solid #e6e6e6;
    position: absolute;
    left: 50%;
    bottom: -0.9375rem;
    transform: translateX(-50%);
  }
`;

export const ColumnNameBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9375rem;
`;

export const ImgContainer = styled.div`
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid #f1f1f1 0.0938rem;
`;

export const ColumnImg = styled.img``;

export const ColumnName = styled.p`
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-600) var(--unnamed-font-size-18) / 2.1875rem
    var(--unnamed-font-family-segoe-ui);
  color: #555555;
`;

export const ModulosWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  @media (max-width: 66.375rem) {
    justify-content: center;
  }
  a {
    text-decoration: none;
  }
`;

export const ModulosBox = styled.div`
  width: 105px;
  height: 150px;
  border: solid 0.0625rem transparent;
  background-color: #ffffff;
  padding: 0.75rem 0.625rem;
  padding-top: 3.25rem;
  padding-bottom: 3.8125rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.9375rem;
  box-shadow: 0rem 0.1875rem 0.375rem #0000000d;
  cursor: pointer;

  :hover {
    background-color: #f1f1f1b0;
    border: 0.0625rem solid var(--verde-vale);
    transition: 0.5s;
  }
`;

export const ModuloImg = styled.img`
  width: 40px;
  height: 40px;
`;

export const ModuloName = styled.p`
  font: var(--unnamed-font-style-normal) normal normal 13px/14px var(--unnamed-font-family-segoe-ui);
  color: #747678;
  text-transform: capitalize;
  text-align: center;
`;
