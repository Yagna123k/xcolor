import React, { useState, useMemo } from 'react';
import { ColorPicker } from './components/ColorPicker';
import { SimulationGrid } from './components/SimulationGrid';
import { ColorBox } from './components/ColorBox';
import { ColorBlindnessType } from './types';
import { hexToRgb, simulateColor } from './services/ColorSimulation';

const App: React.FC = () => {
  const [color, setColor] = useState<string>('#4A90E2'); // A pleasant default blue

  const normalRgbColor = useMemo(() => {
      const rgb = hexToRgb(color);
      if (!rgb) return 'rgb(0, 0, 0)';
      return simulateColor(rgb, ColorBlindnessType.Normal);
  }, [color]);

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-800">
      <header className="border-b border-zinc-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight">
            XColor
          </h1>
          <p className="text-zinc-500 mt-1">
            Experience Color Blindness
          </p>
        </div>
      </header>

      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-1">
                 <h2 className="text-xl font-semibold text-zinc-900 mb-4">1. Select a Color</h2>
                 <ColorPicker color={color} onChange={setColor} />
            </div>
            <div className="md:col-span-2">
                <h2 className="text-xl font-semibold text-zinc-900 mb-4">2. Normal Vision</h2>
                <ColorBox label={ColorBlindnessType.Normal} rgbColor={normalRgbColor} isLarge={true} />
            </div>
        </section>

        <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-6 text-center">3. View Simulations</h2>
            <SimulationGrid hexColor={color} />
        </section>
      </main>

      <footer className="text-center py-8 mt-8 border-t border-zinc-200">
        <p className="text-zinc-500 text-sm">A modern take on experiencing color vision deficiency.</p>
      </footer>
    </div>
  );
};

export default App;