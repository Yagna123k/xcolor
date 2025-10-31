
export enum ColorBlindnessType {
  Normal = 'Normal Vision',
  Protanopia = 'Protanopia',
  Deuteranopia = 'Deuteranopia',
  Tritanopia = 'Tritanopia',
  Protanomaly = 'Protanomaly',
  Deuteranomaly = 'Deuteranomaly',
  Tritanomaly = 'Tritanomaly',
  Achromatopsia = 'Achromatopsia', // Formerly Monochromacy
}

export interface RgbColor {
  r: number;
  g: number;
  b: number;
}
