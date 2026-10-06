import * as React from 'react';
import * as S from './styles';
import { moduleDistribution, monthlyProgress, planEvents } from './data';

const ReportPage = (): JSX.Element => {
  const [period, setPeriod] = React.useState('30');
  const visibleEvents = planEvents.slice(0, period === '30' ? 6 : period === '90' ? 8 : planEvents.length);
  const concluded = visibleEvents.filter((event) => event.status === 'Concluído').length;
  const attention = visibleEvents.filter((event) => event.status === 'Atenção').length;

  const exportReport = () => {
    const rows = [
      ['Data', 'Evento', 'Módulo', 'Responsável', 'Status'],
      ...visibleEvents.map((event) => [
        new Date(event.date).toLocaleDateString('pt-BR'),
        event.title,
        event.module,
        event.actor,
        event.status,
      ]),
    ];
    const csv = rows.map((row) => row.map((value) => `"${value.replace(/"/g, '""')}"`).join(';')).join('\n');
    const link = document.createElement('a');
    link.href = URL.createObjectURL(new Blob(['\ufeff', csv], { type: 'text/csv;charset=utf-8;' }));
    link.download = 'relatorio-plano-diretor.csv';
    link.click();
    window.setTimeout(() => URL.revokeObjectURL(link.href), 1000);
  };

  return (
    <S.Page>
      <S.Content>
        <S.PageHeader>
          <div>
            <S.Eyebrow>ACOMPANHAMENTO EXECUTIVO</S.Eyebrow>
            <S.Title>Relatórios</S.Title>
            <S.Subtitle>Indicadores e evolução dos projetos do Plano Diretor.</S.Subtitle>
          </div>
          <S.Actions>
            <S.Select aria-label="Período do relatório" value={period} onChange={(event) => setPeriod(event.target.value)}>
              <option value="30">Últimos 30 dias</option>
              <option value="90">Últimos 90 dias</option>
              <option value="365">Último ano</option>
            </S.Select>
            <S.PrimaryButton type="button" onClick={exportReport}>⇩ &nbsp; Exportar relatório</S.PrimaryButton>
          </S.Actions>
        </S.PageHeader>

        <S.KpiGrid>
          <S.KpiCard>
            <S.KpiIcon tone="green">✓</S.KpiIcon>
            <S.KpiLabel>Projetos no plano</S.KpiLabel>
            <S.KpiValue>24</S.KpiValue>
            <S.KpiFoot><S.Positive>↑ 8,2%</S.Positive> em relação ao período anterior</S.KpiFoot>
          </S.KpiCard>
          <S.KpiCard>
            <S.KpiIcon tone="yellow">◷</S.KpiIcon>
            <S.KpiLabel>Marcos concluídos</S.KpiLabel>
            <S.KpiValue>{concluded + 18}<S.KpiSuffix>/ 32</S.KpiSuffix></S.KpiValue>
            <S.KpiFoot><S.Positive>↑ 12,5%</S.Positive> de progresso no período</S.KpiFoot>
          </S.KpiCard>
          <S.KpiCard>
            <S.KpiIcon tone="blue">⌁</S.KpiIcon>
            <S.KpiLabel>Execução média</S.KpiLabel>
            <S.KpiValue>81<S.KpiSuffix>%</S.KpiSuffix></S.KpiValue>
            <S.ProgressTrack><S.ProgressValue /></S.ProgressTrack>
          </S.KpiCard>
          <S.KpiCard>
            <S.KpiIcon tone="rose">!</S.KpiIcon>
            <S.KpiLabel>Itens em atenção</S.KpiLabel>
            <S.KpiValue>{attention + 3}</S.KpiValue>
            <S.KpiFoot>Requerem acompanhamento da equipe</S.KpiFoot>
          </S.KpiCard>
        </S.KpiGrid>

        <S.ChartGrid>
          <S.Panel>
            <S.PanelHeading>
              <div><S.PanelTitle>Evolução do plano</S.PanelTitle><S.PanelCaption>Execução planejada x realizada</S.PanelCaption></div>
              <S.Legend><span><i className="planned" /> Planejado</span><span><i className="actual" /> Realizado</span></S.Legend>
            </S.PanelHeading>
            <S.ChartArea>
              <S.YAxis><span>100%</span><span>75%</span><span>50%</span><span>25%</span><span>0%</span></S.YAxis>
              <S.BarChart>
                {monthlyProgress.map((month) => (
                  <S.BarGroup key={month.label}>
                    <S.Bars>
                      <S.Bar height={month.planned} tone="planned" title={`Planejado: ${month.planned}%`} />
                      <S.Bar height={month.actual} tone="actual" title={`Realizado: ${month.actual}%`} />
                    </S.Bars>
                    <S.AxisLabel>{month.label}</S.AxisLabel>
                  </S.BarGroup>
                ))}
              </S.BarChart>
            </S.ChartArea>
          </S.Panel>
          <S.Panel>
            <S.PanelHeading><div><S.PanelTitle>Distribuição por frente</S.PanelTitle><S.PanelCaption>Projetos ativos por categoria</S.PanelCaption></div></S.PanelHeading>
            <S.Distribution>
              <S.Donut aria-label="Distribuição de projetos por frente">
                <S.DonutCenter><strong>24</strong><span>projetos</span></S.DonutCenter>
              </S.Donut>
              <S.DistributionLegend>
                {moduleDistribution.map((item) => (
                  <S.DistributionRow key={item.label}>
                    <S.Dot color={item.color} /><span>{item.label}</span><strong>{item.value}%</strong>
                  </S.DistributionRow>
                ))}
              </S.DistributionLegend>
            </S.Distribution>
          </S.Panel>
        </S.ChartGrid>

        <S.Panel>
          <S.PanelHeading>
            <div><S.PanelTitle>Atividade recente</S.PanelTitle><S.PanelCaption>Últimos eventos registrados no Plano Diretor</S.PanelCaption></div>
            <S.TextLink href="#/Eventos">Ver todos os eventos →</S.TextLink>
          </S.PanelHeading>
          <S.TableWrap>
            <S.Table>
              <thead><tr><th>EVENTO</th><th>MÓDULO</th><th>RESPONSÁVEL</th><th>DATA</th><th>STATUS</th></tr></thead>
              <tbody>
                {visibleEvents.slice(0, 4).map((event) => (
                  <tr key={event.id}>
                    <td><strong>{event.title}</strong><small>{event.description}</small></td>
                    <td>{event.module}</td><td>{event.actor}</td>
                    <td>{new Date(event.date).toLocaleDateString('pt-BR')}</td>
                    <td><S.Status status={event.status}>{event.status}</S.Status></td>
                  </tr>
                ))}
              </tbody>
            </S.Table>
          </S.TableWrap>
        </S.Panel>
        <S.Footnote>Dados demonstrativos para visualização do protótipo.</S.Footnote>
      </S.Content>
    </S.Page>
  );
};

export default ReportPage;
