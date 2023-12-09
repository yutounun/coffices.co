import connectDB from "../../../libs/connectDB";
import { CafeModel } from "../../../libs/models/CafeModel";

export async function GET() {
  // Connect to MongoDB and check for cafes
  await connectDB();

  try {
    const cafes = await CafeModel.find({});
    console.log("🚀 ~ file: route.js:10 ~ GET ~ cafes:", cafes);
    return new Response(JSON.stringify(cafes));
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }));
  }
}
