import styled from 'styled-components';

export const Container = styled.div`
  overflow-x: hidden;
`;

export const ActionsSection = styled.div`
  max-width: 1200px;
  margin: 2rem auto 0;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ActionCard = styled.button`
  border: 1px solid #dfe9f4;
  background: linear-gradient(135deg, #ffffff 0%, #f4f8ff 100%);
  border-radius: 18px;
  padding: 1.3rem 1.5rem;
  text-align: left;
  cursor: pointer;
  box-shadow: 0 12px 24px rgba(33, 63, 122, 0.06);
`;

export const ActionLabel = styled.div`
  color: #1d2a39;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
`;

export const ActionDescription = styled.div`
  color: #5f6c7b;
  font-size: 0.95rem;
  line-height: 1.5;
`;

export const FooterBottom = styled.div`
  margin-top: 7.125rem;
`;
