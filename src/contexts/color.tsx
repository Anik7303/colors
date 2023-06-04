import {
  Dispatch,
  PropsWithChildren,
  createContext,
  useMemo,
  useReducer,
} from 'react';
import { colorReducer, initialState } from '../color-reducer';

export type ColorContextState = {
  dispatch: Dispatch<ColorActions>;
  hexColor: string;
};

export const ColorContext = createContext<ColorContextState>({
  hexColor: '#BADA55',
} as ColorContextState);

export const ColorProvider = ({ children }: PropsWithChildren) => {
  const [{ hexColor }, dispatch] = useReducer(colorReducer, initialState);

  const value = useMemo(() => ({ hexColor, dispatch }), [hexColor, dispatch]);

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};
