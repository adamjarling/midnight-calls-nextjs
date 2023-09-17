import React from "react";

interface BannerProps {
  children: React.ReactNode;
  className?: string;
}

const Banner: React.FC<BannerProps> = ({ children, className }) => {
  return (
    <div className={`text-center py-8 md:py-10 container ${className}`}>
      {children}
    </div>
  );
};

export default Banner;
