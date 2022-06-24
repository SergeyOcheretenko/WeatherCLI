#!/usr/bin/env node
'use strict';

import { getArgs } from "./helpers/args.js";
import { getWeather } from "./services/api.service.js";
import { printHelp, printSuccess, printError, printWeather } from "./services/log.service.js";
import { getKeyValue, saveKeyValue } from "./services/storage.service.js";

async function saveToken(token) {
    if (!token.length) {
        printError('Token not specified');
        return;
    }
    try {
        await saveKeyValue('token', token);
        printSuccess('Token saved');
    } catch (err) {
        printError(err.message);
    }
}

async function saveCity(city) {
    if (!city.length) {
        printError('City not specified');
        return;
    }
    try {
        await saveKeyValue('city', city);
        printSuccess('City saved');
    } catch (err) {
        printError(err.message);
    }
}

async function getForcast() {
    try {
        const city = process.env.CITY ?? await getKeyValue('city');
        const weather = await getWeather(city);
        printWeather(weather);
    } catch (err) {
        if (err?.response?.status == 404) {
            printError('Incorrect city specified');
        } else if (err?.response?.status == 401) {
            printError('Incorrect token specified');
        } else {
            printError(err.message);
        }
    }
}

function initCLI() {
    const args = getArgs(process.argv);
    if (args.h) {
        printHelp();
    }
    if (args.s) {
        return saveCity(args.s);
    }
    if (args.t) {
        return saveToken(args.t);
    }
    getForcast();
};

initCLI();