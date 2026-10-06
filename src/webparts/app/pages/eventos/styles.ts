import styled from 'styled-components';

export const Page = styled.main`min-height: calc(100vh - 180px); padding: 2.25rem 1.5rem 4rem; background: #f5f7f8;`;
export const Content = styled.div`max-width: 1050px; margin: 0 auto;`;
export const Header = styled.header`
  display: flex; align-items: flex-end; justify-content: space-between; gap: 1rem; margin-bottom: 1.6rem;
  @media (max-width: 600px) { align-items: flex-start; flex-direction: column; }
`;
export const Eyebrow = styled.p`margin-bottom: .45rem; color: #007e7a; font-size: .7rem; font-weight: 700; letter-spacing: .12em;`;
export const Title = styled.h1`color: #263238; font-size: 2rem; font-weight: 700;`;
export const Subtitle = styled.p`margin-top: .45rem; color: #718087; font-size: .95rem;`;
export const Counter = styled.div`
  padding: .55rem .8rem; border: 1px solid #e4ebea; border-radius: 8px; background: #fff; color: #849092; font-size: .76rem;
  strong { color: #007e7a; font-size: .95rem; }
`;
export const FilterBar = styled.div`
  display: flex; align-items: center; gap: .7rem; margin-bottom: 1.45rem;
  @media (max-width: 700px) { align-items: stretch; flex-direction: column; }
`;
export const SearchWrap = styled.div`
  position: relative; flex: 1;
`;
export const SearchIcon = styled.span`position: absolute; top: 9px; left: 13px; color: #94a1a2; font-size: 1.35rem;`;
export const Search = styled.input`
  width: 100%; height: 42px; padding: 0 1rem 0 2.5rem; border: 1px solid #dce4e5; border-radius: 7px; background: #fff; color: #344246; font-size: .83rem;
  &:focus { outline: 2px solid #b9dedb; border-color: #007e7a; }
`;
export const Select = styled.select`height: 42px; padding: 0 .8rem; border: 1px solid #dce4e5; border-radius: 7px; background: #fff; color: #48575a; font-size: .82rem;`;
export const ClearButton = styled.button`height: 42px; padding: 0 .85rem; border: 0; background: transparent; color: #007e7a; font-size: .78rem; font-weight: 600; cursor: pointer; &:hover { text-decoration: underline; }`;
export const Timeline = styled.div`position: relative;`;
export const EventItem = styled.article`position: relative; display: grid; grid-template-columns: 24px 1fr; gap: .9rem; padding-bottom: .9rem;`;
export const Rail = styled.div`
  position: relative; display: flex; justify-content: center;
  &::after { position: absolute; top: 18px; bottom: -9px; width: 1px; background: #dce5e4; content: ''; }
  ${EventItem}:last-child &::after { display: none; }
`;
export const EventDot = styled.span`
  z-index: 1; width: 11px; height: 11px; margin-top: 1.35rem; border: 2px solid #fff; border-radius: 50%; box-shadow: 0 0 0 2px #007e7a;
  &.complete { background: #007e7a; }
  &.progress { background: #fff; box-shadow: 0 0 0 2px #5d97ad; }
  &.attention { background: #ecb11f; box-shadow: 0 0 0 2px #ecb11f; }
`;
export const EventCard = styled.div`padding: 1.1rem 1.25rem; border: 1px solid #e7eded; border-radius: 9px; background: #fff; box-shadow: 0 2px 9px rgba(31, 55, 58, .03);`;
export const EventTop = styled.div`
  display: flex; align-items: flex-start; justify-content: space-between; gap: 1rem;
  @media (max-width: 560px) { flex-direction: column; }
`;
export const EventTitle = styled.h2`color: #344246; font-size: .9rem; font-weight: 650;`;
export const EventDescription = styled.p`margin-top: .34rem; color: #829092; font-size: .78rem; line-height: 1.5;`;
export const Status = styled.span`
  flex: 0 0 auto; padding: .28rem .58rem; border-radius: 20px; font-size: .66rem; font-weight: 600;
  &.complete { color: #137665; background: #e8f5f1; }
  &.progress { color: #46739a; background: #eaf2fa; }
  &.attention { color: #a36c00; background: #fff4d9; }
`;
export const Metadata = styled.div`
  display: flex; flex-wrap: wrap; gap: .55rem 1.25rem; margin-top: .9rem; padding-top: .75rem; border-top: 1px solid #f0f2f2;
  span { display: inline-flex; align-items: center; gap: .38rem; color: #899597; font-size: .7rem; }
`;
export const MetadataIcon = styled.i`color: #78a4a0; font-size: .82rem; font-style: normal;`;
export const EmptyState = styled.div`padding: 3rem 1rem; border: 1px dashed #d6e1e0; border-radius: 9px; color: #7a898c; text-align: center; background: #fff;`;
export const Footnote = styled.p`margin-top: .8rem; color: #9aa5a7; font-size: .67rem; text-align: right;`;
