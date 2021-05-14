import React from 'react'
import {useNominationsList} from "../../context/NominationsContext"
import ListGroup from "react-bootstrap/ListGroup"

export const Nominations = () =>{
    const {nominations} = useNominationsList ()

    let renderNominations = nominations.length > 0 ? nominations.map ( (movie)=>{ return (<ListGroup.Item> {movie.Title} </ListGroup.Item>) } ) : "No nominations"
    
    return (
        <React.Fragment>
        <h1 style= {{textAlign:"center"}}>Nominations</h1>
        <ListGroup>
            {
                renderNominations
            }
        </ListGroup>
        
        
        </React.Fragment>
    )
}