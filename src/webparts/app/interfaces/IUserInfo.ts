export interface ISiteCurrentUser {
  Id: number;
  LoginName: string;
  Permission: string;
  Title: string;
  Email: string;
}

export enum GroupsPermissionDev {
  Administrador = 14,
  Contribuidor = 19,
  Visualizadores = 32,
}

export enum GroupsPermission {
  AdminTecnico = 20,
  Contribuidor = 19,
}

export enum GroupsPermissionString {
  AdminTecnico = 'Adm Técnico',
  Contribuidor = 'Contribuidor',
  Visualizadores = 'NotAdmin',
}
