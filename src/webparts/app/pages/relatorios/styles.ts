import styled from 'styled-components';

export const Page = styled.main`
  min-height: calc(100vh - 180px);
  padding: 2.25rem 1.5rem 4rem;
  background: #f5f7f8;
`;
export const Content = styled.div`max-width: 1240px; margin: 0 auto;`;
export const PageHeader = styled.header`
  display: flex; align-items: flex-end; justify-content: space-between; gap: 1.5rem; margin-bottom: 1.5rem;
  @media (max-width: 700px) { align-items: flex-start; flex-direction: column; }
`;
export const Eyebrow = styled.p`color: #007e7a; font-size: .7rem; font-weight: 700; letter-spacing: .12em; margin-bottom: .45rem;`;
export const Title = styled.h1`color: #263238; font-size: 2rem; font-weight: 700; line-height: 1.2;`;
export const Subtitle = styled.p`color: #718087; font-size: .95rem; margin-top: .45rem;`;
export const Actions = styled.div`display: flex; gap: .65rem; flex-wrap: wrap;`;
export const Select = styled.select`
  height: 42px; padding: 0 .8rem; border: 1px solid #dce4e5; border-radius: 7px; color: #39484c; background: #fff; font-size: .85rem;
`;
export const PrimaryButton = styled.button`
  height: 42px; padding: 0 1rem; border: 0; border-radius: 7px; background: #007e7a; color: #fff; font-size: .84rem; font-weight: 600; cursor: pointer;
  &:hover { background: #006c69; }
`;
export const KpiGrid = styled.section`
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-bottom: 1rem;
  @media (max-width: 900px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 540px) { grid-template-columns: 1fr; }
`;
export const KpiCard = styled.article`
  min-height: 151px; padding: 1.1rem 1.2rem; border: 1px solid #e8edee; border-radius: 10px; background: #fff; box-shadow: 0 3px 12px rgba(31, 55, 58, .035);
`;
export const KpiIcon = styled.span<{ tone: 'green' | 'yellow' | 'blue' | 'rose' }>`
  display: inline-flex; width: 31px; height: 31px; align-items: center; justify-content: center; border-radius: 8px; font-weight: 700;
  color: ${({ tone }) => tone === 'green' ? '#007e7a' : tone === 'yellow' ? '#b98500' : tone === 'blue' ? '#3183a0' : '#b64d5c'};
  background: ${({ tone }) => tone === 'green' ? '#e7f4f2' : tone === 'yellow' ? '#fff5d9' : tone === 'blue' ? '#e8f5f8' : '#fff0f1'};
`;
export const KpiLabel = styled.p`margin-top: .75rem; color: #718087; font-size: .8rem;`;
export const KpiValue = styled.p`margin-top: .12rem; color: #27363a; font-size: 1.8rem; font-weight: 700;`;
export const KpiSuffix = styled.span`color: #95a2a5; font-size: .95rem; font-weight: 500;`;
export const KpiFoot = styled.p`margin-top: .35rem; color: #859194; font-size: .71rem;`;
export const Positive = styled.strong`color: #168875;`;
export const ProgressTrack = styled.div`height: 5px; overflow: hidden; margin-top: .65rem; border-radius: 5px; background: #e8eeee;`;
export const ProgressValue = styled.div`width: 81%; height: 100%; border-radius: inherit; background: #007e7a;`;
export const ChartGrid = styled.section`
  display: grid; grid-template-columns: minmax(0, 1.65fr) minmax(300px, 1fr); gap: 1rem; margin-bottom: 1rem;
  @media (max-width: 850px) { grid-template-columns: 1fr; }
`;
export const Panel = styled.section`
  padding: 1.25rem 1.35rem; border: 1px solid #e8edee; border-radius: 10px; background: #fff; box-shadow: 0 3px 12px rgba(31, 55, 58, .035);
`;
export const PanelHeading = styled.div`display: flex; align-items: center; justify-content: space-between; gap: .75rem; margin-bottom: 1.2rem;`;
export const PanelTitle = styled.h2`color: #2b393d; font-size: .98rem; font-weight: 650;`;
export const PanelCaption = styled.p`margin-top: .24rem; color: #899598; font-size: .75rem;`;
export const Legend = styled.div`
  display: flex; gap: .8rem; color: #748084; font-size: .67rem;
  span { display: flex; align-items: center; gap: .32rem; white-space: nowrap; }
  i { width: 8px; height: 8px; border-radius: 2px; background: #007e7a; }
  i.planned { background: #d9e8e6; }
`;
export const ChartArea = styled.div`display: flex; height: 205px; padding-top: .25rem;`;
export const YAxis = styled.div`
  display: flex; flex-direction: column; justify-content: space-between; padding: 0 0 22px; color: #a1acad; font-size: .66rem;
`;
export const BarChart = styled.div`
  position: relative; display: flex; flex: 1; align-items: stretch; justify-content: space-around; margin-left: .7rem;
  background: repeating-linear-gradient(to bottom, transparent 0, transparent calc(25% - 1px), #edf1f0 calc(25% - 1px), #edf1f0 25%);
`;
export const BarGroup = styled.div`z-index: 1; display: flex; width: 12%; flex-direction: column; align-items: center; justify-content: flex-end;`;
export const Bars = styled.div`display: flex; height: calc(100% - 22px); align-items: flex-end; gap: 5px;`;
export const Bar = styled.div<{ height: number; tone: 'planned' | 'actual' }>`
  width: 13px; height: ${({ height }) => height}%; border-radius: 3px 3px 0 0;
  background: ${({ tone }) => tone === 'planned' ? '#d9e8e6' : '#007e7a'};
  &:hover { opacity: .75; }
`;
export const AxisLabel = styled.span`height: 22px; padding-top: 6px; color: #899598; font-size: .66rem;`;
export const Distribution = styled.div`
  display: flex; min-height: 178px; align-items: center; justify-content: space-around; gap: .65rem;
  @media (max-width: 430px) { align-items: flex-start; flex-direction: column; }
`;
export const Donut = styled.div`
  position: relative; display: flex; width: 150px; height: 150px; flex: 0 0 150px; align-items: center; justify-content: center; border-radius: 50%;
  background: conic-gradient(#007e7a 0 34%, #2f9b96 34% 62%, #ecb11f 62% 84%, #72b7b3 84% 100%);
  &::before { position: absolute; width: 98px; height: 98px; border-radius: 50%; background: #fff; content: ''; }
`;
export const DonutCenter = styled.div`
  z-index: 1; display: flex; flex-direction: column; align-items: center; color: #859194;
  strong { color: #27363a; font-size: 1.5rem; } span { font-size: .7rem; }
`;
export const DistributionLegend = styled.div`display: grid; width: 100%; gap: .72rem;`;
export const DistributionRow = styled.div`
  display: grid; grid-template-columns: 9px 1fr auto; align-items: center; gap: .45rem; color: #718087; font-size: .69rem;
  strong { color: #39484c; font-size: .72rem; }
`;
export const Dot = styled.i<{ color: string }>`width: 8px; height: 8px; border-radius: 50%; background: ${({ color }) => color};`;
export const TextLink = styled.a`color: #007e7a; font-size: .75rem; font-weight: 600; text-decoration: none; white-space: nowrap; &:hover { text-decoration: underline; }`;
export const TableWrap = styled.div`overflow-x: auto;`;
export const Table = styled.table`
  width: 100%; border-collapse: collapse; text-align: left;
  th { padding: .65rem .7rem; border-bottom: 1px solid #edf0f0; color: #98a3a5; font-size: .62rem; font-weight: 600; letter-spacing: .05em; white-space: nowrap; }
  td { padding: .75rem .7rem; border-bottom: 1px solid #f0f2f2; color: #6f7c80; font-size: .73rem; white-space: nowrap; }
  td:first-child { min-width: 250px; white-space: normal; }
  tbody tr:last-child td { border-bottom: 0; }
  td strong { display: block; color: #344246; font-size: .74rem; font-weight: 600; }
  td small { display: block; margin-top: .18rem; color: #929d9f; font-size: .67rem; }
`;
export const Status = styled.span<{ status: string }>`
  display: inline-block; padding: .28rem .55rem; border-radius: 20px; font-size: .65rem; font-weight: 600;
  color: ${({ status }) => status === 'Concluído' ? '#137665' : status === 'Atenção' ? '#a36c00' : '#46739a'};
  background: ${({ status }) => status === 'Concluído' ? '#e8f5f1' : status === 'Atenção' ? '#fff4d9' : '#eaf2fa'};
`;
export const Footnote = styled.p`margin-top: .8rem; color: #9aa5a7; font-size: .67rem; text-align: right;`;
