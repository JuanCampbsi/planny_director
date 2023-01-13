import * as React from 'react';
import { BrowserRouter, Switch, Route, HashRouter } from 'react-router-dom';

import Home from '../pages/Home';
import Sobre from '../pages/Sobre';
import { IAppProps } from '../interfaces/IAppProps';
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
import Desenvolvimento from '../pages/Desenvolvimento';
import ContextoTema from '../pages/ContextoTema';
import CriticalAnalysis from '../pages/CriticalAnalysis';
import Admin from '../pages/Admin';
import Form from '../pages/Admin/components/Form';
import { TiposConteudoClassService } from '../services/TiposConteudoClassService';
import { ItemsMenuService } from '../services/ItemsMenuService';
import ResponsibleTeam from '../pages/ResponsibleTeam';
import OptionBoxConteudoModulo from '../pages/Admin/components/OptionBoxConteudoModulo';

const RoutesApp = (props: IAppProps) => {
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
    console.log(currentUserStateGlobal?.Permission);
    const isCurrentUserAdmin = !!currentUserStateGlobal && currentUserStateGlobal?.Permission === GroupsPermissionString.AdminTecnico;
    dispatch(isItemAddValuePermission(isCurrentUserAdmin));
  }, [currentUserStateGlobal]);

  React.useEffect(() => {
    getUserPicture
      .getCurrentUserPictureProfile()
      .then((res: any) => {
        setPictureProfile(res);
        setIsPictureProfile(true);
      })
      .catch((err) => {
        console.log(err);
        setIsPictureProfile(true);
      });
  }, []);

  return (
    <BrowserRouter>
      <HashRouter>
        <Switch>
          {!!isPictureProfile && (
            <>
              <Route path="/" exact>
                <Header urlPicture={pictureProfile} />
                <Home {...props} />
              </Route>
              <Route path="/sobre">
                <Header urlPicture={pictureProfile} />
                <Sobre />
              </Route>
              <Route path="/ContextoTema/:slug">
                <Header urlPicture={pictureProfile} />
                <ContextoTema {...props} />
              </Route>
              <Route path="/AnaliseCritica/:slug">
                <Header urlPicture={pictureProfile} />
                <CriticalAnalysis {...props} />
              </Route>
              <Route path="/Conteudo/:slug">
                <Header urlPicture={pictureProfile} />
                <Modulo {...props} />
              </Route>
              <Route path="/EquipeResponsavel/">
                <Header urlPicture={pictureProfile} />
                <ResponsibleTeam {...props} />
              </Route>
              <Route path="/Administracao/">
                <Header urlPicture={pictureProfile} />
                <Admin />
              </Route>
              <Route path="/AdministracaoGeral/">
                <Header urlPicture={pictureProfile} />
                <Admin />
              </Route>
              <Route path="/FormConteudoModulo/:slug">
                <Header urlPicture={pictureProfile} />
                <Form props={props} />
              </Route>
              <Route path="/OptionBoxConteudoModulo/">
                <Header urlPicture={pictureProfile} />
                <OptionBoxConteudoModulo {...props} />
              </Route>
            </>
          )}
        </Switch>
      </HashRouter>
    </BrowserRouter>
  );
};

export default RoutesApp;
