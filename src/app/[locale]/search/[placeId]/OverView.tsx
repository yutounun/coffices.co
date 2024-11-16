import Stars from "@/components/ui/Stars";
import { selectedStoreI } from "@/store/selectedStore";
import { CafeDetailI } from "@/types/CafeDetail";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const OverView = ({
  detailInfo,
  selectedStoreData,
}: {
  detailInfo?: CafeDetailI;
  selectedStoreData?: selectedStoreI;
}) => {
  return (
    <>
      {/* Title */}
      <Typography variant="h1">{selectedStoreData?.name}</Typography>
      {/* Area */}
      <Stack direction="row" gap={1} sx={{ alignItems: "center" }}>
        <Typography variant="body1">{selectedStoreData?.address}</Typography>
        <Link
          href={`https://www.google.com/maps/search/?api=1&query=${detailInfo?.name}`}
          target="_blank"
          style={{
            height: "20px",
            width: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center", // 水平方向にも中央揃え
          }}
        >
          <Image src="/detail/map.svg" alt="map" width={20} height={20} />
        </Link>
      </Stack>

      {/* Rating */}
      <Stack direction="row" gap={1}>
        <Stars rate={detailInfo?.rating || 0} size="1rem" />
        <Typography variant="body1">{detailInfo?.rating}</Typography>
      </Stack>
    </>
  );
};

export default OverView;
