import { useAppSelector } from '../../dataflow/hooks';

export const hookComplexos = () => {
  return useAppSelector((state) => state.state.listComplexo);
};
