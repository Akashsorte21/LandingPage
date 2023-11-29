import React, { FC } from "react";

const Wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="px-4 max-w-screen-xl mx-auto">{children}</div>;
};

export default Wrapper;
