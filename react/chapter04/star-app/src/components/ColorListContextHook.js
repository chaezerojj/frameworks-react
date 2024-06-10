import { useColors } from '../ColorProvider';
import ColorWithContext from './ColorWithContext';

export default function ColorListContextHook() {
  const { colors } = useColors();
  console.log(colors);
  if (!colors.length) return <div>No Colors Listed. (Add a Color)</div>
  return (
    <div className="color-list">
      {
        colors.map(color => <ColorWithContext key={color.id} {...color} />)
      }
    </div>
  )
}
