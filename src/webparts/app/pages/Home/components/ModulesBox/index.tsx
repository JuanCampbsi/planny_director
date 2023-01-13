/* eslint-disable react/jsx-key */
import * as React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../../dataflow/hooks';
import { IModuloItemsFormated, typesModulos } from '../../../../interfaces/IModuloItems';
import * as S from './styles';
import entrada from '../../../../assets/icons/IconEntrada.svg';
import manutencao from '../../../../assets/icons/IconManutencaoEOperacao.svg';
import saida from '../../../../assets/icons/IconSaida.svg';
import { Link } from 'react-router-dom';
import { setIsContextRouterModulo, setListFilterModulo } from '../../../../../../dataflow/reducers/StateList';
import { IAppProps } from '../../../../interfaces/IAppProps';

interface columnInfos {
  name: string;
  src: string;
  id: number;
}

interface columnObj {
  infos: columnInfos;
  data: IModuloItemsFormated[];
}

const ModulesBox = () => {
  const modulos: IModuloItemsFormated[] = useAppSelector((state) => state.state.listModulo);
  const isModalOpen = useAppSelector((state) => state.state.filters.isOpenOrDisable);
  const modulosEntrada = modulos.filter((item: IModuloItemsFormated) => item.TipoModulo === typesModulos.entrada);
  const modulosManutecao = modulos.filter((item: IModuloItemsFormated) => item.TipoModulo === typesModulos.manutencao);
  const modulosSaida = modulos.filter((item: IModuloItemsFormated) => item.TipoModulo === typesModulos.saida);
  const dispatch = useAppDispatch();

  const modulosColumn: columnObj[] = [
    {
      infos: {
        name: 'Entradas',
        src: entrada,
        id: 1,
      },
      data: modulosEntrada,
    },
    {
      infos: {
        name: 'Manutenção e Operação',
        src: manutencao,
        id: 2,
      },
      data: modulosManutecao,
    },
    {
      infos: {
        name: 'Saída',
        src: saida,
        id: 3,
      },
      data: modulosSaida,
    },
  ];

  const isContextRouterModulo = (item: string) => {
    dispatch(setIsContextRouterModulo(item));
  };

  const handleSetFilterModule = (value: IModuloItemsFormated) => {
    dispatch(setListFilterModulo(value));
    isContextRouterModulo(value.Nome.trim());
  };

  const renderColumn = (obj: columnObj) => {
    return (
      <S.Column>
        <S.TopBox>
          <S.ColumnNameBox>
            <S.ImgContainer>
              <S.ColumnImg src={obj.infos.src} alt={'icone representando ' + obj.infos.name} />
            </S.ImgContainer>
            <S.ColumnName>{obj.infos.name}</S.ColumnName>
          </S.ColumnNameBox>
        </S.TopBox>
        <S.ModulosWrapper>
          {obj.data.map((item) => {
            return (
              <Link
                to={`/${isModalOpen ? 'Conteudo' : 'ContextoTema'}/` + item.Nome.trim()}
                onClick={() => handleSetFilterModule(item)}
                role="button"
              >
                <S.ModulosBox key={item.Id}>
                  <S.ModuloImg src={item.Icone?.serverUrl + item.Icone?.serverRelativeUrl} />
                  <S.ModuloName>{item.Nome}</S.ModuloName>
                </S.ModulosBox>
              </Link>
            );
          })}
        </S.ModulosWrapper>
      </S.Column>
    );
  };

  return <S.Wrapper>{modulosColumn.map((item) => renderColumn(item))}</S.Wrapper>;
};

export default ModulesBox;
