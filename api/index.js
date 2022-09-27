import express from 'express';
import fetch from 'node-fetch';

import EmissionService from './services/emission.service.js';

var app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(4200);

var service = new EmissionService();

app.get('/names', async function(req, res) {
    var names = await service.getNames();

    res.send(names);
});

app.get('/data-range/:name', async function(req, res) {
    var ranges = await service.getDataRangeByName(req.params.name);

    res.send(ranges);
});

app.get('/average/:name', async function(req, res) {
    var avgs = await service.getAverageByName(req.params.name);

    res.send(avgs);
});

app.get('/geo/:name', async function(req, res) {
    var geos = await service.getGeoByName(req.params.name);

    res.send(geos);
});

app.get('/stats/:name', async function(req, res) {
    var stats = await service.getStatisticsByName(req.params.name);

    res.send(stats);
});
