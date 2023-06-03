import { useContext } from 'react';
import { hex } from 'color-convert';
import LabeledInput from '../shared/labeled-input';
import { ColorContext } from '../../contexts/color';

type HexToHSVProps = {
  hexColor: string;
};

const HexToHSV = ({ hexColor }: HexToHSVProps) => {
  const { dispatch } = useContext(ColorContext);
  const color = hex.hsv(hexColor);
  const [h, s, v] = color;

  const updateHSV = ({ hue = h, saturation = s, value = v }): void => {
    dispatch({
      type: 'update-hsv-color',
      payload: { hsv: [hue, saturation, value] },
    });
  };

  return (
    <section className="grid w-full grid-flow-col gap-2">
      <LabeledInput
        label="H"
        type="number"
        value={h}
        onChange={(e) =>
          updateHSV({ hue: e.target.valueAsNumber, saturation: s, value: v })
        }
      />
      <LabeledInput
        label="S"
        type="number"
        value={s}
        onChange={(e) =>
          updateHSV({ hue: h, saturation: e.target.valueAsNumber, value: v })
        }
      />
      <LabeledInput
        label="V"
        type="number"
        value={v}
        onChange={(e) =>
          updateHSV({ hue: h, saturation: s, value: e.target.valueAsNumber })
        }
      />
    </section>
  );
};

export default HexToHSV;
