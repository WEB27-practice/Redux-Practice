
import React, { useEffect } from "react";
import PlayerCard from "./PlayerCard.js";
import { connect } from "react-redux";

import { fetchPlayers } from "../actions";

const PlayerList = (props) => {
    console.log(props)

    useEffect(() => {
        props.fetchPlayers()
    }, [])


    return (
        <div>
            <h1 className="title">Soccer players app</h1>
            <div className="card-container">
                {props.players.map(player => (
                    <PlayerCard player ={player}/>
                ))}
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        players: state.players,
        isFetching: state.isFetching,
        errors: state.errors
    }
}

export default connect(
    mapStateToProps, 
    { fetchPlayers }
)(PlayerList);
