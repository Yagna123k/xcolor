
import { ColorBlindnessType, RgbColor } from '../types';

/**
 * Converts a hex color string to an RGB object.
 */
export const hexToRgb = (hex: string): RgbColor | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

/**
 * Converts an RGB color string "rgb(r, g, b)" to a hex string.
 */
export const rgbStringToHex = (rgbString: string): string => {
  const rgbMatch = rgbString.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  if (!rgbMatch) return '#000000';

  const toHex = (c: number): string => {
    const hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  const r = parseInt(rgbMatch[1], 10);
  const g = parseInt(rgbMatch[2], 10);
  const b = parseInt(rgbMatch[3], 10);

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

/**
 * Clamps a number between 0 and 255 and rounds it.
 */
const clamp = (value: number) => Math.round(Math.max(0, Math.min(255, value)));


/**
 * Simulates color blindness for a given RGB color.
 * The formulas are based on the user's original JavaScript logic.
 */
export const simulateColor = (
  { r, g, b }: RgbColor,
  type: ColorBlindnessType
): string => {
  let simR: number, simG: number, simB: number;

  switch (type) {
    case ColorBlindnessType.Protanopia:
      simR = r * 0.45;
      simG = g * 0.73;
      simB = b;
      break;
    case ColorBlindnessType.Deuteranopia:
      simR = r * 0.45;
      simG = g * 0.73;
      simB = b * 0.9;
      break;
    case ColorBlindnessType.Tritanopia:
      simR = r * 1.55;
      simG = g * 1.55;
      simB = b * 0.55;
      break;
    case ColorBlindnessType.Protanomaly:
      simR = r * 0.77;
      simG = g * 0.77;
      simB = b;
      break;
    case ColorBlindnessType.Deuteranomaly:
      // Note: Same as Protanomaly in original logic
      simR = r * 0.77;
      simG = g * 0.77;
      simB = b;
      break;
    case ColorBlindnessType.Tritanomaly:
      simR = r * 1.23;
      simG = g * 1.23;
      simB = b * 0.77;
      break;
    case ColorBlindnessType.Achromatopsia:
      // A more accurate simulation than a fixed gray
      const gray = r * 0.299 + g * 0.587 + b * 0.114;
      simR = gray;
      simG = gray;
      simB = gray;
      break;
    case ColorBlindnessType.Normal:
    default:
      simR = r;
      simG = g;
      simB = b;
      break;
  }

  return `rgb(${clamp(simR)}, ${clamp(simG)}, ${clamp(simB)})`;
};

/**
 * Determines if a color is dark based on its RGB string.
 * Used to decide if text on this color should be light or dark.
 */
export const isColorDark = (rgbString: string): boolean => {
    const rgbMatch = rgbString.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    if (!rgbMatch) return true;
    const r = parseInt(rgbMatch[1], 10);
    const g = parseInt(rgbMatch[2], 10);
    const b = parseInt(rgbMatch[3], 10);
    // Formula for luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance < 0.5;
};
