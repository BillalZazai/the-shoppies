import React, {useState} from "react";


const NominationsContext = React.createContext (undefined);

export const NominationsProvider = (props) => {
    const [nominationsState, setNominationsState] =  useState ([])

    const clearNominationsState =  () =>{
        setNominationsState ([])
    } 

    const sortNominationsState = () => {
        let sortedMovies = [...nominationsState].sort ((a,b)=> {
            if (a.Title < b.Title) {
                return -1
            }
            else if (b.Title > a.Title) {
                return 1
            }
            else {
                return 0
            }
        })

        setNominationsState (sortedMovies)
    }

    const removeNominationFromState = (title, year) => {
        let newNominations = nominationsState.filter ( (movie)=>{return (movie.Title !== title && movie.Year !== year) } )
        setNominationsState (newNominations)
    }
    return (
        <NominationsContext.Provider value= {{
            nominations: nominationsState,
            setNominations: setNominationsState,
            clearNominations: clearNominationsState,
            sortNominations : sortNominationsState,
            removeNomination : removeNominationFromState
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