var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
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
const Modal = (_a) => {
    var { isOpen, sucess, error, titleMenssage, SubTitleMenssage, isOpenEditForm = false, isOpenEditFormSpinner = false, children } = _a, rest = __rest(_a, ["isOpen", "sucess", "error", "titleMenssage", "SubTitleMenssage", "isOpenEditForm", "isOpenEditFormSpinner", "children"]);
    const dispatch = useDispatch();
    const filters = useAppSelector((state) => state.state.filters);
    const history = useHistory();
    const scrollRef = React.useRef(null);
    const executeScroll = () => {
        scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    const handleDisable = () => {
        if (!isOpenEditForm) {
            dispatch(setIsOpenOrDisable(false));
        }
        dispatch(setIsOpenOrDisableModalSucessOrError(false));
    };
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
            executeScroll();
        }
    }, []);
    return (React.createElement(React.Fragment, null,
        !!filters.isOpenOrDisable && !isOpenEditForm && (React.createElement(S.Container, { ref: scrollRef, onClick: () => handleDisable() }, children)),
        !!filters.isOpenOrDisable && !!isOpenEditForm && (React.createElement(S.Container, { ref: scrollRef, isPaddingFormEdit: filters.tiposConteudo ? '109px' : '0' }, children)),
        !!filters.isOpenOrDisable && !!isOpenEditFormSpinner && (React.createElement(S.ContainerSpinner, null,
            React.createElement(Spinner, null))),
        !!filters.isOpenOrDisable && !!sucess && (React.createElement(S.Container, { sucess: !!sucess },
            React.createElement(S.WrapperMenssages, null,
                React.createElement(S.TopBarContainer, null,
                    React.createElement(S.TopBar, { src: Barra })),
                React.createElement(S.WrapperContent, null,
                    React.createElement(S.Icon, { src: !!sucess && SucessIcon }),
                    React.createElement(S.WrapperText, null,
                        React.createElement(S.Title, null, titleMenssage),
                        React.createElement(S.SubTitle, null, SubTitleMenssage))),
                children))),
        !!filters.isOpenOrDisable && !!error && (React.createElement(S.Container, { error: !!error, onClick: () => handleDisable() },
            React.createElement(S.WrapperMenssages, null,
                React.createElement(S.TopBarContainer, null,
                    React.createElement(S.TopBar, { src: Barra }),
                    React.createElement(S.IconClose, { src: IconClose })),
                React.createElement(S.WrapperContent, null,
                    React.createElement(S.Icon, { src: !!error && ErroIcon }),
                    React.createElement(S.WrapperText, null,
                        React.createElement(S.Title, null, titleMenssage),
                        React.createElement(S.SubTitle, null, SubTitleMenssage))),
                children)))));
};
export default Modal;
//# sourceMappingURL=index.js.map