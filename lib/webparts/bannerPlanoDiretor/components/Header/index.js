import * as React from 'react';
import * as S from './styles';
import { useAppDispatch, useAppSelector } from '../../../../dataflow/hooks';
import { UserProfileClassService } from '../../services/UserProfileClassServices';
import Banner from '../../assets/img/Banner.png';
import LogoSrc from '../../assets/icons/IconePD.svg';
import { ItemsMenuService } from '../../services/ItemsMenuService';
import { BannerMenu, GroupsPermissionString } from '../../interfaces/IUserInfo';
import { isItemAddValuePermission } from '../../../../dataflow/reducers/StateIsPermission';
const Header = () => {
    const currentUserStateGlobal = useAppSelector((state) => state.stateObject.currentUser);
    const isCurrentUser = useAppSelector((state) => state.stateObject.currentUser);
    const getUserPicture = new UserProfileClassService();
    const currentUser = new UserProfileClassService();
    const itemsMenu = new ItemsMenuService();
    const menuItems = useAppSelector((state) => state.state.listMenuItem).filter(item => item.Id < BannerMenu.Administracao);
    const menuItemsColaborador = useAppSelector((state) => state.state.listMenuItem).filter(item => item.Id === BannerMenu.Administracao);
    const menuItemsAdmin = useAppSelector((state) => state.state.listMenuItem).filter(item => item.Id === BannerMenu.AdministracaoGeral);
    const [pictureProfile, setPictureProfile] = React.useState();
    const [isPictureProfile, setIsPictureProfile] = React.useState(false);
    const permission = useAppSelector((state) => state.stateIsPermission.isValuePermission);
    const permissionUserAddAndEdit = useAppSelector((state) => state.stateObject);
    const dispatch = useAppDispatch();
    const reload = () => {
        window.location.href = `https://globalvale.sharepoint.com/teams/PlanDirGestaoAtivos`;
    };
    const clickRenderRoutes = (item) => {
        window.open(item, '_self');
    };
    const renderButton = (data, index) => {
        return (React.createElement("li", { onClick: () => clickRenderRoutes(data.UrlMenu) },
            data.Id !== BannerMenu.Administracao && data.Id !== BannerMenu.AdministracaoGeral && data.Title,
            data.Id === BannerMenu.AdministracaoGeral && data.Title,
            data.Id === BannerMenu.Administracao && !!permissionUserAddAndEdit.AddItemListConteudoModulo && !!permissionUserAddAndEdit.EditItemListConteudoModulo && data.Title));
    };
    React.useEffect(() => {
        console.log(currentUserStateGlobal === null || currentUserStateGlobal === void 0 ? void 0 : currentUserStateGlobal.Permission);
        const isCurrentUserAdmin = !!currentUserStateGlobal && (currentUserStateGlobal === null || currentUserStateGlobal === void 0 ? void 0 : currentUserStateGlobal.Permission) === GroupsPermissionString.AdminTecnico;
        dispatch(isItemAddValuePermission(isCurrentUserAdmin));
    }, [currentUserStateGlobal]);
    React.useEffect(() => {
        itemsMenu.getAllMenu();
        currentUser.getAllGroupsInfo();
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
    return (React.createElement(React.Fragment, null, !!isPictureProfile && (React.createElement(S.Container, null,
        React.createElement(S.ContainerWrapper, null,
            React.createElement(S.SectionMenu, null,
                React.createElement(S.Iconer, { onClick: () => reload(), src: LogoSrc }),
                React.createElement(S.TitleProject, { onClick: () => reload() }, "Plano Diretor"),
                React.createElement(S.MenuList, null,
                    React.createElement("ul", null,
                        menuItems.length > 0 && menuItems.map((item, index) => renderButton(item, index)),
                        !permission && menuItemsColaborador.length > 0 && menuItemsColaborador.map((item, index) => renderButton(item, index)),
                        !!permission && menuItemsAdmin.length > 0 && menuItemsAdmin.map((item, index) => renderButton(item, index))))),
            React.createElement(S.UserSectionWrapper, null,
                React.createElement("div", { style: { width: '100%', position: 'absolute', zIndex: '1', left: '0', right: '0', top: '0' } },
                    React.createElement(S.BannerHeader, { src: Banner })),
                React.createElement(S.UserPictureContainer, null,
                    React.createElement(S.UserPicture, { src: pictureProfile && `${pictureProfile}` })),
                React.createElement(S.NameUserWrapper, null,
                    React.createElement(S.TitleNameUser, { isActive: false, style: { lineHeight: '23px', fontWeight: '600' } }, "Como \u00E9 bom ter voc\u00EA de volta!"),
                    React.createElement(S.TitleNameUser, { isActive: true, style: { fontWeight: 'bold' } }, isCurrentUser && isCurrentUser.LoginName))))))));
};
export default Header;
//# sourceMappingURL=index.js.map