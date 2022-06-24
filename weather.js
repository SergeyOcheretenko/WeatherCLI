#!/usr/bin/env node
'use strict';

import { getArgs } from "./helpers/args.js";
import { printHelp, printSuccess, printError } from "./services/log.service.js";
import { saveKeyValue } from "./services/storage.service.js";

async function saveToken(token) {
    try {
        await saveKeyValue('token', token);
        printSuccess('Token saved');
    } catch (err) {
        printError(err.message);
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
    // show weather
};

initCLI();