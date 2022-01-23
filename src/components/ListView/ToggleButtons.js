import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleButtons(props) {
  const { buttons, defaultSelection, onChangeSelection } = props
  console.log(props, buttons, defaultSelection)
  const [selection, setSelection] = React.useState(defaultSelection || 0)
  const handleSelection = (event, newSelection) => {
    setSelection(newSelection)
    if (onChangeSelection) {
      onChangeSelection(newSelection)
    }
  }

  return (
    <ToggleButtonGroup value={selection} exclusive onChange={handleSelection} aria-label="Toggle Buttons">
      {buttons.map((button, index) => <ToggleButton key={index} value={index} aria-label={index}>{button}</ToggleButton>)}
    </ToggleButtonGroup>
  );
}
