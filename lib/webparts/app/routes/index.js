import * as React from 'react';
import { BrowserRouter, Switch, Route, HashRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Sobre from '../pages/Sobre';
import { ModuloClassService } from '../services/ModuloClassServices';
import { UserProfileClassService } from '../services/UserProfileClassServices';
import { useAppDispatch, useAppSelector } from '../../../dataflow/hooks';
import { CorredorClassService } from '../services/CorredorClassServices';
import { ComplexoClassService } from '../services/ComplexoClassService';
import { FaseClassService } from '../services/FaseClassServices';
import { GroupsPermissionString } from '../interfaces/IUserInfo';
import Modulo from '../pages/Modulo';
import { isItemAddValuePermission } from '../../../dataflow/reducers/StateIsPermission';
import { InformativosClassService } from '../services/InformativosClassService';
import { CicloClassService } from '../services/CicloClassService';
import Header from '../components/Header';
import ContextoTema from '../pages/ContextoTema';
import CriticalAnalysis from '../pages/CriticalAnalysis';
import Admin from '../pages/Admin';
import Form from '../pages/Admin/components/Form';
import { TiposConteudoClassService } from '../services/TiposConteudoClassService';
import { ItemsMenuService } from '../services/ItemsMenuService';
import ResponsibleTeam from '../pages/ResponsibleTeam';
import OptionBoxConteudoModulo from '../pages/Admin/components/OptionBoxConteudoModulo';
const RoutesApp = (props) => {
    const moduloService = new ModuloClassService();
    const corredorService = new CorredorClassService();
    const complexoService = new ComplexoClassService();
    const cicloService = new CicloClassService();
    const currentUser = new UserProfileClassService();
    const faseService = new FaseClassService();
    const itemsMenu = new ItemsMenuService();
    const informativosService = new InformativosClassService();
    const tiposConteudoService = new TiposConteudoClassService();
    const currentUserStateGlobal = useAppSelector((state) => state.stateObject.currentUser);
    const dispatch = useAppDispatch();
    const getUserPicture = new UserProfileClassService();
    const [pictureProfile, setPictureProfile] = React.useState();
    const [isPictureProfile, setIsPictureProfile] = React.useState(false);
    React.useEffect(() => {
        if (!currentUserStateGlobal) {
            console.log('Apenas um console');
            currentUser.getAllGroupsInfo();
            moduloService.getAllModulos();
            corredorService.getAllCorredor();
            complexoService.getAllComplexos();
            faseService.getAllFase();
            informativosService.getAllInfo();
            informativosService.getAllInfoLabel();
            informativosService.getAllInfoCentral();
            cicloService.getAllCiclos();
            tiposConteudoService.getAllTipos();
            itemsMenu.getAllMenu();
        }
    }, []);
    React.useEffect(() => {
        console.log(currentUserStateGlobal === null || currentUserStateGlobal === void 0 ? void 0 : currentUserStateGlobal.Permission);
        const isCurrentUserAdmin = !!currentUserStateGlobal && (currentUserStateGlobal === null || currentUserStateGlobal === void 0 ? void 0 : currentUserStateGlobal.Permission) === GroupsPermissionString.AdminTecnico;
        dispatch(isItemAddValuePermission(isCurrentUserAdmin));
    }, [currentUserStateGlobal]);
    React.useEffect(() => {
        getUserPicture
            .getCurrentUserPictureProfile()
            .then((res) => {
            setPictureProfile(res);
            setIsPictureProfile(true);
        })
            .catch((err) => {
            console.log(err);
            setIsPictureProfile(true);
        });
    }, []);
    return (React.createElement(BrowserRouter, null,
        React.createElement(HashRouter, null,
            React.createElement(Switch, null, !!isPictureProfile && (React.createElement(React.Fragment, null,
                React.createElement(Route, { path: "/", exact: true },
                    React.createElement(Header, { urlPicture: pictureProfile }),
                    React.createElement(Home, Object.assign({}, props))),
                React.createElement(Route, { path: "/sobre" },
                    React.createElement(Header, { urlPicture: pictureProfile }),
                    React.createElement(Sobre, null)),
                React.createElement(Route, { path: "/ContextoTema/:slug" },
                    React.createElement(Header, { urlPicture: pictureProfile }),
                    React.createElement(ContextoTema, Object.assign({}, props))),
                React.createElement(Route, { path: "/AnaliseCritica/:slug" },
                    React.createElement(Header, { urlPicture: pictureProfile }),
                    React.createElement(CriticalAnalysis, Object.assign({}, props))),
                React.createElement(Route, { path: "/Conteudo/:slug" },
                    React.createElement(Header, { urlPicture: pictureProfile }),
                    React.createElement(Modulo, Object.assign({}, props))),
                React.createElement(Route, { path: "/EquipeResponsavel/" },
                    React.createElement(Header, { urlPicture: pictureProfile }),
                    React.createElement(ResponsibleTeam, Object.assign({}, props))),
                React.createElement(Route, { path: "/Administracao/" },
                    React.createElement(Header, { urlPicture: pictureProfile }),
                    React.createElement(Admin, null)),
                React.createElement(Route, { path: "/AdministracaoGeral/" },
                    React.createElement(Header, { urlPicture: pictureProfile }),
                    React.createElement(Admin, null)),
                React.createElement(Route, { path: "/FormConteudoModulo/:slug" },
                    React.createElement(Header, { urlPicture: pictureProfile }),
                    React.createElement(Form, { props: props })),
                React.createElement(Route, { path: "/OptionBoxConteudoModulo/" },
                    React.createElement(Header, { urlPicture: pictureProfile }),
                    React.createElement(OptionBoxConteudoModulo, Object.assign({}, props)))))))));
};
export default RoutesApp;
//# sourceMappingURL=index.js.map