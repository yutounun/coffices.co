import useTranslate from "@/hooks/useTranslate";
import { Typography } from "@mui/material";
import { GoogleMapsEmbed } from "@next/third-parties/google";
import Link from "next/link";

const GoogleMap = ({ locationName }: { locationName: string }) => {
  const { t } = useTranslate();

  if (process.env.NODE_ENV === "development")
    return (
      <>
        <Typography variant="body1">{t?.detail.map.explanation}</Typography>
        <Typography variant="body1">{t?.detail.map.check} </Typography>
        <Link href="https://coffices-co.vercel.app/">
          https://coffices-co.vercel.app/
        </Link>
      </>
    );
  return (
    <GoogleMapsEmbed
      apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
      height={400}
      width="100%"
      mode="place"
      q={locationName}
    />
  );
};

export default GoogleMap;
