import { ReviewI } from "@/types/GooglePlacesTypes";
import { NextResponse } from "next/server";

const { GoogleGenerativeAI } = require("@google/generative-ai");

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

const createPrompt = (reviews: ReviewI[]): string => {
  const reviewsText = reviews.map((review) => review.text).join("\n");
  return `
    Analyze the following text property of each review and determine specific information about the cafe. Respond strictly in JSON format with the following structure:
    
    {
      "wifi": {
        "wifi_available": boolean, // true if no negative mentions about WiFi exist, otherwise false
        "confidence": integer // percentage confidence based on the number of mentions (0-100)
        },
      "work": {
        "suitable_for_work": boolean, // true if any review indicates it is good for work (e.g., quiet, comfortable seating, good lighting, spacious, not crowded, people working on laptops), otherwise false
        "confidence": integer // percentage confidence based on the number of mentions (0-100)
      },
      "coffee_price": {
        "min_coffee_price": string, // Minimum price of any drink (not limited to coffee), or "unknown" if no drink prices are mentioned
        "confidence": integer // percentage confidence based on the number of mentions (0-100)
      },
      "plug": {
        "plug_available": boolean, // true if any review mentions plugs, power outlets, sockets, or charging stations positively, otherwise false
        "confidence": integer // percentage confidence based on the number of mentions (0-100)
      },
      "ai_analysis": string, // Summary of the analysis of the reviews
      "important_reviews": [string] // Up to 10 review texts that were most relevant for this analysis
    }
    
    Special rules:
     Special rules:
    - For WiFi:
        - If no reviews contain negative mentions about WiFi (e.g., "no WiFi", "WiFi not working", "WiFi was slow"), set wifi_available to true.
        - If any review contains negative mentions about WiFi, set wifi_available to false.
        - Consider terms like "WiFi", "internet", or similar for identifying mentions of WiFi.
        - Calculate confidence based on the proportion of positive vs negative mentions of WiFi in the reviews.
    - For plugs, if no negative mentions about plugs (e.g., 'no plugs', 'plugs not available') exist, set plug_available to true. Otherwise, set it to false.
    - For suitable_for_work, consider the following phrases: 'quiet', 'comfortable seating', 'good lighting', 'spacious', 'not crowded', 'people working on laptops', or similar expressions. If multiple indicators suggest suitability, set suitable_for_work to true; otherwise, set it to false.
    - For min_coffee_price, look for the lowest price of any drink (e.g., tea, juice, coffee). If no drink prices are mentioned, return "unknown".
    - For plug mentions, include words such as 'plug', 'power outlet', 'socket', 'charging station', or similar terms.
    - For WiFi mentions, look for terms such as 'WiFi', 'internet', or similar.
  
    Reviews:
    ${reviewsText}
    `;
};

// Create an asynchronous function POST to handle POST
// request with parameters request and response.

export async function POST(req: Request) {
  const data = await req.json();
  const reviews = data.reviews;

  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  const rawResult = await chatSession.sendMessage(createPrompt(reviews));
  const rawText = rawResult.response.text();

  let formattedJson;

  try {
    // Remove ``` Markdown
    const cleanedText = rawText.replace(/```[\w]*|```/g, "").trim();

    // Make sure the response is a valid JSON string
    if (!cleanedText.startsWith("{") || !cleanedText.endsWith("}")) {
      throw new Error("Response is not a valid JSON string");
    }

    formattedJson = JSON.parse(cleanedText);
  } catch (error) {
    console.error("Failed to parse JSON:", error);
    return NextResponse.json({ error: "Invalid JSON format" }, { status: 400 });
  }

  return NextResponse.json(formattedJson);
}
