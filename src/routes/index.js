const { Router } = require('express');

const router = new Router();

router.get('/test', (req, res) => {
    const data = {
        name: 'ADS',
        website: 'unmsm.com'
    };
    res.json(data);
});  

module.exports = router;
