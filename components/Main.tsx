import React from "react";

interface Props {
  children: React.ReactNode;
  flushTop?: boolean;
}

const Main: React.FC<Props> = ({ children, flushTop = false }) => {
  return (
    <main className={`${flushTop ? "mt-0" : "pt-24 md:32"}`}>{children}</main>
  );
};

export default Main;
