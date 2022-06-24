'use strict';

import { homedir } from 'os';
import { join } from 'path';
import { promises } from 'fs';

const configPath = join(homedir(), '/.CONFIG_WeatherCLI.json');

async function isExist(path) {
    try {
        await promises.stat(path);
        return true;
    } catch (err) {
        return false;
    }
}

async function getKeyValue(key) {
    if (await isExist(configPath)) {
        const file = await promises.readFile(configPath);
        const data = JSON.parse(file);
        return data[key];
    }
    return undefined;
}

async function saveKeyValue(key, value) {
    let data = {};
    if (await isExist(configPath)) {
        const file = await promises.readFile(configPath);
        data = JSON.parse(file);
    }
    data[key] = value;
    await promises.writeFile(configPath, JSON.stringify(data));
}

export { saveKeyValue, getKeyValue };