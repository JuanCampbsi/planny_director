import styled from 'styled-components';

interface IProps {
  isActive?: boolean;
}

export const Wrapper = styled.div<IProps>`
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
