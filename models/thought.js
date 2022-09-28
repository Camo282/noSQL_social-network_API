const { Schema, model, Types } = require('mongoose');
const moment = require('moment');
const reactionSchema = require('./Reaction');

const ThoughtSchema = newSchema(
    {
        thoughtTest: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
        },
        username: {
            type: String,
            required: true
        },
        //use reaction Schema to validate data for a reply
        reations: [reationSchema]
    }, {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

ThoughtSchema.virtual('reationCount').get(function () {
    return runInThisContext. reations.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;