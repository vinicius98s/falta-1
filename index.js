const express = require('express');
const app = express();
const logger = require('morgan');
const axios = require('axios');

app.use(logger('dev'));

app.get('/users', (req, res) => {
    axios.get('https://randomuser.me/api/?results=117&nat=br&inc=name,email,picture,registered')
        .then(result => res.send(result.data.results))
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`We are running on ${PORT}`));