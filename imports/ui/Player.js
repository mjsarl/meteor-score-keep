import React from 'react';
import PropTypes from 'prop-types';
import {Players} from './../api/players';

export default class Player extends React.Component {
    render() {
        let player = this.props.player;
         return (
                 <div key={player._id} className="item">
                    <div className="player">
                    <div>
                    <h3 className="player__name">
                    {player.name}
                    </h3>
                    <p className="player__stats">
                    {player.score} point(s)
                    </p>
                    </div>
                    <div className="player__actions">
                    <button className="button button--round" onClick={()=> Players.update({_id:player._id},{$set:{score:player.score -= 1}})}>-1</button>
                    <button className="button button--round" onClick={()=> Players.update({_id:player._id},{$set:{score:player.score += 1}})}>+1</button>
                    <button className="button button--round" onClick={()=> Players.remove({_id:player._id})}>X</button>
                    </div>
                    </div>
                 </div>
            );
    }
}

Player.propTypes = {
    player: PropTypes.object.isRequired
}