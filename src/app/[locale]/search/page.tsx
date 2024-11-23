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

  // Retrieve cafes based on search keyword
  const cafes = location ? await searchCafeOnGoogle(null, location) : [];

  return (
    <Stack direction="row" sx={{ height: "90vh", width: "100%" }}>
      <Stack direction="row" sx={{ height: "90vh", width: "100%" }}>
        <StoresClient initialCafes={cafes} location={location} />

        {/* Map */}
        <Box
          sx={{
            flexGrow: 1,
            flexBasis: 0,
            width: "100%",
          }}
        >
          <GoogleMap locationKeyword={location} />
        </Box>
      </Stack>
    </Stack>
  );
};

export default CafeList;
