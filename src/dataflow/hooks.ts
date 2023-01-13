import { useDispatch, useSelector } from 'react-redux';
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

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
