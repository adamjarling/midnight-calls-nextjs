import Link from "next/link";

const HomeBanner = () => {
  return (
    <div
      className="relative w-screen h-screen bg-center bg-cover"
      style={{ backgroundImage: `url("/images/DSC08971-bw.jpg")` }}
    >
      <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full bg-black/40">
        {/* <div className="relative inline-block max-w-2xl mx-auto animate-pulse">
          <Image
            src="/images/midnight-calls-logo_white.png"
            width="2812"
            height={2007}
            alt="Midnight Calls logo"
          />
        </div> */}
        <div className="text-center text-white">
          <h1 className="mb-4 text-6xl leading-none tracking-widest md:text-8xl animate-pulse">
            The
            <br />
            Midnight Calls
          </h1>
          <h2 className="text-3xl tracking-widest opacity-70 md:text-4xl lg:text-5xl">
            Chicago &#9734; USA
          </h2>
        </div>
      </div>
      <p className="absolute text-sm text-right text-white bottom-2 right-5">
        Photo:{" "}
        <Link href="https://www.instagram.com/bikerchickie_m/">
          <span className="text-white">bikerchickie_m</span>
        </Link>
      </p>
    </div>
  );
};

export default HomeBanner;
