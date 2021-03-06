'use strict';

import axios from 'axios';
import { getKeyValue } from './storage.service.js';

async function getIcon(iconId) {
    const ICONS = {
        '01': 'âī¸',
		'02': 'đ¤ī¸',
		'03': 'âī¸',
		'04': 'âī¸',
		'09': 'đ§ī¸',
		'10': 'đĻī¸',
		'11': 'đŠī¸',
		'13': 'âī¸',
		'50': 'đĢī¸'
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