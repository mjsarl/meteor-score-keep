import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Players} from './../imports/api/players';



Meteor.startup(function(){
    let title = 'Score Keeper';
   
    const renderPlayers = function (playersList){
        let pcount = 0;
        return playersList.map(function (player){
            pcount += 1;
            return <p key={player._id}>{pcount}) {player.name} has {player.score} point(s)</p>;
        });
    };

    Tracker.autorun(function (){
        let dbPlayers = Players.find().fetch();
        let jsx = (
            <div>
                <h1>{title}</h1>
                {renderPlayers(dbPlayers)}
            </div>
            );
            ReactDOM.render(jsx, document.getElementById('app'));
    });

    Players.insert({
        name: 'Joshua',
        score: 210
    });
});


