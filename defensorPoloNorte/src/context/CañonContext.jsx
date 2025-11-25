import React, { createContext, use, useEffect, useReducer, useContext } from 'react'

const CañonContext = createContext();

const initialState = {
    damageDealt: 0,
    waveGoal: 100,
    caramels: 20,
    damagePerShot: 1,
    waveNumber: 1,
    autoShotsPerSecond: 1,
    priceMultiplier: 10,
    upgrades: {
        canionTurron: { damage: 2, price: 15, count: 0 },
        renosLanzamisiles: { damage: 5, price: 30, count: 0 },
        arbolLaser: { damage: 10, price: 50, count: 0 }
    },
};


function CañonReducer(state, action) {

    let output = state;


    if(action.type == 'CLICK_SHOT' && state.waveGoal > 0) {
        output = {
            ...state, waveGoal: state.waveGoal - state.damagePerShot,
            damageDealt: state.damageDealt + state.damagePerShot
        }
    } else if(action.type == 'AUTO_SHOT ' && state.waveGoal > 0) {
        output = {
            ...state, waveGoal: state.waveGoal - state.autoShotsPerSecond * state.damagePerShot,
            damageDealt: state.damageDealt + state.autoShotsPerSecond * state.damagePerShot
        }

    } else if(action.type == 'BUY_MULTIPLIER' && state.caramels >= 10) {
        output = {
            ...state, caramels: state.caramels - priceMultiplier,
            autoShotsPerSecond: state.autoShotsPerSecond + 1,
            priceMultiplier: state.priceMultiplier * 0.2 + state.priceMultiplier,
        }
        


    } else if(action.type == 'BUY_DAMAGE_UPGRADE' && upgrades[price] <= state.caramels) {
        output = {
            ...state, caramels: state.caramels - upgrades[price],
            damagePerShot: state.damagePerShot + upgrades[damage],
        }   
    } else if(action.type == 'NEXT_WAVE' && state.waveGoal <= 0) {

        output = {
            ...state,
            waveNumber: state.waveNumber + 1,
            waveGoal: state.waveGoal * 0.1 + state.waveGoal,
            caramels: state.caramels + 10,
            damageDealt: 0,
        }
    }

    return output;

}

export function CañonProvider({ children }) {
    const [state, dispatch] = useReducer(CañonReducer, initialState);

    useEffect(() => {
        const timer = setInterval(() => {
            dispatch({ type: 'AUTO_SHOT' });
        }, 1000 / state.autoShotsPerSecond);
        return () => clearInterval(timer);
    }, [state.autoShotsPerSecond]);


    return (
        <CañonContext.Provider value={{ state, dispatch }}>
            {children}
        </CañonContext.Provider>
    );
}


export function useCañon() {
    return useContext(CañonContext);
}
