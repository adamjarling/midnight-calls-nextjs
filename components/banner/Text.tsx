import React from "react";

const BannerText = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-4 pt-5 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">{children}</div>
    </div>
  );
};

export default BannerText;
