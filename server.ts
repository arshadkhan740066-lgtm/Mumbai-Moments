import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Lazy initialize Google GenAI SDK
  function getGeminiClient(): GoogleGenAI | null {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return null;
    }
    return new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }

  // Health check
  app.get("/api/health", (req, res) => {
    res.json({
      status: "ok",
      venue: "Mumbai Moments Private Estate",
      aiEnabled: !!process.env.GEMINI_API_KEY
    });
  });

  // 1. AI Love Letter, Proposal Speech & Vow Generator
  app.post("/api/love-ai/generate-letter", async (req, res) => {
    try {
      const {
        partnerName,
        yourName,
        occasion,
        tone,
        specialMemories,
        favoriteThings,
        languageStyle
      } = req.body;

      const ai = getGeminiClient();

      if (!ai) {
        // High quality fallback if API key is not yet set in environment
        const fallbackText = `My Dearest ${partnerName || 'Love'},\n\nFrom the moment you came into my life, every sunset over Mumbai and every quiet moment we've shared feels like it was written just for us. ${specialMemories ? `Remembering ${specialMemories} still makes my heart skip a beat.` : 'You have been my greatest adventure and my safest sanctuary.'}\n\nTonight, in this private sanctuary made only for the two of us, I want to promise you my heart, my patience, and a lifetime of unforgettable memories.\n\nForever and always yours,\n${yourName || 'Your Love'}`;
        return res.json({
          success: true,
          content: fallbackText,
          tone: tone || 'Romantic & Emotional',
          source: 'curated-fallback'
        });
      }

      const prompt = `You are the lead romantic speechwriter and luxury love concierge at "Mumbai Moments", Mumbai's most exclusive private luxury romantic estate in Pali Hill, Bandra.
Write a deeply emotional, poetic, and personalized romantic ${occasion || 'Proposal / Love Letter'} for a client.

Client details:
- Partner's Name: ${partnerName || 'My Love'}
- Client's Name: ${yourName || 'Forever Yours'}
- Celebration Occasion: ${occasion || 'Private Romantic Date'}
- Desired Emotional Tone: ${tone || 'Deeply romantic, emotional, heartfelt, and memorable'}
- Language Nuance: ${languageStyle || 'Refined English with subtle poetic romantic flair'}
- Special Memories / Moments Shared: ${specialMemories || 'Our late-night drives, shared laughter, and quiet ocean breeze moments'}
- Favorite Things / Personal Inside Touches: ${favoriteThings || 'Favorite songs, gentle touches, and lifelong dreams'}

Guidelines:
1. Make it sound genuine, bespoke, and emotionally resonant — avoid cheap clichés.
2. Structure it cleanly with romantic spacing and an emotional crescendo.
3. If it's a Proposal, build up to the magical moment naturally.
4. Keep the length around 180 to 280 words so it can be read smoothly or printed on luxury parchment.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.7-flash",
        contents: prompt,
        config: {
          systemInstruction: "You are an elite romantic wordsmith and private luxury event director. Craft mesmerizing, heartfelt, and deeply touching romantic messages.",
          temperature: 0.85,
        }
      });

      return res.json({
        success: true,
        content: response.text || "You are the love of my life, tonight and forever.",
        tone: tone || 'Romantic',
        source: 'gemini-3.7-flash'
      });
    } catch (error: any) {
      console.error("Gemini Love Letter generation error:", error);
      return res.status(500).json({
        success: false,
        error: error?.message || "Failed to generate romantic letter"
      });
    }
  });

  // 2. AI Romantic Itinerary & Surprise Timeline Sequencer
  app.post("/api/love-ai/curate-timeline", async (req, res) => {
    try {
      const {
        occasion,
        spaceArea,
        themeStyle,
        partnerPersonality,
        surpriseLevel,
        selectedAddOns
      } = req.body;

      const ai = getGeminiClient();

      if (!ai) {
        return res.json({
          success: true,
          timeline: [
            {
              time: "07:00 PM",
              phase: "The Grand Arrival & Blindfold Reveal",
              description: "Chauffeured arrival at Mumbai Moments Estate in Kurla West. Gentle pathway lit by 500+ glass candle lanterns leading to the botanical sanctuary."
            },
            {
              time: "07:20 PM",
              phase: "Champagne Toast & Live Serenade",
              description: "Welcome vintage bubbly poured in crystal flutes accompanied by your favorite melody performed on live acoustic violin."
            },
            {
              time: "07:45 PM",
              phase: "The Signature Moment (Proposal / Toast)",
              description: "Illuminated 4ft marquee letters light up with soft cold pyro sparkle fountains as you present your personal love letter."
            },
            {
              time: "08:15 PM",
              phase: "Private Chef 5-Course Candlelight Tasting",
              description: "Bespoke fine-dining feast served Course by Course under the illuminated glasshouse canopy."
            },
            {
              time: "09:30 PM",
              phase: "4K Memory Cinema & Starlit Slow Dance",
              description: "Private outdoor projection of your couple montage photos under fairy light canopies with artisanal dessert."
            }
          ],
          curatorAdvice: "Keep your smartphone in your pocket — our discreet documentary photographer will capture every natural smile without intruding.",
          source: 'curated-fallback'
        });
      }

      const prompt = `You are the Master of Ceremonies and Romantic Event Director at "Mumbai Moments", a 100% private luxury estate in Kurla West (BKC Corridor), Mumbai, serving prime couples across Sion, Dadar, Kurla, Mahim, Wadala, and Chembur.
Create a high-end, minute-by-minute romantic surprise itinerary for a couple enjoying an exclusive 3-hour private estate transformation.

Details:
- Occasion: ${occasion || 'Romantic Proposal'}
- Venue Zone: ${spaceArea || 'The Glasshouse Pavilion'}
- Theme Style: ${themeStyle || 'Celestial Candlelight & Fairy Lights'}
- Partner's Vibe/Personality: ${partnerPersonality || 'Appreciates emotional depth, soft music, and thoughtful surprises'}
- Surprise Grandeur Level: ${surpriseLevel || 'High Emotional Impact with subtle grand reveal'}
- Add-ons booked: ${Array.isArray(selectedAddOns) ? selectedAddOns.join(', ') : 'Violinist, Cold Pyro, Private Chef, 4K Cinema'}

Return a structured JSON object matching this schema:
{
  "timeline": [
    { "time": "07:00 PM", "phase": "Title", "description": "1-2 sentences on what happens seamlessly" },
    { "time": "07:25 PM", "phase": "Title", "description": "..." },
    { "time": "07:50 PM", "phase": "Title", "description": "..." },
    { "time": "08:20 PM", "phase": "Title", "description": "..." },
    { "time": "09:15 PM", "phase": "Title", "description": "..." }
  ],
  "curatorAdvice": "A 2-sentence expert insider recommendation for maximum emotional impact and seamlessness.",
  "recommendedSongChoices": ["Song 1", "Song 2", "Song 3"]
}`;

      const response = await ai.models.generateContent({
        model: "gemini-3.7-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          temperature: 0.7,
        }
      });

      const parsed = JSON.parse(response.text || "{}");
      return res.json({
        success: true,
        ...parsed,
        source: 'gemini-3.7-flash'
      });
    } catch (error: any) {
      console.error("Gemini Timeline error:", error);
      return res.status(500).json({
        success: false,
        error: error?.message || "Failed to curate timeline"
      });
    }
  });

  // 3. AI Love Matcher & Dream Theme Matcher
  app.post("/api/love-ai/match-vibe", async (req, res) => {
    try {
      const { answers } = req.body;
      const ai = getGeminiClient();

      if (!ai) {
        return res.json({
          success: true,
          matchName: "The Celestial Starlit Glasshouse",
          recommendedSpace: "The Glasshouse Pavilion",
          recommendedTheme: "Celestial Candlelight & Fairy Lights",
          recommendedDining: "5-Course Private Chef Gourmet Tasting",
          recommendedAddOns: ["violinist", "photographer", "cinematic-video"],
          matchReasoning: "Your answers reflect a desire for intimate luxury, high emotional warmth, and private romantic dining surrounded by starlight.",
          source: 'curated-fallback'
        });
      }

      const prompt = `As the lead romantic architect at Mumbai Moments (exclusive luxury private estate in Kurla West, central Mumbai, serving Sion, Dadar, Kurla, Mahim, Wadala, and Chembur), analyze these couple preferences from their Love Vibe Quiz:
${JSON.stringify(answers, null, 2)}

Match them with the optimal bespoke estate transformation:
Available Spaces:
- "The Glasshouse Pavilion"
- "The Starlit Rooftop Deck"
- "The Candlelit Garden Courtyard"
- "The Sunset Oceanview Cabana"

Available Themes:
- "Celestial Candlelight & Fairy Lights"
- "Royal Velvet & Red Rose Sanctum"
- "Bohemian Sunset & Pampas Grass"
- "Open-Air Cinema Under The Stars"
- "Minimalist Scandinavian White & Gold"
- "Enchanted Forest & Floral Archway"

Available Dining:
- "5-Course Private Chef Gourmet Tasting"
- "Live Barbecue & Alfresco Grill"
- "Mediterranean Tapas & Wine Pairing"
- "Royal Indian Fine Dining Feasts"
- "Artisanal Grazing Table & Champagne"

Return JSON with:
{
  "matchName": "Catchy evocative title of their custom love setup",
  "recommendedSpace": "Exact Space name",
  "recommendedTheme": "Exact Theme name",
  "recommendedDining": "Exact Dining name",
  "recommendedAddOns": ["violinist", "cold-pyro", "photographer"],
  "matchReasoning": "Warm 2-3 sentence explanation of why this fits their unique love energy."
}`;

      const response = await ai.models.generateContent({
        model: "gemini-3.7-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          temperature: 0.7,
        }
      });

      const parsed = JSON.parse(response.text || "{}");
      return res.json({
        success: true,
        ...parsed,
        source: 'gemini-3.7-flash'
      });
    } catch (error: any) {
      console.error("Gemini Vibe Match error:", error);
      return res.status(500).json({
        success: false,
        error: error?.message || "Failed to match vibe"
      });
    }
  });

  // 4. AI Neighborhood Romantic Route & Chauffeur Proposal Roadmap
  app.post("/api/love-ai/generate-neighborhood-date-route", async (req, res) => {
    try {
      const {
        neighborhood,
        coupleNames,
        occasion,
        specialMemory,
        preferredVibe
      } = req.body;

      const ai = getGeminiClient();

      const areaName = neighborhood || 'Dadar';
      const couple = coupleNames || 'You & Your Love';

      if (!ai) {
        return res.json({
          success: true,
          routeName: `${areaName} to Kurla Starlit Private Sanctuary`,
          neighborhood: areaName,
          transitETA: areaName === 'Kurla' ? 'Direct / 2 mins' : areaName === 'Sion' ? '6 mins' : areaName === 'Mahim' ? '8 mins' : areaName === 'Dadar' ? '10 mins' : areaName === 'Wadala' ? '10 mins' : '12 mins',
          romanticNarrative: `Your celebration begins with a chauffeured luxury pickup right at your doorstep in ${areaName}. A smooth, quick drive brings you into our 100% private botanical sanctuary in Kurla West, surrounded by 500+ glowing candles and a private chef waiting exclusively for two.`,
          steps: [
            {
              stepNumber: 1,
              title: `VIP Chauffeur Pickup in ${areaName}`,
              time: "06:45 PM",
              detail: `A luxury private sedan arrives at your residence with chilled welcome mocktails and fresh floral corsage.`
            },
            {
              stepNumber: 2,
              title: "Intimate Sunset Transfer to Kurla Sanctuary",
              time: "07:05 PM",
              detail: `Enjoy an intimate sunset drive while your signature couple song plays softly on the high-fidelity acoustic sound system.`
            },
            {
              stepNumber: 3,
              title: "Grand Reveal at Mumbai Moments Kurla Estate",
              time: "07:20 PM",
              detail: `Step into the private botanical estate transformed exclusively for you with candlelit pathways and live acoustic violin.`
            },
            {
              stepNumber: 4,
              title: "5-Course Private Chef Feast & Marquee Reveal",
              time: "08:00 PM",
              detail: `Celebratory feast crafted Course by Course, culminating in the 4ft marquee reveal and personalized love letter presentation.`
            },
            {
              stepNumber: 5,
              title: `Chauffeured Return to ${areaName}`,
              time: "10:30 PM",
              detail: `Smooth, comfortable ride back home with luxury keepsake gift hampers and framed documentary couple portrait prints.`
            }
          ],
          loveVowSuggestion: `From our memories in ${areaName} to this starlit private sanctuary in Kurla, my love for you grows with every passing beat.`,
          source: 'curated-fallback'
        });
      }

      const prompt = `You are the Master Luxury Concierge and Romantic Director at "Mumbai Moments", an exclusive 100% private luxury estate located in Kurla West, Mumbai.
Our flagship private venue in Kurla is the central romantic sanctuary for couples from our prime target corridors: Sion, Dadar, Kurla, Mahim, Wadala, and Chembur.
A couple from ${areaName} is planning a romantic ${occasion || 'Proposal / Anniversary'}.

Details:
- Origin Neighborhood: ${areaName}
- Venue Destination: Mumbai Moments 100% Private Estate, Kurla West
- Couple Names: ${couple}
- Occasion: ${occasion || 'Private Romantic Date'}
- Special Local Memory: ${specialMemory || 'Our first dates, sunset walks, and shared laughter'}
- Preferred Vibe: ${preferredVibe || 'Luxurious, deeply emotional, cinematic, and private'}

Create a captivating, minute-by-minute Chauffeured Romantic Date Roadmap and custom love narrative connecting their ${areaName} story to their private estate experience in Kurla West.

Return strict JSON:
{
  "routeName": "Evocative Title for the Route",
  "neighborhood": "${areaName}",
  "transitETA": "e.g. 8 mins / 10 mins",
  "romanticNarrative": "A warm, poetic 3-sentence description of how this date bridges their memories in ${areaName} with their private estate sanctuary in Kurla.",
  "steps": [
    {
      "stepNumber": 1,
      "title": "Chauffeured Pickup in ${areaName}",
      "time": "06:45 PM",
      "detail": "1-2 sentences on the luxury pickup"
    },
    {
      "stepNumber": 2,
      "title": "Scenic Sunset Transfer",
      "time": "07:10 PM",
      "detail": "..."
    },
    {
      "stepNumber": 3,
      "title": "Arrival & Private Sanctuary Reveal",
      "time": "07:30 PM",
      "detail": "..."
    },
    {
      "stepNumber": 4,
      "title": "The Signature Moment & Private Chef Dining",
      "time": "08:15 PM",
      "detail": "..."
    },
    {
      "stepNumber": 5,
      "title": "Chauffeured Return to ${areaName}",
      "time": "10:30 PM",
      "detail": "..."
    }
  ],
  "loveVowSuggestion": "A 1-2 sentence emotional love vow mentioning their special bond and ${areaName} connection."
}`;

      const response = await ai.models.generateContent({
        model: "gemini-3.7-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          temperature: 0.75,
        }
      });

      const parsed = JSON.parse(response.text || "{}");
      return res.json({
        success: true,
        ...parsed,
        source: 'gemini-3.7-flash'
      });
    } catch (error: any) {
      console.error("Gemini Neighborhood Date Route error:", error);
      return res.status(500).json({
        success: false,
        error: error?.message || "Failed to generate neighborhood date route"
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Mumbai Moments Server running on http://localhost:${PORT}`);
  });
}

startServer();
