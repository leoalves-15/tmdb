import React, { createContext, useState } from "react";
import { ReactNode } from "react";
import { ContextHomeTypes } from "./ContextHome.types";

export const ContextHome = createContext<ContextHomeTypes>(
  {} as ContextHomeTypes
);

const HomeProvider = (props: { children: ReactNode }) => {
  return <ContextHome.Provider value={{}}></ContextHome.Provider>;
};

export default HomeProvider;
