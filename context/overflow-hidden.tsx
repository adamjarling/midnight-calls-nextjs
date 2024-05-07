"use client";

import React, { createContext, useContext, useState } from "react";

const OverflowHiddenContext = createContext({
  isOverflowHidden: false,
  toggleOverflowHidden: () => {},
});

export const useOverflowHidden = () => useContext(OverflowHiddenContext);

export const OverflowHiddenProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOverflowHidden, setIsOverflowHidden] = useState(false);

  const toggleOverflowHidden = () => {
    setIsOverflowHidden(!isOverflowHidden);
  };

  return (
    <OverflowHiddenContext.Provider
      value={{ isOverflowHidden, toggleOverflowHidden }}
    >
      {children}
    </OverflowHiddenContext.Provider>
  );
};
