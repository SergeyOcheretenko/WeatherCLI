#!/usr/bin/env node
'use strict';

import { getArgs } from "./helpers/args.js";
import { getWeather } from "./services/api.service.js";
import { printHelp, printSuccess, printError } from "./services/log.service.js";
import { saveKeyValue } from "./services/storage.service.js";

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

async function getForcast() {
    try {
        const weather = await getWeather('kiev');
        console.log(weather);
    } catch (err) {
        if (err?.response?.status == 404) {
            printError('Incorrect city specified');
        } else if (err?.response?.status == 401) {
            printError('Incorrect token specified');
        } else {
            printError(e.message);
        }
    }
}

function initCLI() {
    const args = getArgs(process.argv);
    if (args.h) {
        printHelp();
    }
    if (args.s) {
        // save city
    }
    if (args.t) {
        return saveToken(args.t);
    }
    getForcast();
};

initCLI();