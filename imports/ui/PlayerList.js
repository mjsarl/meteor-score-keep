import React from 'react';
import Player from './../ui/Player';
import PropTypes from 'prop-types';

export default class PlayerList extends React.Component { 
    renderPlayers (){
        let playersList = this.props.players;
        if (playersList.length === 0) {
            return <p>Add a player to get started...</p>;
        } else {
            return playersList.map((player)=>{
                return <Player key={player._id} player={player}/>;
            });
        }
    }
    
    render(){
        return (
            <div>
            {this.renderPlayers()}
            </div>
        )
    }
}

PlayerList.propTypes = {
    players: PropTypes.array.isRequired
}