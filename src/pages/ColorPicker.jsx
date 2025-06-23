import React from 'react';
import { SketchPicker } from 'react-color';
import { useTheme } from '../context/ThemeContext';

const ColorPicker = () => {
  const { primaryColor, setPrimaryColor } = useTheme();

  const handleChange = (color) => {
    setPrimaryColor(color.hex);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Select Theme Color</h2>
      <SketchPicker color={primaryColor} onChange={handleChange} />
      <div
        style={{
          marginTop: '20px',
          padding: '10px',
          backgroundColor: primaryColor,
          color: '#fff',
          borderRadius: '6px',
        }}
      >
      </div>
    </div>
  );
};

export default ColorPicker;
