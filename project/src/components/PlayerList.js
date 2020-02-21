
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
            <PlayerCard />
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
