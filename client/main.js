import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Players} from './../imports/api/players';
import App from './../imports/ui/App';

Meteor.startup(()=>{
    let title = 'Score Keeper';
   
    Tracker.autorun(()=>{
        let dbPlayers = Players.find().fetch();
        ReactDOM.render(<App title={title} players={dbPlayers}/>, document.getElementById('app'));
    });
});
