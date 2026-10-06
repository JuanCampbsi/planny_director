import * as React from 'react';
import * as S from './styles';

type ApprovalStatus = 'Pendente' | 'Aprovado' | 'Reprovado' | 'Em revisão';

interface IRequestItem {
  id: number;
  title: string;
  document: string;
  sender: string;
  dueDate: string;
  status: ApprovalStatus;
  notes: string;
}

const initialRequests: IRequestItem[] = [
  {
    id: 1,
    title: 'Anexo do Plano Diretor - fase 03',
    document: 'PLANO-DIRETOR-FASE03.pdf',
    sender: 'Gabinete de Planejamento',
    dueDate: 'Hoje, 18:00',
    status: 'Pendente',
    notes: 'Versão final com ajustes de cronograma e indicadores de acompanhamento.',
  },
  {
    id: 2,
    title: 'Checklist de revisão técnica',
    document: 'CHECKLIST-REVISAO.XLSX',
    sender: 'Equipe Técnica',
    dueDate: 'Amanhã, 09:00',
    status: 'Em revisão',
    notes: 'Arquivos atualizados com comentários de engenharia e apoio de dados geoespaciais.',
  },
  {
    id: 3,
    title: 'Relatório de acompanhamento trimestral',
    document: 'RELATORIO-TRIMESTRE-DOC-1.docx',
    sender: 'Suporte Executivo',
    dueDate: 'Quinta, 16:00',
    status: 'Aprovado',
    notes: 'Documento aprovado pelo comitê com ressalva de revisão final de layout.',
  },
];

const FluxoAprovacao = (): JSX.Element => {
  const [requests, setRequests] = React.useState<IRequestItem[]>(initialRequests);

  const updateStatus = (id: number, status: ApprovalStatus) => {
    setRequests((current) =>
      current.map((item) => (item.id === id ? { ...item, status } : item)),
    );
  };

  const counts = {
    pending: requests.filter((item) => item.status === 'Pendente').length,
    inReview: requests.filter((item) => item.status === 'Em revisão').length,
    approved: requests.filter((item) => item.status === 'Aprovado').length,
    rejected: requests.filter((item) => item.status === 'Reprovado').length,
  };

  return (
    <S.Container>
      <S.Content>
        <S.Header>
          <div>
            <S.Title>Fluxo de aprovação</S.Title>
            <S.Subtitle>Acompanhe os documentos em análise, as pendências e as decisões concluídas.</S.Subtitle>
          </div>
        </S.Header>

        <S.SummaryCards>
          <S.SummaryCard>
            <S.SummaryLabel>Pendentes</S.SummaryLabel>
            <S.SummaryValue>{counts.pending}</S.SummaryValue>
          </S.SummaryCard>
          <S.SummaryCard>
            <S.SummaryLabel>Em revisão</S.SummaryLabel>
            <S.SummaryValue>{counts.inReview}</S.SummaryValue>
          </S.SummaryCard>
          <S.SummaryCard>
            <S.SummaryLabel>Aprovados</S.SummaryLabel>
            <S.SummaryValue>{counts.approved}</S.SummaryValue>
          </S.SummaryCard>
          <S.SummaryCard>
            <S.SummaryLabel>Recusados</S.SummaryLabel>
            <S.SummaryValue>{counts.rejected}</S.SummaryValue>
          </S.SummaryCard>
        </S.SummaryCards>

        <S.Panel>
          <S.List>
            {requests.map((request) => (
              <S.RequestCard key={request.id}>
                <S.RequestHeader>
                  <div>
                    <S.RequestTitle>{request.title}</S.RequestTitle>
                    <S.Metadata>
                      <span>{request.document}</span>
                      <span>•</span>
                      <span>{request.sender}</span>
                      <span>•</span>
                      <span>Prazo: {request.dueDate}</span>
                    </S.Metadata>
                  </div>
                  <S.StatusPill status={request.status}>{request.status}</S.StatusPill>
                </S.RequestHeader>

                <S.Metadata>
                  <S.Tag>Gestão documental</S.Tag>
                  <S.Tag>Planejamento</S.Tag>
                  <S.Tag>Prioridade média</S.Tag>
                </S.Metadata>

                <S.Notes>{request.notes}</S.Notes>

                <S.ActionBar>
                  <S.SuccessButton type="button" onClick={() => updateStatus(request.id, 'Aprovado')}>
                    Aprovar
                  </S.SuccessButton>
                  <S.WarningButton type="button" onClick={() => updateStatus(request.id, 'Em revisão')}>
                    Solicitar ajustes
                  </S.WarningButton>
                  <S.DangerButton type="button" onClick={() => updateStatus(request.id, 'Reprovado')}>
                    Reprovar
                  </S.DangerButton>
                </S.ActionBar>
              </S.RequestCard>
            ))}
          </S.List>

          <S.Timeline>
            <S.TimelineItem active={true}>
              <S.TimelineDot active={true} />
              Envio do documento para avaliação
            </S.TimelineItem>
            <S.TimelineItem active={true}>
              <S.TimelineDot active={true} />
              Revisão técnica e validação do conteúdo
            </S.TimelineItem>
            <S.TimelineItem active={false}>
              <S.TimelineDot active={false} />
              Aprovação final do gestor responsável
            </S.TimelineItem>
          </S.Timeline>
        </S.Panel>
      </S.Content>
    </S.Container>
  );
};

export default FluxoAprovacao;
