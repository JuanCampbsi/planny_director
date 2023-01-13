import styled from 'styled-components';
export const Wrapper = styled.div `
  max-width: 85.375rem;
  margin: 0 auto;
  padding: 0 8.4375rem;
  padding-top: 2.1875rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 84.6875rem;

  /* height: 50rem; */
  min-height: ${({ isActive }) => (!!isActive ? '75.5rem' : '0')};
  max-height: 366.5rem;
`;
//# sourceMappingURL=styles.js.map