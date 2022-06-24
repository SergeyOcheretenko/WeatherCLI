'use strict';

import chalk from 'chalk';
import dedent from 'dedent';

function printError(error) {
    console.log(chalk.bgRed(' ERROR ') + ` ${error}`);
}

function printSuccess(message) {
    console.log(chalk.bgGreen(' SUCCESS ') + ` ${message}`);
}

function printHelp() {
    console.log(
        dedent`${chalk.bgCyan(' HELP ')}
        Without parameters - display the weather
        -s [CITY] - set a new city
        -h - get help
        -t [API_KEY] - set token
        `
    );  
}

export { printError, printSuccess, printHelp }