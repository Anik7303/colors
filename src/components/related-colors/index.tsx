import { Dispatch } from 'react';
import {
  getComplementColors,
  getTriadColors,
} from '../../lib/get-related-colors';
import RelatedColorPalette from './related-color-palette';

type RelatedColorsProps = {
  dispatch: Dispatch<ColorActions>;
  hexColor: string;
};

const RelatedColors = ({ dispatch, hexColor }: RelatedColorsProps) => {
  const triadColors = getTriadColors(hexColor);
  const complementColors = getComplementColors(hexColor);

  return (
    <>
      <RelatedColorPalette
        dispatch={dispatch}
        title="Triad Colors"
        hexColors={triadColors}
      />
      <RelatedColorPalette
        dispatch={dispatch}
        title="Complimentary Colors"
        hexColors={complementColors}
      />
    </>
  );
};

export default RelatedColors;
