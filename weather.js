#!/usr/bin/env node
'use strict';

import { getArgs } from "./helpers/args.js";

function initCLI() {
    const args = getArgs(process.argv);
    console.log(args);
    if (args.h) {
        // help
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