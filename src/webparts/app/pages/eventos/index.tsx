import * as React from 'react';
import * as S from './styles';
import { EventStatus, planEvents } from '../relatorios/data';

const EventsPage = (): JSX.Element => {
  const [search, setSearch] = React.useState('');
  const [status, setStatus] = React.useState('Todos');

  const filteredEvents = planEvents.filter((event) => {
    const matchesStatus = status === 'Todos' || event.status === status;
    const query = search.trim().toLocaleLowerCase('pt-BR');
    const matchesSearch = !query || `${event.title} ${event.description} ${event.module} ${event.actor}`.toLocaleLowerCase('pt-BR').includes(query);
    return matchesStatus && matchesSearch;
  });

  const statusClass = (value: EventStatus) => value === 'Concluído' ? 'complete' : value === 'Atenção' ? 'attention' : 'progress';

  return (
    <S.Page>
      <S.Content>
        <S.Header>
          <div>
            <S.Eyebrow>HISTÓRICO DO PLANO</S.Eyebrow>
            <S.Title>Eventos</S.Title>
            <S.Subtitle>Acompanhe atualizações, marcos e decisões registrados pelas equipes.</S.Subtitle>
          </div>
          <S.Counter><strong>{filteredEvents.length}</strong> eventos</S.Counter>
        </S.Header>
        <S.FilterBar>
          <S.SearchWrap><S.SearchIcon aria-hidden="true">⌕</S.SearchIcon><S.Search aria-label="Buscar eventos" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Buscar evento, módulo ou responsável..." /></S.SearchWrap>
          <S.Select aria-label="Filtrar por status" value={status} onChange={(event) => setStatus(event.target.value)}>
            <option>Todos</option><option>Concluído</option><option>Em andamento</option><option>Atenção</option>
          </S.Select>
          <S.ClearButton type="button" onClick={() => { setSearch(''); setStatus('Todos'); }}>Limpar filtros</S.ClearButton>
        </S.FilterBar>
        <S.Timeline>
          {filteredEvents.map((event) => (
            <S.EventItem key={event.id}>
              <S.Rail><S.EventDot className={statusClass(event.status)} /></S.Rail>
              <S.EventCard>
                <S.EventTop>
                  <div><S.EventTitle>{event.title}</S.EventTitle><S.EventDescription>{event.description}</S.EventDescription></div>
                  <S.Status className={statusClass(event.status)}>{event.status}</S.Status>
                </S.EventTop>
                <S.Metadata>
                  <span><S.MetadataIcon>▦</S.MetadataIcon>{event.module}</span>
                  <span><S.MetadataIcon>◉</S.MetadataIcon>{event.actor}</span>
                  <span><S.MetadataIcon>◷</S.MetadataIcon>{new Date(event.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })} · {new Date(event.date).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</span>
                </S.Metadata>
              </S.EventCard>
            </S.EventItem>
          ))}
          {!filteredEvents.length && <S.EmptyState>Nenhum evento encontrado. Tente outro termo ou remova os filtros.</S.EmptyState>}
        </S.Timeline>
        <S.Footnote>Dados demonstrativos para visualização do protótipo.</S.Footnote>
      </S.Content>
    </S.Page>
  );
};

export default EventsPage;
