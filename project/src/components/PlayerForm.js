
import React from "react";
import { connect } from "react-redux";


const PlayerForm = (props) => {
    
    return (
        <div>
            <h1>Hello from the PlayerForm component!!</h1>    
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
    {}
)(PlayerForm);
