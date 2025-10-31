import React, { useMemo } from 'react';
import { ColorBlindnessType } from '../types';
import { hexToRgb, simulateColor } from '../services/ColorSimulation';
import { ColorBox } from './ColorBox';

interface SimulationGridProps {
  hexColor: string;
}

const SIMULATION_TYPES: ColorBlindnessType[] = [
  ColorBlindnessType.Protanopia,
  ColorBlindnessType.Deuteranopia,
  ColorBlindnessType.Tritanopia,
  ColorBlindnessType.Protanomaly,
  ColorBlindnessType.Deuteranomaly,
  ColorBlindnessType.Tritanomaly,
  ColorBlindnessType.Achromatopsia,
];

export const SimulationGrid: React.FC<SimulationGridProps> = ({ hexColor }) => {
  const simulations = useMemo(() => {
    const rgb = hexToRgb(hexColor);
    if (!rgb) {
      return SIMULATION_TYPES.map(type => ({ type, color: 'rgb(0, 0, 0)' }));
    }

    return SIMULATION_TYPES.map(type => {
      const simulatedRgbString = simulateColor(rgb, type);
      return { type, color: simulatedRgbString };
    });
  }, [hexColor]);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {simulations.map(({ type, color }) => (
        <ColorBox key={type} label={type} rgbColor={color} />
      ))}
    </div>
  );
};
