const mongo = require('mongoose');
const Team = require('./Team');
const Match = require('./Match');

const Schema = mongo.Schema

const Tournament = new Schema({
    title : String,
    startDay : Number,
    startMonth : Number,
    startYear : Number,
    endDay : Number,
    endMonth : Number,
    endYear : Number,
    trophy : String,
    teams : [Team],
    matches : [Match]
    
})

module.exports = mongo.model('tournament',Tournament);