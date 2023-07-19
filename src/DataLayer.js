import React,{ createContext,useContext,useReducer } from 'react';

export const DataLayerContext = createContext();
//Note: children is the thing wrapped within the DataLayer
export const DataLayer = ({reducer, initialState, children}) => (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
);

export const useDataLayerValue = () => useContext(DataLayerContext);