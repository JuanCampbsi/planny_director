import { hookModulos } from './useModulos';
import { hookComplexos } from './useComplexo';

const hooks = {
  useModulos: hookModulos,
  useComplexos: hookComplexos,
};

export const { useModulos, useComplexos } = hooks;
