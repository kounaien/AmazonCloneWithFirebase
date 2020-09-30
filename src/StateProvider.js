import React, { createContext, useContext, useReducer } from "react";

//Prepares the dateLayer
export const StateContext = createContext();

//Wreap our app provide the Date layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//Pull inforamtion from the data layer
export const useStateValue = () => useContext(StateContext);
