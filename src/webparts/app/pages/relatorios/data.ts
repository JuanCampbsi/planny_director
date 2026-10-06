export type EventStatus = 'Concluído' | 'Em andamento' | 'Atenção';

export interface IPlanEvent {
  id: number;
  title: string;
  description: string;
  module: string;
  actor: string;
  date: string;
  status: EventStatus;
}

export const planEvents: IPlanEvent[] = [
  {
    id: 1,
    title: 'Marco de engenharia concluído',
    description: 'Entrega do estudo de viabilidade do corredor norte.',
    module: 'Engenharia',
    actor: 'Equipe de Planejamento',
    date: '2026-10-03T10:20:00',
    status: 'Concluído',
  },
  {
    id: 2,
    title: 'Revisão de orçamento solicitada',
    description: 'Ajustar a previsão de investimento da fase de implantação.',
    module: 'Investimentos',
    actor: 'Comitê Diretor',
    date: '2026-10-02T15:45:00',
    status: 'Atenção',
  },
  {
    id: 3,
    title: 'Cronograma atualizado',
    description: 'As datas de início e término foram revisadas para o ciclo atual.',
    module: 'Cronograma',
    actor: 'Mariana Costa',
    date: '2026-10-01T09:10:00',
    status: 'Concluído',
  },
  {
    id: 4,
    title: 'Análise de riscos em andamento',
    description: 'Levantamento de riscos operacionais da etapa de execução.',
    module: 'Gestão de riscos',
    actor: 'Escritório de Projetos',
    date: '2026-09-29T14:00:00',
    status: 'Em andamento',
  },
  {
    id: 5,
    title: 'Indicadores trimestrais publicados',
    description: 'Painel de desempenho atualizado com os resultados do trimestre.',
    module: 'Indicadores',
    actor: 'Equipe de Planejamento',
    date: '2026-09-26T11:30:00',
    status: 'Concluído',
  },
  {
    id: 6,
    title: 'Documento enviado para aprovação',
    description: 'Plano de comunicação encaminhado para validação da liderança.',
    module: 'Comunicação',
    actor: 'Rafael Mendes',
    date: '2026-09-23T16:15:00',
    status: 'Em andamento',
  },
  {
    id: 7,
    title: 'Prazo de contratação próximo',
    description: 'A contratação da etapa de projetos executivos requer acompanhamento.',
    module: 'Contratações',
    actor: 'Suprimentos',
    date: '2026-09-18T08:40:00',
    status: 'Atenção',
  },
  {
    id: 8,
    title: 'Fase de planejamento aprovada',
    description: 'A fase foi aprovada e liberada para acompanhamento executivo.',
    module: 'Planejamento',
    actor: 'Comitê Diretor',
    date: '2026-08-31T13:20:00',
    status: 'Concluído',
  },
  {
    id: 9,
    title: 'Escopo do projeto atualizado',
    description: 'Ajustes de escopo registrados para a próxima etapa.',
    module: 'Projetos',
    actor: 'Escritório de Projetos',
    date: '2026-07-22T10:05:00',
    status: 'Em andamento',
  },
];

export const monthlyProgress = [
  { label: 'Mai', planned: 48, actual: 42 },
  { label: 'Jun', planned: 55, actual: 50 },
  { label: 'Jul', planned: 63, actual: 58 },
  { label: 'Ago', planned: 70, actual: 65 },
  { label: 'Set', planned: 78, actual: 72 },
  { label: 'Out', planned: 86, actual: 81 },
];

export const moduleDistribution = [
  { label: 'Entradas', value: 34, color: '#007e7a' },
  { label: 'Manutenção e operação', value: 28, color: '#2f9b96' },
  { label: 'Saídas', value: 22, color: '#ecb11f' },
  { label: 'Governança', value: 16, color: '#72b7b3' },
];
