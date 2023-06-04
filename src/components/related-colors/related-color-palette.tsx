import ColorChangeSwatch from '../shared/color-change-swatch';
import { useDispatch } from '../../contexts/color';

type RelatedColorPaletteProps = {
  title: string;
  hexColors: string[];
};

const RelatedColorPalette = ({
  title,
  hexColors,
}: RelatedColorPaletteProps) => {
  const dispatch = useDispatch();

  return (
    <section>
      <h3 className="mb-4">{title}</h3>
      <div className="grid grid-cols-3 gap-2">
        {hexColors.map((hexColor) => {
          return (
            <ColorChangeSwatch
              key={hexColor}
              hexColor={hexColor}
              className="h-full w-full"
              onClick={() =>
                dispatch({ type: 'update-hex-color', payload: { hexColor } })
              }
            />
          );
        })}
      </div>
    </section>
  );
};

export default RelatedColorPalette;
