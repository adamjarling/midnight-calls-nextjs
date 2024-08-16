"use client";

import Image, { StaticImageData } from "next/image";

import dynamic from "next/dynamic";

interface ResponsiveImageProps {
  mobileSrc: StaticImageData;
  desktopSrc: StaticImageData;
  alt: string;
}

const MediaQuery = dynamic(() => import("react-responsive"), {
  ssr: false,
});

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  mobileSrc,
  desktopSrc,
  alt,
}) => {
  return (
    <>
      {/* mobile */}
      <MediaQuery maxWidth={1023}>
        <Image src={mobileSrc} alt={alt} layout="responsive" />
      </MediaQuery>

      {/* desktop */}
      <MediaQuery minWidth={1024}>
        <Image src={desktopSrc} alt={alt} layout="responsive" />
      </MediaQuery>
    </>
  );
};

export default ResponsiveImage;
