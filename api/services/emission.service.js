import 'express';
import 'https';
import fetch from 'node-fetch';

var api_address = 'https://api.v2.emissions-api.org/api/v2/';

export default class EmissionService {
    constructor() {
    }

    async getApi(path) {
        var data = await fetch(api_address + path);
        var api = await data.json();

        return api;
    }

    async getNames() {
        var names = [];
        var products = await this.getApi('products.json');

        for (var prod of products) {
            names.push(prod.name);
        }

        return names;
    }

    async getAverageByName(name) {
        var average = await this.getApi(name + '/average.json');

        return average;
    }

    async getDataRangeByName(name) {
        var data_range = await this.getApi(name + '/data-range.json');

        return data_range;
    }

    async getGeoByName(name) {
        var geo = await this.getApi(name + '/geo.json');

        return geo;
    }

    async getStatisticsByName(name) {
        var stats = await this.getApi(name + '/statistics.json');

        return stats;
    }
}
