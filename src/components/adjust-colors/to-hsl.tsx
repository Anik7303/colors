import { hex } from 'color-convert';
import LabeledInput from '../shared/labeled-input';
import { useDispatch } from '../../contexts/color';

type HexToHSLProps = {
  hexColor: string;
};

const HexToHSL = ({ hexColor }: HexToHSLProps) => {
  const dispatch = useDispatch();
  const color = hex.hsl(hexColor);
  const [h, s, l] = color;

  const updateHSL = ({ hue = h, saturation = s, lightness = l }): void => {
    dispatch({
      type: 'update-hsl-color',
      payload: { hsl: [hue, saturation, lightness] },
    });
  };

  return (
    <section className="grid w-full grid-flow-col gap-2">
      <LabeledInput
        label="H"
        type="number"
        value={h}
        onChange={(e) => updateHSL({ hue: e.target.valueAsNumber })}
      />
      <LabeledInput
        label="S"
        type="number"
        value={s}
        onChange={(e) => updateHSL({ saturation: e.target.valueAsNumber })}
      />
      <LabeledInput
        label="L"
        type="number"
        value={l}
        onChange={(e) => updateHSL({ lightness: e.target.valueAsNumber })}
      />
    </section>
  );
};

export default HexToHSL;
