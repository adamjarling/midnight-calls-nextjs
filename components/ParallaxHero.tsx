import { motion, useScroll, useTransform } from "framer-motion";

import Container from "./Container";
import Image from "next/image";

type ParallaxHeroProps = {
  className?: string;
  headline?: string;
  imageUrl: string;
  altText: string;
  subHeadline?: string;
  Button?: React.ReactNode;
};

const MotionImage = motion(Image);

const ParallaxHero: React.FC<ParallaxHeroProps> = ({
  className = "",
  headline,
  imageUrl,
  altText,
  subHeadline,
  Button,
}) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0", "10%"]);

  return (
    <div
      className={`relative w-full overflow-hidden h-[60vh] mb-10 ${className}`}
    >
      <MotionImage
        style={{ y }}
        src={imageUrl}
        alt={altText}
        fill
        className="z-0 object-cover"
      />
      {/* Top gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent" />

      <div className="absolute z-0 w-full bottom-5 left">
        <Container>
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="inline-block p-1 text-6xl leading-none text-white bg-black bg-opacity-30 md:text-7xl"
          >
            {headline}
          </motion.h1>
        </Container>
      </div>

      {/* Bottom gradient overlay */}
      {/* <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent" /> */}
    </div>
  );
};

export default ParallaxHero;
