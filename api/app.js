require('dotenv').config();

const express = require('express');
const os = require('os');
const cors = require('cors');

const app = express();
const port = process.env.port || 5000;

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

app.listen(port, () => {
    console.log(`Backend Server running on port ${port}`);
});