import React from 'react';
import { Heart, Infinity } from 'lucide-react';

const LoveKnotTheory = () => {
  return (
    <section className="py-16 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
          <div className="flex items-center justify-center mb-6 space-x-2">
            <Heart className="w-8 h-8 text-rose-400" />
            <h2 className="text-3xl font-bold text-rose-100">The Love Knot Theory</h2>
            <Infinity className="w-8 h-8 text-rose-400" />
          </div>
          
          <div className="space-y-6 text-rose-100">
            <p className="text-lg leading-relaxed">
              The Love Knot Theory suggests that certain souls are bound together by an unbreakable spiritual knot, 
              symbolizing an eternal connection that transcends time and space. This mystical bond is said to be 
              formed in the spiritual realm before two souls incarnate on Earth.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white/5 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-rose-200">Signs of a Love Knot</h3>
                <ul className="space-y-2">
                  <li>• Instant recognition upon meeting</li>
                  <li>• Synchronized life paths</li>
                  <li>• Telepathic communication</li>
                  <li>• Shared dreams or visions</li>
                </ul>
              </div>
              
              <div className="bg-white/5 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-rose-200">Spiritual Significance</h3>
                <ul className="space-y-2">
                  <li>• Represents eternal commitment</li>
                  <li>• Symbolizes karmic completion</li>
                  <li>• Indicates spiritual growth</li>
                  <li>• Marks divine timing</li>
                </ul>
              </div>
            </div>
            
            <p className="text-lg leading-relaxed mt-6">
              When two souls connected by a love knot meet in the physical realm, they often experience an 
              inexplicable sense of familiarity and completeness. This connection is believed to be part of 
              a greater spiritual journey toward mutual growth and enlightenment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveKnotTheory;