import Image from "next/image";
import { FC } from "react";
import "./NextImage.scss";
import "../cafe/list/cafe-list.scss";

type NextImageProps = {
  src: string;
  alt: string;
  onMouseOver?: () => void;
  onMouseOut?: () => void;
};

export const NextImage: FC<NextImageProps> = ({
  src,
  alt,
  onMouseOver,
  onMouseOut,
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
        className="row__picture image"
      />
    </div>
  );
};
