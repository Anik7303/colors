import { rgb, hsl, hsv, cmyk } from 'color-convert';

type ColorState = {
  hexColor: string;
};

export const initialState: ColorState = {
  hexColor: '#BADA55',
};

export const colorReducer = (
  state: ColorState = initialState,
  action: ColorActions,
) => {
  switch (action.type) {
    case 'update-hex-color':
      const { hexColor } = action.payload;
      return { ...state, hexColor };
    case 'update-rgb-color':
      return { ...state, hexColor: '#' + rgb.hex(action.payload.rgb) };
    case 'update-hsl-color':
      return { ...state, hexColor: '#' + hsl.hex(action.payload.hsl) };
    case 'update-hsv-color':
      return { ...state, hexColor: '#' + hsv.hex(action.payload.hsv) };
    case 'update-cmyk-color':
      return { ...state, hexColor: '#' + cmyk.hex(action.payload.cmyk) };
    default:
      return state;
  }
};
