import * as React from 'react';
import * as S from './styles';

import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../../dataflow/hooks';
import { setIsOpenOrDisable, setIsOpenOrDisableModalSucessOrError } from '../../../../dataflow/reducers/StateList';
import Barra from '../../assets/img/BarraModal.png';
import SucessIcon from '../../assets/img/Sucess.png';
import ErroIcon from '../../assets/img/Error.png';
import IconClose from '../../assets/icons/IconClose.svg';
import { useHistory } from 'react-router-dom';
import Spinner from '../Spinner';
interface Props {
  titleMenssage?: string;
  SubTitleMenssage?: string;
  sucess?: boolean;
  error?: boolean;
  isOpen?: boolean;
  isOpenEditForm?: boolean;
  isOpenEditFormSpinner?: boolean;
  children?: React.ReactNode;
}

const Modal = ({ isOpen, sucess, error, titleMenssage, SubTitleMenssage, isOpenEditForm = false, isOpenEditFormSpinner = false, children, ...rest }: Props) => {
  const dispatch = useDispatch();
  const filters = useAppSelector((state) => state.state.filters);
  const history = useHistory();
  const scrollRef = React.useRef(null);

  const executeScroll = () => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  };


  const handleDisable = () => {
    if (!isOpenEditForm) {
      dispatch(setIsOpenOrDisable(false))
    }
    dispatch(setIsOpenOrDisableModalSucessOrError(false))
  }

  React.useEffect(() => {
    if (sucess) {
      setTimeout(() => {
        history.go(0);
      }, 4000);
    }
  }, [sucess]);

  React.useEffect(() => {
    if (!!isOpen) {
      dispatch(setIsOpenOrDisable(isOpen));
    }
    if (!!isOpenEditForm) {
      executeScroll()
    }
  }, []);


  return (
    <>
      {
        !!filters.isOpenOrDisable && !isOpenEditForm && (
          <S.Container ref={scrollRef} onClick={() => handleDisable()}>
            {children}
          </S.Container>
        )
      }
      {
        !!filters.isOpenOrDisable && !!isOpenEditForm && (
          <S.Container ref={scrollRef} isPaddingFormEdit={filters.tiposConteudo ? '109px' : '0'}>
            {children}
          </S.Container>
        )
      }
      {
        !!filters.isOpenOrDisable && !!isOpenEditFormSpinner && (
          <S.ContainerSpinner>
            <Spinner />
          </S.ContainerSpinner>
        )
      }
      {
        !!filters.isOpenOrDisable && !!sucess && (
          <S.Container sucess={!!sucess}>
            <S.WrapperMenssages>
              <S.TopBarContainer >
                <S.TopBar src={Barra} />
              </S.TopBarContainer>
              <S.WrapperContent>
                <S.Icon src={!!sucess && SucessIcon} />
                <S.WrapperText>
                  <S.Title>{titleMenssage}</S.Title>
                  <S.SubTitle>{SubTitleMenssage}</S.SubTitle>
                </S.WrapperText>
              </S.WrapperContent>
              {children}
            </S.WrapperMenssages>
          </S.Container>
        )
      }
      {
        !!filters.isOpenOrDisable && !!error && (
          <S.Container error={!!error} onClick={() => handleDisable()}>
            <S.WrapperMenssages>
              <S.TopBarContainer >

                <S.TopBar src={Barra} />
                <S.IconClose src={IconClose} />

              </S.TopBarContainer>
              <S.WrapperContent>
                <S.Icon src={!!error && ErroIcon} />
                <S.WrapperText>
                  <S.Title>{titleMenssage}</S.Title>
                  <S.SubTitle>{SubTitleMenssage}</S.SubTitle>
                </S.WrapperText>
              </S.WrapperContent>
              {children}
            </S.WrapperMenssages>
          </S.Container>
        )
      }
    </>
  );
};

export default Modal;
