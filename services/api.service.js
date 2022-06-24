'use strict';

import axios from 'axios';
import { getKeyValue } from './storage.service.js';

async function getWeather(city) {
    const token = await getKeyValue('token');
    if (!token) {
        throw new Error('API key is not set');
    }
    const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: city,
            appid: token,
            lang: 'ua',
            units: 'metric'
        }
    });
    return data;
}

export { getWeather };