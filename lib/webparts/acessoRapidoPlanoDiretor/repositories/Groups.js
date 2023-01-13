import Profile from '../assets/img/Profile.png';
export const mapGetItemsGroups = (items) => {
    const mappedGroups = [];
    items.forEach((item) => {
        mappedGroups.push({
            Id: item.Id,
            Title: item.Title,
            Email: item.Email,
            LoginName: item.UserPrincipalName,
            Url: item.Id === 8
                ? `${Profile}`
                : `https://globalvale.sharepoint.com/teams/PlanDirGestaoAtivos/_vti_bin/DelveApi.ashx/people/profileimage?size=L&userId=${item.Email}`,
        });
    });
    return mappedGroups.sort((x, y) => x.Id - y.Id);
};
//# sourceMappingURL=Groups.js.map