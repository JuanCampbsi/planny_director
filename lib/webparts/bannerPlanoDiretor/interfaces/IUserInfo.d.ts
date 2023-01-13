export interface ISiteCurrentUser {
    Id: number;
    LoginName: string;
    Permission: string;
    Title: string;
    Email: string;
}
export declare enum GroupsPermissionDev {
    Administrador = 14,
    Contribuidor = 19,
    Visualizadores = 32
}
export declare enum GroupsPermission {
    AdminTecnico = 20,
    Contribuidor = 19
}
export declare enum GroupsPermissionString {
    AdminTecnico = "Adm T\u00E9cnico",
    Contribuidor = "Contribuidor",
    Visualizadores = "Visualizadores"
}
export declare enum BannerMenu {
    Administracao = 5,
    AdministracaoGeral = 6
}
//# sourceMappingURL=IUserInfo.d.ts.map