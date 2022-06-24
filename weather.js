#!/usr/bin/env node
'use strict';

import { getArgs } from "./helpers/args.js";
import { printHelp } from "./services/log.service.js";

function initCLI() {
    const args = getArgs(process.argv);
    console.log(args);
    if (args.h) {
        printHelp();
    }
    if (args.s) {
        // save city
    }
    if (args.t) {
        // token
    }
    // show weather
};

initCLI();