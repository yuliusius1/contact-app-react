import React from "react";

const LocalContext = React.createContext();

export const LocaleProvider = LocalContext.Provider;
export const LocaleConsumer = LocalContext.Consumer;

export default LocalContext;
