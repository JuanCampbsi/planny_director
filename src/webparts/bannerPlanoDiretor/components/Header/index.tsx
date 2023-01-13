import * as React from 'react';
import * as S from './styles';
import { useAppDispatch, useAppSelector } from '../../../../dataflow/hooks';
import { UserProfileClassService } from '../../services/UserProfileClassServices';
import Banner from '../../assets/img/Banner.png';
import LogoSrc from '../../assets/icons/IconePD.svg';
import { ItemsMenuService } from '../../services/ItemsMenuService';
import { IMenuItems } from '../../interfaces/IMenuItems';
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

  const clickRenderRoutes = (item: string) => {
    window.open(item, '_self');
  };

  const renderButton = (data: IMenuItems, index: number) => {
    return (
      <li onClick={() => clickRenderRoutes(data.UrlMenu)}>
        {data.Id !== BannerMenu.Administracao && data.Id !== BannerMenu.AdministracaoGeral && data.Title}
        {data.Id === BannerMenu.AdministracaoGeral && data.Title}
        {data.Id === BannerMenu.Administracao && !!permissionUserAddAndEdit.AddItemListConteudoModulo && !!permissionUserAddAndEdit.EditItemListConteudoModulo && data.Title}
      </li>
    );
  };


  React.useEffect(() => {
    console.log(currentUserStateGlobal?.Permission);
    const isCurrentUserAdmin = !!currentUserStateGlobal && currentUserStateGlobal?.Permission === GroupsPermissionString.AdminTecnico;
    dispatch(isItemAddValuePermission(isCurrentUserAdmin));
  }, [currentUserStateGlobal]);

  React.useEffect(() => {
    itemsMenu.getAllMenu();
    currentUser.getAllGroupsInfo();
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
    <>
      {!!isPictureProfile && (
        <S.Container>
          <S.ContainerWrapper>
            <S.SectionMenu>
              <S.Iconer onClick={() => reload()} src={LogoSrc} />
              <S.TitleProject onClick={() => reload()}>Plano Diretor</S.TitleProject>
              <S.MenuList>
                <ul>
                  {menuItems.length > 0 && menuItems.map((item, index) => renderButton(item, index))}
                  {!permission && menuItemsColaborador.length > 0 && menuItemsColaborador.map((item, index) => renderButton(item, index))}
                  {!!permission && menuItemsAdmin.length > 0 && menuItemsAdmin.map((item, index) => renderButton(item, index))}
                </ul>
              </S.MenuList>
            </S.SectionMenu>
            <S.UserSectionWrapper>
              <div style={{ width: '100%', position: 'absolute', zIndex: '1', left: '0', right: '0', top: '0' }}>
                <S.BannerHeader src={Banner} />
              </div>
              <S.UserPictureContainer>
                <S.UserPicture src={pictureProfile && `${pictureProfile}`} />
              </S.UserPictureContainer>
              <S.NameUserWrapper>
                <S.TitleNameUser isActive={false} style={{ lineHeight: '23px', fontWeight: '600' }}>
                  Como é bom ter você de volta!
                </S.TitleNameUser>
                <S.TitleNameUser isActive={true} style={{ fontWeight: 'bold' }}>
                  {isCurrentUser && isCurrentUser.LoginName}
                </S.TitleNameUser>
              </S.NameUserWrapper>
            </S.UserSectionWrapper>
          </S.ContainerWrapper>
        </S.Container>
      )}
    </>
  );
};

export default Header;
