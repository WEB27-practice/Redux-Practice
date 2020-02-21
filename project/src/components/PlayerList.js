
import React from "react";
import PlayerCard from "./PlayerCard.js";
import { connect } from "react-redux";


const PlayerList = (props) => {
    
    return (
        <div>
            <h1>Hello from the PlayerList component!!</h1>    
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
    {}
)(PlayerList);
