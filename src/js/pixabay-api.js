import axios from 'axios';
const key = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(page = 1, searchWord) {
  const { data } = await axios(BASE_URL, {
    params: {
      key: key,
      q: searchWord,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 15,
      page,
    },
  });

  return data;
}
