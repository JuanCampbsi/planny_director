import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from './store';
export interface IAction<T = any> {
    type: T;
}
export interface IAnyAction extends IAction {
    [extraProps: string]: any;
}
export interface IDispatch<A extends IAction = IAnyAction> {
    <T extends A>(action: T): T;
}
export declare const useAppDispatch: () => AppDispatch;
export declare const useAppSelector: TypedUseSelectorHook<RootState>;
//# sourceMappingURL=hooks.d.ts.map