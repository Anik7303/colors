import { Dispatch, PropsWithChildren, useMemo, useReducer } from 'react';
import { colorReducer, initialState } from '../color-reducer';
import { createContext } from './create-context';

export type ColorContextState = {
  dispatch: Dispatch<ColorActions>;
  hexColor: string;
};

const [useColorContext, ContextProvider] = createContext<ColorContextState>();

export const useHexColor = () => {
  const { hexColor } = useColorContext();
  return hexColor;
};

export const useDispatch = () => {
  const { dispatch } = useColorContext();
  return dispatch;
};

export const ColorProvider = ({ children }: PropsWithChildren) => {
  const [{ hexColor }, dispatch] = useReducer(colorReducer, initialState);

  const value = useMemo(() => ({ hexColor, dispatch }), [hexColor, dispatch]);

  return <ContextProvider value={value}>{children}</ContextProvider>;
};
