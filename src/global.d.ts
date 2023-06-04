type UpdateHexColorAction = {
  type: 'update-hex-color';
  payload: {
    hexColor: string;
  };
};

type UpdateRGBColorAction = {
  type: 'update-rgb-color';
  payload: {
    rgb: [number, number, number];
  };
};

type UpdateHSLColorAction = {
  type: 'update-hsl-color';
  payload: {
    hsl: [number, number, number];
  };
};

type UpdateHSVColorAction = {
  type: 'update-hsv-color';
  payload: {
    hsv: [number, number, number];
  };
};

type UpdateCMYKColorAction = {
  type: 'update-cmyk-color';
  payload: {
    cmyk: [number, number, number, number];
  };
};

type ColorActions = UpdateHexColorAction | UpdateRGBColorAction | UpdateHSLColorAction | UpdateHSVColorAction | UpdateCMYKColorAction;
