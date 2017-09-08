import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Players, calculatePlayerPositions} from './../imports/api/players';
import App from './../imports/ui/App';

Meteor.startup(()=>{
    let title = 'Score Keeper';
   
    Tracker.autorun(()=>{
        let players = Players.find({},{
            sort:{
                score:-1,
                name:1
            }
        }).fetch();
        let dbPlayers = calculatePlayerPositions(players);
        ReactDOM.render(<App title={title} players={dbPlayers}/>, document.getElementById('app'));
    });
});
