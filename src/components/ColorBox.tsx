import React, { useMemo } from 'react';
import { rgbStringToHex, isColorDark } from '../services/ColorSimulation';

interface ColorBoxProps {
  label: string;
  rgbColor: string;
  isLarge?: boolean;
}

export const ColorBox: React.FC<ColorBoxProps> = ({ label, rgbColor, isLarge = false }) => {
  const hex = useMemo(() => rgbStringToHex(rgbColor), [rgbColor]);
  const darkBg = useMemo(() => isColorDark(rgbColor), [rgbColor]);

  const textColorClass = darkBg ? 'text-white' : 'text-zinc-900';
  const containerClasses = isLarge ? 'min-h-[11rem] rounded-xl' : 'h-36 sm:h-40 rounded-lg';

  return (
    <div
      className={`flex flex-col justify-between p-4 ${containerClasses} overflow-hidden shadow-md border border-black/5 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]`}
      style={{ backgroundColor: rgbColor }}
    >
      <div>
        <p className={`font-semibold ${isLarge ? 'text-xl' : 'text-base'} ${textColorClass}`}>{label}</p>
        <p className={`text-xs mt-1 ${textColorClass} opacity-70`}>
          {label === 'Normal Vision' ? 'Original Color' : 'Simulated'}
        </p>
      </div>
      <p className={`font-mono text-right ${isLarge ? 'text-base' : 'text-sm'} ${textColorClass}`}>
        {hex.toUpperCase()}
      </p>
    </div>
  );
};