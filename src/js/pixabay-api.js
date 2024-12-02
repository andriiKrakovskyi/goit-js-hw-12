import { showError } from './toast-helper.js';

const API_CONFIG = {
  BASE_URL: 'https://pixabay.com/api/',
  API_KEY: '47339247-cdcac9f8981a2af5215025f92',
};

export function serviceWeather(query) {
  const { BASE_URL, API_KEY } = API_CONFIG;

  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}?${params}`).then(response => {
    if (!response.ok) {
      showError();
      throw new Error('Error fetching api');
    }

    return response.json();
  });
}
