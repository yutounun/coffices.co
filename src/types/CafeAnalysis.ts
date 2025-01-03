/**
 * CafeAnalysisI data on MongoDB
 */
export interface CafeAnalysisI {
  // Information about WiFi availability
  wifi: {
    wifi_available: string; // WiFi availability ("yes", "no", "not sure", etc.)
    confidence: number; // Confidence level of the WiFi information
  };

  // Information about suitability for work
  work: {
    suitable_for_work: string; // Indicates whether the cafe is work-friendly ("yes", "no", "not sure", etc.)
    confidence: number; // Confidence level of the work suitability information
  };

  // Coffee price information
  coffee_price?: {
    min_coffee_price?: string; // Minimum coffee price ("not sure", etc.)
    confidence?: number; // Confidence level of the coffee price information
  };

  // Information about power plug availability
  plug: {
    plug_available: string; // Power plug availability ("yes", "no", "not sure", etc.)
    confidence: number; // Confidence level of the power plug information
  };

  ai_analysis: string; // AI-generated comments or analysis
  important_reviews: string[]; // Array of important reviews
}
