import * as React from 'react';
import * as S from './styles';
import LogoSrc from '../../assets/icons/IconePD.svg';
import { useAppSelector } from '../../../../dataflow/hooks';
import { useHistory } from 'react-router-dom';
import { BannerMenu } from '../../../bannerPlanoDiretor/interfaces/IUserInfo';
const Header = ({ urlPicture }) => {
    const isCurrentUser = useAppSelector((state) => state.stateObject.currentUser);
    const menuItems = useAppSelector((state) => state.state.listMenuItem).filter(item => item.Id < BannerMenu.Administracao);
    const menuItemsColaborador = useAppSelector((state) => state.state.listMenuItem).filter(item => item.Id === BannerMenu.Administracao);
    const menuItemsAdmin = useAppSelector((state) => state.state.listMenuItem).filter(item => item.Id === BannerMenu.AdministracaoGeral);
    const permission = useAppSelector((state) => state.stateIsPermission.isValuePermission);
    const permissionUserAddAndEdit = useAppSelector((state) => state.stateObject);
    const history = useHistory();
    const reload = () => {
        history.push('/');
    };
    const clickRenderRoutes = (item) => {
        if (item === '/OptionBoxConteudoModulo' || item === '/AdministracaoGeral') {
            history.push(item);
        }
        else {
            window.open(item, '_self');
        }
    };
    const renderButton = (data, index) => {
        return (React.createElement("li", { onClick: () => clickRenderRoutes(data.Id === BannerMenu.Administracao || data.Id === BannerMenu.AdministracaoGeral ? data.Id === BannerMenu.Administracao ? '/OptionBoxConteudoModulo' : '/AdministracaoGeral' : data.UrlMenu) },
            data.Id !== BannerMenu.Administracao && data.Id !== BannerMenu.AdministracaoGeral && data.Title,
            data.Id === BannerMenu.AdministracaoGeral && data.Title,
            data.Id === BannerMenu.Administracao && !!permissionUserAddAndEdit.AddItemListConteudoModulo && !!permissionUserAddAndEdit.EditItemListConteudoModulo && data.Title));
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(S.Container, null,
            React.createElement(S.SectionMenu, null,
                React.createElement(S.Iconer, { onClick: () => reload(), src: LogoSrc }),
                React.createElement(S.TitleProject, { onClick: () => reload() }, "Plano Diretor"),
                React.createElement(S.MenuList, null,
                    React.createElement("ul", null,
                        menuItems.length > 0 && menuItems.map((item, index) => renderButton(item, index)),
                        !permission && menuItemsColaborador.length > 0 && menuItemsColaborador.map((item, index) => renderButton(item, index)),
                        !!permission && menuItemsAdmin.length > 0 && menuItemsAdmin.map((item, index) => renderButton(item, index))))),
            React.createElement(S.UserSectionWrapper, null,
                React.createElement(S.UserPictureContainer, null,
                    React.createElement(S.UserPicture, { src: urlPicture && `${urlPicture}` })),
                React.createElement(S.NameUserWrapper, null,
                    React.createElement(S.TitleNameUser, { isActive: false, style: { lineHeight: '23px', fontWeight: '600' } }, "Como \u00E9 bom ter voc\u00EA de volta!"),
                    React.createElement(S.TitleNameUser, { isActive: true, style: { fontWeight: 'bold' } }, isCurrentUser && isCurrentUser.LoginName))))));
};
export default Header;
//# sourceMappingURL=index.js.map