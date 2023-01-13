import * as React from 'react';
import * as S from './styles';
import LogoSrc from '../../assets/icons/IconePD.svg';
import { useAppSelector } from '../../../../dataflow/hooks';
import { useHistory } from 'react-router-dom';
import { IMenuItems } from '../../interfaces/IMenuItems';
import { BannerMenu } from '../../../bannerPlanoDiretor/interfaces/IUserInfo';

interface IPicture {
  urlPicture?: string;
}

const Header = ({ urlPicture }: IPicture) => {
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

  const clickRenderRoutes = (item: string) => {
    if (item === '/OptionBoxConteudoModulo' || item === '/AdministracaoGeral') {
      history.push(item);
    } else {
      window.open(item, '_self');
    }
  };

  const renderButton = (data: IMenuItems, index: number) => {
    return (
      <li onClick={() => clickRenderRoutes(data.Id === BannerMenu.Administracao || data.Id === BannerMenu.AdministracaoGeral ? data.Id === BannerMenu.Administracao ? '/OptionBoxConteudoModulo' : '/AdministracaoGeral' : data.UrlMenu)}>
        {data.Id !== BannerMenu.Administracao && data.Id !== BannerMenu.AdministracaoGeral && data.Title}
        {data.Id === BannerMenu.AdministracaoGeral && data.Title}
        {data.Id === BannerMenu.Administracao && !!permissionUserAddAndEdit.AddItemListConteudoModulo && !!permissionUserAddAndEdit.EditItemListConteudoModulo && data.Title}
      </li>
    );
  };


  return (
    <>
      <S.Container>
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
          <S.UserPictureContainer>
            <S.UserPicture src={urlPicture && `${urlPicture}`} />
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
      </S.Container>
    </>
  );
};

export default Header;
