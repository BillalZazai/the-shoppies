import React, {useState} from "react";


const NominationsContext = React.createContext (undefined);

export const NominationsProvider = (props) => {
    const [nominationsState, setNominationsState] =  useState ([])
    return (
        <NominationsContext.Provider value= {{
            nominations: nominationsState,
            setNominations: setNominationsState
        }}>
            {props.children}
        </NominationsContext.Provider>
    );

}

export const useNominationsList = ()=> {
    const context = React.useContext(NominationsContext);
    if (context === undefined) {
        throw new Error("useNominationsList must be used within a NominationsProvider");
    }
    return context;
}