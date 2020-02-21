
import React, { useState } from "react";
import { connect } from "react-redux";

import { postPlayer } from "../actions";

const PlayerForm = (props) => {
    
    const [player, setPlayer] = useState({
        name: '',
        rank: '',
        nickname: ''
    });
       

    const inputHandler = e => {
        setPlayer({ [e.target.name]: e.target.value })
    }

    const submitHandler = e => {
        e.preventDefault();
        props.postPlayer(player);
    }

    return (
        <div>
            <form id="playerForm">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    label="name"
                    placeHolder="Lionel Messi"
                    value={props.name}
                    onChange={inputHandler}
                    className="input"
                />
                <label htmlFor="rank">Rank</label>
                <input
                    type="text"
                    name="rank"
                    label="rank"
                    placeHolder="1"
                    value={props.rank}
                    onChange={inputHandler}
                    className="input"
                />
                <label htmlFor="nickname">Nickname</label>
                <input
                    type="text"
                    name="nickname"
                    label="nickname"
                    placeHolder="La Pulga"
                    value={props.nickname}
                    onChange={inputHandler}
                    className="input"
                />
                <button onClick={submitHandler} className="btn">Add a player</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        players: state.players,
        errors: state.errors
    }
}

export default connect(
    mapStateToProps,
    { postPlayer }
)(PlayerForm);
