require('dotenv').config();

const express = require('express');
const os = require('os');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: true }));

app.get('/api/number', (req, res) => {
    return res.json({ 'number': (Math.floor(Math.random() * 100)) });
});

app.get('/api/info', (req, res) => {
    const info = {
        tmpdir: os.tmpdir(),
        type: os.type(),
        arch: os.arch(),
        release: os.release(),
        cpus: os.cpus(),
        totalmem: os.totalmem(),
        freemem: os.freemem(),
        loadavg: os.loadavg(),
        homedir: os.homedir(),
        platform: os.platform(),
        availableParallelism: os.availableParallelism(),
    }

    return res.json(info);

});

app.all('*', (req, res) => {
    return res.status(404).json({ 'message': 'Invalid Route' });
});

const server = app.listen(PORT, () => {
    console.log(`Backend server running on port ${PORT}`);
});

module.exports = {
    app,
    server
};