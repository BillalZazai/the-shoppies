import React, {useState} from "react";


const NominationsContext = React.createContext (undefined);

export const NominationsProvider = (props) => {
    const [nominationsState, setNominationsState] =  useState ([])

    const clearNominationsState =  () =>{
        setNominationsState ([])
    } 

    const doesNominationExist = (nomination) => {
            return nominationsState.some ( (movie)=>{ return ( (movie.imdbID=== nomination.imdbID) && (movie.Year=== nomination.Year) )} )
    }

    const getNominationInfo = (id) => {
        return nominationsState.find ( (movie)=> movie.imdbID===id )
    }

    const removeNominationFromState = (imdbID) => {
        let newNominations = nominationsState.filter ( (movie)=>{return (movie.imdbID !== imdbID) } )
        setNominationsState (newNominations)
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

    
    return (
        <NominationsContext.Provider value= {{
            nominations: nominationsState,
            setNominations: setNominationsState,
            clearNominations: clearNominationsState,
            sortNominations : sortNominationsState,
            removeNomination : removeNominationFromState,
            doesNominationExist: doesNominationExist, 
            getNominationInfo: getNominationInfo
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