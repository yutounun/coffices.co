import { Box, Stack } from "@mui/material";
import StoresClient from "./StoresClient";
import { searchCafeOnGoogle } from "@/utils/api";
import GoogleMap from "@/components/ui/GoogleMap";

const CafeList = async ({
  searchParams,
}: {
  searchParams: { location?: string };
}) => {
  const { location } = searchParams;

  // Retrieve initialCafes based on search keyword
  const initialCafes = location ? await searchCafeOnGoogle(null, location) : [];

  return <StoresClient initialCafes={initialCafes} location={location} />;
};

export default CafeList;
