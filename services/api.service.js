'use strict';

import https from 'https';
import { getKeyValue } from './storage.service.js';

async function getWeather(city) {
    const token = await getKeyValue('token');
    if (!token) {
        throw new Error('API key is not set');
    }
    const url = new URL(`https://api.openweathermap.org/data/2.5/weather`);
    url.searchParams.append('q', city);
    url.searchParams.append('appid', token);
    url.searchParams.append('lang', 'ua');
    url.searchParams.append('units', 'metric');
    
    https.get(url, (response) => {
        let res = '';
        response.on('data', (chunk) => {
            res += chunk;
        });

        response.on('end', () => {
            console.log(res);
        });
    });
}

export { getWeather };