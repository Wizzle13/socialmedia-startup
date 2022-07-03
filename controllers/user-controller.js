const { User } = require('../models');

const userController = {
    // gets all the users
    getAllUsers(req, res) {
        User.find({})
        
        .select('-__v') // removes `__v` from displaying
        .then(dbSocialMedia => res.json(dbSocialMedia))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },

    // gets 1 user by id
    getUserById({params}, res) {
        User.findOne({_id: params.id})
            .select('-__v') // removes `__v` from displaying
            .then(dbSocialMedia => {
            // if no User is found , send 404
            if (!dbSocialMedia) {
                res.status(404).json({message: 'No user found with this id! 😞'});
                return;
            }
            res.json(dbSocialMedia);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },

    // create user
    createUser({ body }, res) {
        User.create(body)
            .then(dbSocialMedia => res.json(dbSocialMedia))
            .catch(err => res.status(400).json(err));
    },

    // update user
    updateUser({params, body}, res) {
        User.findOneAndUpdate({_id: params.id}, body, {new: true})
            .then(dbSocialMedia => {
                if (!dbSocialMedia) {
                    res.status(400).json({message: 'No User found with this id! 😞'});
                    return;
                }
                res.json(dbSocialMedia);
            })
            .catch(err => res.status(400).json(err));
    },

    // delete User
    deleteUser({ params}, res) {
        User.findOneAndDelete({_id: params.id})
            .then(dbSocialMedia => {
                if (!dbSocialMedia) {
                    res.status(400).json({message: 'No User found with this id! 😞'});
                    return;
                }
                res.json(dbSocialMedia)
            })
            .catch(err => res.status(400).json(err));
    }
};

module.exports = userController;