import { GroupsPermission, GroupsPermissionString } from '../interfaces/IUserInfo';
export const mapGetItemsUserGroups = (groups, user, profile) => {
    let userFilterFormated;
    const itemsFilterGroups = groups.filter((item) => item.Id == GroupsPermission.AdminTecnico);
    if (itemsFilterGroups.length > 0) {
        itemsFilterGroups.forEach((item) => {
            userFilterFormated = {
                Id: user.Id,
                LoginName: user.Title,
                Email: user.UserPrincipalName,
                Permission: item.Title,
                Title: user.Title,
            };
        });
    }
    else {
        Object.keys(user).forEach((item) => {
            userFilterFormated = {
                Id: user.Id,
                LoginName: user.Title,
                Email: user.UserPrincipalName,
                Permission: GroupsPermissionString.Visualizadores,
                Title: user.Title,
            };
        });
    }
    return userFilterFormated;
};
//# sourceMappingURL=User.js.map