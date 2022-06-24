'use strict';

import chalk from 'chalk';
import dedent from 'dedent';
import { capitilize } from '../helpers/capitalize.js';
import { getIcon } from './api.service.js';

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

async function printWeather(res) {
    console.log(
        dedent`${chalk.bgYellow(' WEATHER ')} Weather in ${res.name}
        ${await getIcon(res.weather[0].icon)}  ${capitilize(res.weather[0].description)}
        Temperature: ${res.main.temp}°C (feels like ${res.main.feels_like}°C)
        Humidity: ${res.main.humidity}%
        Wind speed: ${res.wind.speed} m/sec
        `
    ); 
}

export { printError, printSuccess, printHelp, printWeather };