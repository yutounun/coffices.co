import React, { useCallback, useEffect, useState } from "react";
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

  /**
   * - Check if arrows should be shown
   */
  const checkScrollPosition = useCallback(() => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setIsScrollLeft(scrollLeft > 0);
      setIsScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  }, []);

  /**
   * Scroll left or right
   * @param scrollOffset
   *   -1800: scroll left
   *    1800: scroll right
   */
  const scroll = useCallback((scrollOffset: number) => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += scrollOffset;
      checkScrollPosition();
    }
  }, []);

  useEffect(() => {
    checkScrollPosition();
    cafes?.length < 6 ? setShowScroll(false) : setShowScroll(true);
    setIsScrollRight(true);

    const currentContainer = containerRef.current;
    currentContainer?.addEventListener("scroll", checkScrollPosition);
    return () =>
      currentContainer?.removeEventListener("scroll", checkScrollPosition);
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
        {/* left arrow */}
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
          {isLoading ? (
            <Loading />
          ) : (
            cafes?.map((cafe) => <CafeCard key={cafe._id} cafe={cafe} />)
          )}

          {!isLoading && cafes?.length === 0 && (
            <Typography
              sx={{
                m: "1em",
                fontSize: { xs: "1.5em", md: "2em" },
                fontFamily: "monospace",
                fontWeight: 700,
                textAlign: "center",
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Not Found
            </Typography>
          )}
        </Stack>

        {/* right arrow */}
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
