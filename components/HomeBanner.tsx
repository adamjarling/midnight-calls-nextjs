import Image from "next/image";
import Link from "next/link";

const HomeBanner = () => {
  return (
    <div
      className="h-screen w-screen relative bg-cover bg-center"
      style={{ backgroundImage: `url("/images/mc-reggies-promo-bw.jpg")` }}
    >
      <div className="absolute h-full w-full top-0 left-0 bg-black/40 flex items-center justify-center flex-col">
        <div className="relative inline-block mx-auto max-w-2xl animate-pulse">
          <Image
            src="/images/midnight-calls-logo_white.png"
            width="2812"
            height={2007}
            alt="Midnight Calls logo"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
