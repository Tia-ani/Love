import React from 'react';
import { Flame } from 'lucide-react';

const CandleFlameTheory = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <Flame className="w-12 h-12 text-amber-400 animate-flicker" />
        </div>
        <h2 className="text-4xl font-bold text-center text-white mb-8">
          The Candle Flame Theory
        </h2>
        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 shadow-xl">
          <p className="text-lg text-gray-200 leading-relaxed mb-6">
            The Candle Flame Theory suggests that souls are like flames - unique, ever-changing, and capable of joining together to create something even more beautiful. When two souls connect, they dance like twin flames, creating a stronger, more vibrant light
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-amber-300 mb-4">Signs of a Twin Flame</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Intense magnetic attraction</li>
                <li>• Mirrored behaviors and traits</li>
                <li>• Synchronized energy patterns</li>
                <li>• Deep spiritual connection</li>
              </ul>
            </div>
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-amber-300 mb-4">The Journey</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Initial recognition</li>
                <li>• Spiritual awakening</li>
                <li>• Harmonious union</li>
                <li>• Eternal bond</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CandleFlameTheory;