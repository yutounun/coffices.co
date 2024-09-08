import { useTranslations } from "next-intl";
import { Typography } from "@mui/material";
import { GoogleMapsEmbed } from "@next/third-parties/google";
import Link from "next/link";

const GoogleMap = ({ locationName }: { locationName: string }) => {
  const t = useTranslations("detail");

  if (process.env.NODE_ENV === "development")
    return (
      <>
        <Typography variant="body1">{t("map.explanation")}</Typography>
        <Typography variant="body1">{t("map.check")} </Typography>
        <Link href="https://coffices-co.vercel.app/">
          <Typography
            variant="body1"
            sx={{
              "&:hover": {
                cursor: "pointer",
                color: "black",
              },
            }}
          >
            https://coffices-co.vercel.app/{" "}
          </Typography>
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
