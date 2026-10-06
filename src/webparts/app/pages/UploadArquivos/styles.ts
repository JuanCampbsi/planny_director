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
`;

export const Header = styled.div`
  margin-bottom: 1.5rem;
`;

export const Title = styled.h1`
  margin: 0;
  color: #1d2a39;
  font-size: 2rem;
  font-weight: 700;
`;

export const Subtitle = styled.p`
  margin: 0.5rem 0 0;
  color: #5f6c7b;
  font-size: 1rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 0.8fr;
  gap: 1.5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 12px 32px rgba(16, 24, 40, 0.08);
  border: 1px solid #edf1f5;
  padding: 1.5rem;
`;

export const Dropzone = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 220px;
  border: 2px dashed #bbcad8;
  border-radius: 16px;
  background: linear-gradient(135deg, #f7fafe 0%, #eef4ff 100%);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #3d7ae8;
    background: linear-gradient(135deg, #eef5ff 0%, #eaf0ff 100%);
  }
`;

export const DropzoneText = styled.div`
  text-align: center;
  color: #2d4158;
`;

export const DropzoneTitle = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

export const DropzoneHint = styled.div`
  font-size: 0.95rem;
  color: #607387;
`;

export const FileInput = styled.input`
  display: none;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0 0;
`;

export const FileItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  background: #f8fafc;
  border: 1px solid #edf1f5;
  border-radius: 12px;
  padding: 0.75rem 0.9rem;
  margin-bottom: 0.75rem;
  color: #1d2a39;
`;

export const FileMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const FileName = styled.span`
  font-weight: 600;
`;

export const FileSize = styled.span`
  color: #607387;
  font-size: 0.85rem;
`;

export const RemoveFile = styled.button`
  border: none;
  background: transparent;
  color: #d14a4a;
  cursor: pointer;
  font-weight: 700;
`;

export const Form = styled.div`
  display: grid;
  gap: 1rem;
  margin-top: 1.5rem;
`;

export const Field = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: #1d2a39;
  font-weight: 600;
  font-size: 0.92rem;
`;

export const Input = styled.input`
  border: 1px solid #d8e0ea;
  border-radius: 10px;
  padding: 0.8rem 0.9rem;
  font-size: 0.95rem;
  background: #fff;
  color: #1d2a39;
`;

export const Select = styled.select`
  border: 1px solid #d8e0ea;
  border-radius: 10px;
  padding: 0.8rem 0.9rem;
  font-size: 0.95rem;
  background: #fff;
  color: #1d2a39;
`;

export const Textarea = styled.textarea`
  border: 1px solid #d8e0ea;
  border-radius: 10px;
  padding: 0.8rem 0.9rem;
  min-height: 110px;
  resize: vertical;
  font-size: 0.95rem;
  color: #1d2a39;
`;

export const Actions = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

export const PrimaryButton = styled.button`
  border: none;
  border-radius: 10px;
  background: linear-gradient(135deg, #2f6de6 0%, #1b4fc9 100%);
  color: #fff;
  font-weight: 700;
  padding: 0.9rem 1.2rem;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(47, 109, 230, 0.2);
`;

export const SecondaryButton = styled.button`
  border: 1px solid #d8e0ea;
  border-radius: 10px;
  background: #fff;
  color: #1d2a39;
  font-weight: 700;
  padding: 0.9rem 1.2rem;
  cursor: pointer;
`;

export const SummaryPanel = styled.div`
  display: grid;
  gap: 1rem;
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
  color: #1d2a39;
`;

export const SummaryLabel = styled.span`
  color: #607387;
`;

export const SummaryValue = styled.strong`
  color: #1d2a39;
`;

export const Success = styled.div`
  margin-top: 1rem;
  background: #eafaf1;
  border: 1px solid #cfead8;
  color: #1d7d50;
  border-radius: 12px;
  padding: 0.85rem 1rem;
  font-weight: 600;
`;
