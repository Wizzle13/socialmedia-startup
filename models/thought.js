// pulls specific parts of mongoose that will be used
const { Schema, model, SchemaTypes } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ThoughtsSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            // set charater lenth between 1 - 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
        username: {
            type: String,
            required: true,
            trim: true
        },
        reactions: []
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

const Thoughts = model('Thoughts', ThoughtsSchema);

module.exports = Thoughts;