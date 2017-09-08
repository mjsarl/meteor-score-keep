import React from 'react';
import FlipMove from 'react-flip-move';
import Player from './../ui/Player';
import PropTypes from 'prop-types';

export default class PlayerList extends React.Component { 
    renderPlayers (){
        let playersList = this.props.players;
        if (playersList.length === 0) {
            return (
                <div className="item">
                    <p className="item__message">Add a player to get started...</p>
                </div>
            );
        } else {
            return playersList.map((player)=>{
                return <Player key={player._id} player={player}/>;
            });
        }
    }
    
    render(){
        return (
                <div>
                <FlipMove maintainContainerHeight={true}>
                    {this.renderPlayers()}
                </FlipMove>
                </div>
            
        )
    }
}

PlayerList.propTypes = {
    players: PropTypes.array.isRequired
}