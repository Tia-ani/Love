import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface StoryAnalysis {
  type: string;
  description: string;
  strength: number;
  recommendations: string[];
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { story } = await req.json();

    // Analyze the story text to determine connection type
    const analysis = analyzeStory(story);

    return new Response(
      JSON.stringify({
        connection_type: analysis,
      }),
      {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      },
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 400,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      },
    );
  }
});

function analyzeStory(story: string): StoryAnalysis {
  const lowerStory = story.toLowerCase();
  
  // Simple keyword-based analysis
  const keywords = {
    twinFlames: ['instant connection', 'mirror', 'intense', 'magnetic', 'transformation'],
    soulmates: ['comfortable', 'understanding', 'natural', 'peaceful', 'harmony'],
    pastLife: ['familiar', 'déjà vu', 'known before', 'past', 'recognition'],
    karmic: ['lesson', 'growth', 'challenge', 'learning', 'destiny']
  };

  // Count keyword matches for each type
  const scores = {
    twinFlames: keywords.twinFlames.filter(word => lowerStory.includes(word)).length,
    soulmates: keywords.soulmates.filter(word => lowerStory.includes(word)).length,
    pastLife: keywords.pastLife.filter(word => lowerStory.includes(word)).length,
    karmic: keywords.karmic.filter(word => lowerStory.includes(word)).length
  };

  // Determine the dominant connection type
  const maxScore = Math.max(...Object.values(scores));
  const connectionType = Object.entries(scores).find(([_, score]) => score === maxScore)?.[0];

  // Calculate connection strength (50-100%)
  const totalPossibleScore = Math.max(
    keywords.twinFlames.length,
    keywords.soulmates.length,
    keywords.pastLife.length,
    keywords.karmic.length
  );
  const strength = 50 + (maxScore / totalPossibleScore) * 50;

  // Return appropriate analysis based on connection type
  switch (connectionType) {
    case 'twinFlames':
      return {
        type: 'Twin Flames',
        description: 'Your connection shows the intense and transformative nature of twin flames. This rare and powerful bond is marked by an immediate recognition and a profound impact on both souls.',
        strength,
        recommendations: [
          'Practice self-love and inner work',
          'Embrace the intensity of your connection',
          'Work through triggers together',
          'Support each other's spiritual growth'
        ]
      };

    case 'soulmates':
      return {
        type: 'Soulmates',
        description: 'Your souls share a deep, harmonious connection. This natural and comfortable bond suggests you're meant to support and nurture each other's growth.',
        strength,
        recommendations: [
          'Nurture your emotional intimacy',
          'Create shared spiritual practices',
          'Maintain individual growth',
          'Build traditions together'
        ]
      };

    case 'pastLife':
      return {
        type: 'Past Life Connection',
        description: 'The familiar energy between you suggests a connection spanning multiple lifetimes. You've likely shared significant experiences in past lives.',
        strength,
        recommendations: [
          'Explore past life regression together',
          'Notice recurring patterns',
          'Honor your soul history',
          'Create new memories while acknowledging the old'
        ]
      };

    default:
      return {
        type: 'Karmic Connection',
        description: 'Your relationship carries important lessons for both souls. This connection is designed to facilitate growth and personal transformation.',
        strength,
        recommendations: [
          'Focus on personal growth',
          'Learn from challenges',
          'Practice forgiveness',
          'Maintain healthy boundaries'
        ]
      };
  }
}