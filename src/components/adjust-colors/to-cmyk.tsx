import { hex } from 'color-convert';
import LabeledInput from '../shared/labeled-input';
import { useDispatch } from '../../contexts/color';

type HexToCMYKProps = {
  hexColor: string;
};

const HexToCMYK = ({ hexColor }: HexToCMYKProps) => {
  const dispatch = useDispatch();
  const color = hex.cmyk(hexColor);
  const [c, m, y, k] = color;

  const updateCMYK = ({ cyan = c, magenta = m, yellow = y, key = k }): void => {
    dispatch({
      type: 'update-cmyk-color',
      payload: { cmyk: [cyan, magenta, yellow, key] },
    });
  };

  return (
    <section className="grid w-full grid-flow-col gap-2">
      <LabeledInput
        label="C"
        type="number"
        value={c}
        onChange={(e) => updateCMYK({ cyan: e.target.valueAsNumber })}
      />
      <LabeledInput
        label="M"
        type="number"
        value={m}
        onChange={(e) => updateCMYK({ magenta: e.target.valueAsNumber })}
      />
      <LabeledInput
        label="Y"
        type="number"
        value={y}
        onChange={(e) => updateCMYK({ yellow: e.target.valueAsNumber })}
      />
      <LabeledInput
        label="K"
        type="number"
        value={k}
        onChange={(e) => updateCMYK({ key: e.target.valueAsNumber })}
      />
    </section>
  );
};

export default HexToCMYK;
