const router = require('express').Router();
const {
    getAllThoughts,
    createThought,
    getThoughtsById,
    updateThought,
    deleteThought
} = require('../../controllers/thoughts-controller');

// setup all get and post routes for `/api/thoughts`
router
    .route('/')
    .get(getAllThoughts)
    .post(createThought);

// setup get put and delete for api/thoughts/:id 
router
    .route('/:id')
    .get(getThoughtsById)
    .put(updateThought)
    .delete(deleteThought);

module.exports = router;  