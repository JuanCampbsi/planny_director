import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 120px);
  background: #f5f7fb;
  padding: 2rem 1.5rem 4rem;
  box-sizing: border-box;
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  gap: 1.5rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const Title = styled.h1`
  margin: 0;
  color: #1d2a39;
  font-size: 2rem;
  font-weight: 700;
`;

export const Subtitle = styled.p`
  margin: 0.4rem 0 0;
  color: #5f6c7b;
  font-size: 1rem;
`;

export const SummaryCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const SummaryCard = styled.div`
  background: #fff;
  border: 1px solid #edf1f5;
  border-radius: 16px;
  padding: 1rem 1.2rem;
  box-shadow: 0 10px 24px rgba(16, 24, 40, 0.04);
`;

export const SummaryLabel = styled.div`
  color: #607387;
  font-size: 0.82rem;
  margin-bottom: 0.5rem;
`;

export const SummaryValue = styled.div`
  color: #1d2a39;
  font-size: 1.65rem;
  font-weight: 700;
`;

export const Panel = styled.div`
  background: #fff;
  border: 1px solid #edf1f5;
  border-radius: 18px;
  box-shadow: 0 12px 32px rgba(16, 24, 40, 0.06);
  padding: 1.5rem;
`;

export const List = styled.div`
  display: grid;
  gap: 1rem;
`;

export const RequestCard = styled.div`
  border: 1px solid #e3ebf3;
  border-radius: 16px;
  background: #f9fbff;
  padding: 1.1rem 1.2rem;
`;

export const RequestHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 0.7rem;
`;

export const RequestTitle = styled.div`
  font-weight: 700;
  color: #1d2a39;
  font-size: 1.02rem;
`;

export const StatusPill = styled.span<{ status: 'Pendente' | 'Aprovado' | 'Reprovado' | 'Em revisão' }>`
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  padding: 0.4rem 0.8rem;
  font-size: 0.76rem;
  font-weight: 700;
  background: ${(props) => {
    if (props.status === 'Aprovado') return '#eafaf1';
    if (props.status === 'Reprovado') return '#fdecec';
    if (props.status === 'Em revisão') return '#fff3d6';
    return '#eaf1ff';
  }};
  color: ${(props) => {
    if (props.status === 'Aprovado') return '#1d7d50';
    if (props.status === 'Reprovado') return '#b64747';
    if (props.status === 'Em revisão') return '#9a6d18';
    return '#2f6de6';
  }};
`;

export const Metadata = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1rem;
  color: #607387;
  font-size: 0.82rem;
  margin-bottom: 0.8rem;
`;

export const Tag = styled.span`
  background: #edf4ff;
  color: #3459a8;
  border-radius: 999px;
  padding: 0.35rem 0.7rem;
  font-weight: 600;
`;

export const Notes = styled.p`
  margin: 0;
  color: #42576a;
  line-height: 1.5;
`;

export const ActionBar = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
  flex-wrap: wrap;
`;

export const SuccessButton = styled.button`
  border: none;
  border-radius: 10px;
  background: linear-gradient(135deg, #1bc36a 0%, #169a5f 100%);
  color: #fff;
  font-weight: 700;
  padding: 0.75rem 1rem;
  cursor: pointer;
`;

export const WarningButton = styled.button`
  border: 1px solid #f0d29a;
  border-radius: 10px;
  background: #fffaf0;
  color: #7d5a12;
  font-weight: 700;
  padding: 0.75rem 1rem;
  cursor: pointer;
`;

export const DangerButton = styled.button`
  border: 1px solid #f4c4c4;
  border-radius: 10px;
  background: #fff3f3;
  color: #b64747;
  font-weight: 700;
  padding: 0.75rem 1rem;
  cursor: pointer;
`;

export const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  margin-top: 1rem;
`;

export const TimelineItem = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${(props) => (props.active ? '#1d2a39' : '#607387')};
  font-weight: ${(props) => (props.active ? 700 : 500)};
`;

export const TimelineDot = styled.span<{ active?: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${(props) => (props.active ? '#2f6de6' : '#d9e2ec')};
  box-shadow: 0 0 0 4px ${(props) => (props.active ? '#dfeaff' : '#edf2f7')};
`;
