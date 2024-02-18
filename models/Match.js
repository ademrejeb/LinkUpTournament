const mongo = require('mongoose');
const Team = require('./Team');
const Result = require('./Result');
const Tournament = require('./Tournament');

const Schema = mongo.Schema

const Match = new Schema({
    
    team1 : Team,
    team2 : Team,
    startDay : Number,
    startMonth : Number,
    startYear : Number,
    endDay : Number,
    endMonth : Number,
    endYear : Number,
    result : Result,
    tournament : Tournament
    
})

module.exports = mongo.model('match',Match);