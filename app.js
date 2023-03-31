const hexColAvailableChars = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

const pickRandomHexColor = () => {
  let color = '#';
  for (let x = 0; x < 6; x++) {
    color += hexColAvailableChars[Math.floor(Math.random() * hexColAvailableChars.length)];
  }
  return color;
}

const hexToRgb = hex => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  const rgb = {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  }
  return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
}

export { pickRandomHexColor, hexToRgb };