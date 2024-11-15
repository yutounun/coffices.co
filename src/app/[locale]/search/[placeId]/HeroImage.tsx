import { photoUrl } from "@/libs/commons";
import { selectedStoreI } from "@/store/selectedStore";
import { Box } from "@mui/material";
import Image from "next/image";

const HeroImage = ({
  selectedStoreData,
}: {
  selectedStoreData?: selectedStoreI;
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "200px",
        overflow: "hidden",
      }}
    >
      <Image
        src={
          process.env.NEXT_PUBLIC_SHOW_STORE_IMAGE_DETAIL === "true"
            ? photoUrl(selectedStoreData?.photoRef)
            : "https://www.luxcafeclub.com/cdn/shop/articles/Minimalist_Modern_Coffee_Shop_1_1100x.png?v=1713243107"
        }
        alt={selectedStoreData?.name || ""}
        fill
        style={{ objectFit: "cover" }}
      />
    </Box>
  );
};

export default HeroImage;
