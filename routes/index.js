const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// display error if 40 status comes back
router.use((req, res) => {
    res.status(404).send('<h1>😝 404 Error!!</h1>');
});

// exports the router module 
module.exports = router;