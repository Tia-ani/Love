import React from 'react';
import { Star } from 'lucide-react';

const ShootingStarTheory = () => {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Star className="w-8 h-8 text-yellow-300" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">The Shooting Star Theory</h2>
        </div>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-gray-200 mb-6">
                The Shooting Star Theory suggests that when you see a shooting star, it's a cosmic signal 
                of alignment with your soulmate. Ancient cultures believed these celestial events marked 
                moments when the universe opened pathways between destined lovers.
              </p>
              <p className="text-lg text-gray-200">
                According to this belief, if two soulmates witness the same shooting star, even from 
                different locations, their souls recognize each other across the distance, strengthening 
                their eventual connection.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-white/5 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-yellow-300 mb-3">Cosmic Timing</h3>
                <p className="text-gray-300">
                  The timing of seeing a shooting star is believed to be significant, with different hours 
                  of the night holding various meanings for love and connection.
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-yellow-300 mb-3">Making a Wish</h3>
                <p className="text-gray-300">
                  The tradition of making a wish upon a shooting star is particularly powerful when 
                  wishing for true love, as the star's energy is said to carry your intention to the universe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShootingStarTheory;