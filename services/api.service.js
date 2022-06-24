'use strict';

import axios from 'axios';
import { getKeyValue } from './storage.service.js';

async function getIcon(iconId) {
    const ICONS = {
        '01': '☀️',
		'02': '🌤️',
		'03': '☁️',
		'04': '☁️',
		'09': '🌧️',
		'10': '🌦️',
		'11': '🌩️',
		'13': '❄️',
		'50': '🌫️'
    };
    return ICONS[iconId.slice(0, -1)];
}

async function getWeather(city) {
    const token = process.env.TOKEN ??await getKeyValue('token');
    if (!token) {
        throw new Error('API key is not set');
    }
    const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: city,
            appid: token,
            lang: 'en',
            units: 'metric'
        }
    });
    return data;
}

export { getWeather, getIcon };