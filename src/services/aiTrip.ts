import { GoogleGenerativeAI } from "@google/generative-ai";
import { fetchUnsplashImage } from "./fetchUnplashImage";
import { createTrip } from "./apiTrips";
import { redirect } from "react-router";
type createTripGeminiParams = {
  numberOfDays: number;
  country: string;
  budget: string;
  interests: string;
  travelStyle: string;
  groupType: string;
};

export async function createTripGemini({
  country,
  numberOfDays,
  budget,
  interests,
  travelStyle,
  groupType,
}: createTripGeminiParams) {
  const prompt = `Generate a ${numberOfDays}-day travel itinerary for ${country} using the following user preferences:

  - Budget: '${budget}'
  - Interests: '${interests}'
  - Travel Style: '${travelStyle}'
  - Group Type: '${groupType}'
  
  Return a valid JSON object only (no markdown, no explanations). Structure it exactly like this:
  
  {
    "name": "Descriptive title for the trip",
    "description": "Brief summary of the trip (max 100 words)",
    "estimatedPrice": "Lowest average price in USD (e.g. $950)",
    "duration": ${numberOfDays},
    "budget": "${budget}",
    "travelStyle": "${travelStyle}",
    "country": "${country}",
    "interests": "${interests}",
    "groupType": "${groupType}",
  
    "bestTimeToVisit": [
      "🌸 Spring (March–May): reason",
      "☀️ Summer (June–August): reason",
      "🍁 Autumn (September–November): reason",
      "❄️ Winter (December–February): reason"
    ],
  
    "weatherInfo": [
      "🌸 Spring: 10–20°C (50–68°F)",
      "☀️ Summer: 20–30°C (68–86°F)",
      "🍁 Autumn: 12–22°C (54–72°F)",
      "❄️ Winter: 0–10°C (32–50°F)"
    ],
  
    "location": {
      "city": "Main city or region",
      "coordinates": [latitude, longitude],
      "openStreetMap": "https://www.openstreetmap.org/..."
    },
  
    "itinerary": [
      {
        "day": 1,
        "location": "City or region",
        "activities": [
          { "time": "Morning", "description": "Activity description" },
          { "time": "Afternoon", "description": "Activity description" },
          { "time": "Evening", "description": "Activity description" }
        ]
      }
      // Repeat for each day
    ]
  }
  
  Requirements:
  - Return exactly ${numberOfDays} days in the itinerary
  - Each day's activities must include Morning, Afternoon, and Evening
  -"DO NOT use markdown formatting like triple backticks , no 'json' label, and no extra explanations. Only return raw JSON that can be parsed directly with JSON.parse() in JavaScript.
  - Do NOT include markdown, backticks, explanations, or extra text. Return raw JSON only.
  `;

  const genAi = new GoogleGenerativeAI(import.meta.env.VITE_APP_GEMINI_API_KEY);
  const model = genAi.getGenerativeModel({ model: "gemini-1.5-flash" });
  let trip;
  try {
    const resutl = await model.generateContent(prompt);
    const text = resutl.response.text();
    console.log(text);
    trip = JSON.parse(text);
    console.log(trip);
  } catch (error) {
    console.error("Erreur gemini :", error);
  }
  const imageUrl = await fetchUnsplashImage(
    `${trip.travelStyle} ${trip.country} ${trip.location.city} ${trip.estimatedPrice} ${trip.name} ${trip.budget} ${trip.groupType} travel`,
  );

  await createTrip({
    name: trip.name,
    country: trip.country,
    price: trip.estimatedPrice,
    numberOfDays: trip.duration,
    budget: trip.budget,
    groupeType: trip.groupType,
    interests: trip.interests,
    location: trip.location.city,
    travelStyle: trip.travelStyle,
    image: imageUrl,
    description: trip.description,
    itinerary: JSON.stringify(trip.itinerary),
    bestTimeToVisit: JSON.stringify(trip.bestTimeToVisit),
  });
  redirect(`admin/trips/${trip.$id}`);
}
