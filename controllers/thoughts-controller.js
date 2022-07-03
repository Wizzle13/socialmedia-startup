const { Thought } = require('../models');

const thoughtController ={
// gets all the Thoughts
    getAllThoughts(req, res) {
        Thought.find({})
        
        .select('-__v') // removes `__v` from displaying
        .then(dbSocialMedia => res.json(dbSocialMedia))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },

    // gets 1 Thoughts by id
    getThoughtsById({params}, res) {
        Thought.findOne({_id: params.id})
            .select('-__v') // removes `__v` from displaying
            .then(dbSocialMedia => {
            // if no Thought is found , send 404
            if (!dbSocialMedia) {
                res.status(404).json({message: 'NoThought found with this id! 😞'});
                return;
            }
            res.json(dbSocialMedia);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },

    // create Thought
    createThought({ body }, res) {
        Thought.create(body)
        // push thought id to user
            .then(dbSocialMedia => res.json(dbSocialMedia))
            .catch(err => res.status(400).json(err));
    },
    
    // update Thought
    updateThought({params, body}, res) {
        Thought.findOneAndUpdate({_id: params.id}, body, {new: true})
            .then(dbSocialMedia => {
                if (!dbSocialMedia) {
                    res.status(400).json({message: 'No Thought found with this id! 😞'});
                    return;
                }
                res.json(dbSocialMedia);
            })
            .catch(err => res.status(400).json(err));
    },

    // delete Thought
    deleteThought({ params}, res) {
        Thought.findOneAndDelete({_id: params.id})
            .then(dbSocialMedia => {
                if (!dbSocialMedia) {
                    res.status(400).json({message: 'No Thought found with this id! 😞'});
                    return;
                }
                res.json(dbSocialMedia)
            })
            .catch(err => res.status(400).json(err));
    }
};

module.exports = thoughtController;