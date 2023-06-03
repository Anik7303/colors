import { Dispatch, PropsWithChildren, createContext, useReducer } from 'react';
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

  return (
    <ColorContext.Provider value={{ hexColor, dispatch }}>
      {children}
    </ColorContext.Provider>
  );
};
