import React, { useState, useContext } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Heart, Sparkles, Clock, Flame } from 'lucide-react';
import { CursorContext } from '../context/CursorContext';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface ConnectionResult {
  type: string;
  description: string;
  strength: number;
  recommendations: string[];
}

const ConnectionCalculator: React.FC = () => {
  const { setCursorType } = useContext(CursorContext);
  const [story, setStory] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<ConnectionResult | null>(null);
  const [error, setError] = useState('');

  const analyzeConnection = async () => {
    if (!story.trim()) {
      setError('Please share your love story first.');
      return;
    }

    setIsAnalyzing(true);
    setError('');

    try {
      const { data: { connection_type }, error } = await supabase.functions.invoke('analyze-connection', {
        body: { story }
      });

      if (error) throw error;

      setResult(connection_type);
    } catch (err) {
      setError('Unable to analyze your connection at the moment. Please try again later.');
      console.error('Analysis error:', err);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const getConnectionIcon = (type: string) => {
    switch (type) {
      case 'Twin Flames':
        return <Flame className="text-orange-400" size={24} />;
      case 'Soulmates':
        return <Heart className="text-rose-400" size={24} />;
      case 'Past Life':
        return <Clock className="text-purple-400" size={24} />;
      default:
        return <Sparkles className="text-yellow-400" size={24} />;
    }
  };

  return (
    <section id="calculator" className="min-h-screen py-24 px-6 relative overflow-hidden bg-gradient-to-b from-slate-950 to-gray-950">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <Sparkles
            key={i}
            className="absolute text-white animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
            size={Math.random() * 20 + 10}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Love Connection <span className="text-rose-400">Calculator</span>
          </h2>
          <p className="text-white/80 text-lg">
            Share your love story and discover the mystical nature of your connection
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-rose-500/20 shadow-xl">
          <div className="mb-6">
            <label 
              htmlFor="story" 
              className="block text-white font-medium mb-2"
            >
              Your Love Story
            </label>
            <textarea
              id="story"
              value={story}
              onChange={(e) => setStory(e.target.value)}
              placeholder="Tell us how you met, your feelings, special moments, and any mystical experiences you've shared..."
              className="w-full h-48 px-4 py-3 rounded-lg bg-white/10 border border-rose-500/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-rose-500/50"
              onMouseEnter={() => setCursorType('hover')}
              onMouseLeave={() => setCursorType('default')}
            />
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500/40 rounded-lg text-white">
              {error}
            </div>
          )}

          <button
            onClick={analyzeConnection}
            disabled={isAnalyzing}
            className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
              isAnalyzing
                ? 'bg-rose-500/50 cursor-wait'
                : 'bg-rose-500 hover:bg-rose-600 hover:shadow-lg hover:shadow-rose-500/20'
            }`}
            onMouseEnter={() => setCursorType('hover')}
            onMouseLeave={() => setCursorType('default')}
          >
            {isAnalyzing ? (
              <span className="flex items-center justify-center">
                <Sparkles className="animate-spin mr-2" />
                Analyzing Your Connection...
              </span>
            ) : (
              'Analyze Connection'
            )}
          </button>

          {result && (
            <div className="mt-8 space-y-6">
              <div className="flex items-center gap-3 mb-4">
                {getConnectionIcon(result.type)}
                <h3 className="text-2xl font-semibold text-white">
                  {result.type}
                </h3>
              </div>

              <p className="text-white/90 leading-relaxed">
                {result.description}
              </p>

              <div className="mt-6">
                <div className="text-white/80 mb-2">Connection Strength</div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-rose-500 to-orange-500 transition-all duration-1000"
                    style={{ width: `${result.strength}%` }}
                  />
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-6 mt-6">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Recommendations for Nurturing Your Bond
                </h4>
                <ul className="space-y-3">
                  {result.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start gap-2 text-white/80">
                      <Heart className="flex-shrink-0 mt-1" size={16} />
                      {rec}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ConnectionCalculator;