import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Players} from './../imports/api/players';



Meteor.startup(()=>{
    let title = 'Score Keeper';
   
    const renderPlayers = (playersList)=>{
        let pcount = 0;
        return playersList.map((player)=>{
            pcount += 1;
            return (
                <p key={player._id}>
                {pcount}) {player.name} has {player.score} point(s)
                <button onClick={()=> Players.remove({_id:player._id})}>X</button>
                </p>
            );
        });
    };

    const handleSubmit = (e)=>{
        let name = e.target.playerName.value;
        e.preventDefault();
        if(name) {
            e.target.playerName.value = '';
            Players.insert({
                name: name,
                score: 0
            });
        }

    };

    Tracker.autorun(()=>{
        let dbPlayers = Players.find().fetch();
        let jsx = (
            <div>
                <h1>{title}</h1>
                {renderPlayers(dbPlayers)}
                <form onSubmit={handleSubmit}>
                    <input type="text" name="playerName" placeholder="Player name"/>
                    <button>Add Player</button>
                </form>
            </div>
            );
            ReactDOM.render(jsx, document.getElementById('app'));
    });
});


