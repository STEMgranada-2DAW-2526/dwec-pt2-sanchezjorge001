import React, { createContext } from 'react'

const CañonContext = createContext();

const initialState = {
    damageDealt: 0,
    wavegGoal: 100,
    caramels: 20,
    damagePerShot: 1,
    autoShotsPerSecond: 1,
    upgrades: [],
};


function CañonReducer(state, action) {

    let output = state;

    if(action.type == 'CLICK_SHOT') {
    
    } else if(action.type == 'AUTO_SHOT ') {

    } else if(action.type == 'BUY_MULTIPLIER') {

    } else if(action.type == 'BUY_DAMAGE_UPGRADE') {

    } else if(){

    }

    return output;

}

export function CañonProvider({ children }) {
    const [state, dispatch] = useReducer(CañonReducer, initialState);
