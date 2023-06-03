import { rgb } from 'color-convert';

type ColorState = {
  hexColor: string;
};

export const initialState: ColorState = {
  hexColor: '#BADA55',
};

export const colorReducer = (
  state: ColorState = initialState,
  action: AdjustColorActions,
) => {
  switch (action.type) {
    case 'update-hex-color':
      const { hexColor } = action.payload;
      return { ...state, hexColor };
    case 'update-rgb-color':
      return { ...state, hexColor: rgb.hex(action.payload.rgb) };
    default:
      return state;
  }
};
