import React, { useEffect, useState } from "react";
import { CafeI } from "types/cafes";
import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import CafeCard from "./CafeCard";
import Loading from "../../../loading";
import Arrow from "../../../_commons/Arrow";

interface propTypes {
  cafes: CafeI[];
  area: string;
  isLoading?: boolean;
}

const CafeRow = ({ cafes, area, isLoading }: propTypes) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [isScrollLeft, setIsScrollLeft] = useState(false);
  const [isScrollRight, setIsScrollRight] = useState(true);
  const [showScroll, setShowScroll] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const checkScrollPosition = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setIsScrollLeft(scrollLeft > 0);
      setIsScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scroll = (scrollOffset: number) => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += scrollOffset;
      checkScrollPosition();
    }
  };

  useEffect(() => {
    if (cafes?.length < 6) {
      setShowScroll(false);
    } else {
      setShowScroll(true);
    }
    checkScrollPosition(); // 初期位置をチェック
    setIsScrollRight(true);
    const handleScroll = () => {
      checkScrollPosition();
    };

    const currentContainer = containerRef.current;
    if (currentContainer) {
      currentContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (currentContainer) {
        currentContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, [cafes?.length]);
  return (
    <>
      <Typography
        variant="h5"
        sx={{
          m: "1em",
          fontSize: { xs: "1.5em", md: "2em" },
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        {area}
      </Typography>

      <Stack
        direction="row"
        spacing={3}
        sx={{
          mx: { xs: 2.5, md: "0" },
          height: { xs: "19em", md: "30em" },
          alignItems: "center",
        }}
      >
        {!isMobile && (
          <Arrow
            hidden={!isScrollLeft || !showScroll || isMobile}
            direction="left"
            onClick={() => scroll(-1800)}
          />
        )}
        <Stack
          ref={containerRef}
          direction="row"
          spacing={3}
          className="row__cards"
        >
          {isLoading && <Loading />}
          {cafes &&
            cafes?.length > 0 &&
            cafes?.map((cafe) => <CafeCard key={cafe._id} cafe={cafe} />)}
        </Stack>
        {!isMobile && (
          <Arrow
            hidden={!isScrollRight || !showScroll}
            direction="right"
            onClick={() => scroll(1800)}
          />
        )}
      </Stack>
    </>
  );
};

export default CafeRow;
