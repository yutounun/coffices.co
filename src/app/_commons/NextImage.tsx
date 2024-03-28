import Image from "next/image";
import { FC } from "react";
import "../_styles/NextImage.scss";
import "../_styles/cafe-list.scss";

type NextImageProps = {
  src: string;
  alt: string;
  onMouseOver?: () => void;
  onMouseOut?: () => void;
  className?: string;
};

export const NextImage: FC<NextImageProps> = ({
  src,
  alt,
  onMouseOver,
  onMouseOut,
  className,
}) => {
  return (
    <div className="container">
      <Image
        src={src}
        alt={alt}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        fill
        sizes="100vw"
        className={`${className} image`}
      />
    </div>
  );
};
