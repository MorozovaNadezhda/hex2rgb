import { useState } from 'react';
import Input from './components/Input';

function App() {
  const [hexCode, setHexCode] = useState('#');
  const [color, setColor] = useState('');
  const [isError, setIsError] = useState(false);

  function hexToRgb(hex) {
    if (!/^#([0-9A-F]{3}){1,2}$/i.test(hex)) {
      setIsError(true);
      return;
    }

    hex = hex.replace('#', '');

    var r, g, b;
    if (hex.length === 3) {
      r = parseInt(hex.charAt(0) + hex.charAt(0), 16);
      g = parseInt(hex.charAt(1) + hex.charAt(1), 16);
      b = parseInt(hex.charAt(2) + hex.charAt(2), 16);
    } else {
      r = parseInt(hex.substring(0, 2), 16);
      g = parseInt(hex.substring(2, 4), 16);
      b = parseInt(hex.substring(4, 6), 16);
    }
    setIsError(false);
    return `rgb(${r}, ${g}, ${b})`;
  }

  const toggleInput = (state) => {
    if (state.target.value.length >= 8) return;
    const value =
      state.target.value[0] === '#'
        ? state.target.value
        : '#' + state.target.value;
    setHexCode(value);
    setColor(hexToRgb(state.target.value));
  };

  return (
    <div
      className='App'
      style={{ backgroundColor: isError ? '#ea4b35' : hexCode }}
    >
      <Input value={hexCode} onInput={toggleInput} />
      <p className='app__color'>{isError ? 'Ошибка!' : color}</p>
    </div>
  );
}

export default App;
