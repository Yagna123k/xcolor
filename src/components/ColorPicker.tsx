import React from 'react';

interface ColorPickerProps {
  color: string;
  onChange: (newColor: string) => void;
}

export const ColorPicker: React.FC<ColorPickerProps> = ({ color, onChange }) => {
    
  const handleHexChange = (value: string) => {
    // A simple regex to check for valid hex characters, allowing for incomplete input
    if (/^[0-9a-fA-F]*$/.test(value)) {
        onChange(`#${value}`);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg space-y-4 border border-zinc-200">
        {/* Large swatch for visual feedback only */}
        <div 
            className="w-full h-24 rounded-lg" 
            style={{ backgroundColor: color }}
            aria-hidden="true"
        ></div>
        
        <div className="flex items-end gap-3">
            {/* Clickable Color Swatch */}
            <div>
                <label htmlFor="color-picker-input" className="block text-sm font-medium text-zinc-600 mb-1">
                    Picker
                </label>
                {/* This label acts as the visible, clickable swatch for the hidden input */}
                <label
                    htmlFor="color-picker-input"
                    className="block w-10 h-10 rounded-lg border border-zinc-300 cursor-pointer transition-transform hover:scale-105"
                    style={{ backgroundColor: color }}
                    aria-label={`Current color is ${color}. Click to change.`}
                >
                    {/* The actual input is visually hidden but functional */}
                    <input
                        id="color-picker-input"
                        type="color"
                        value={color}
                        onChange={(e) => onChange(e.target.value)}
                        className="absolute w-1 h-1 -m-1 p-0 overflow-hidden"
                        aria-label="Color Picker"
                    />
                </label>
            </div>

            {/* Hex Input */}
            <div className="flex-grow">
                <label htmlFor="hex-input" className="block text-sm font-medium text-zinc-600 mb-1">
                    Hex Code
                </label>
                <div className="relative font-mono">
                    <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-400">#</span>
                    <input
                        id="hex-input"
                        type="text"
                        value={color.substring(1).toUpperCase()}
                        onChange={(e) => handleHexChange(e.target.value)}
                        className="w-full pl-7 pr-3 py-2 text-zinc-800 bg-white border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        aria-label="Hex color code"
                        maxLength={6}
                    />
                </div>
            </div>
        </div>
    </div>
  );
};
