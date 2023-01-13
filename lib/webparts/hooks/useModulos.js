import { useAppSelector } from '../../dataflow/hooks';
export const hookModulos = () => {
    return useAppSelector((state) => state.state.listModulo);
};
//# sourceMappingURL=useModulos.js.map