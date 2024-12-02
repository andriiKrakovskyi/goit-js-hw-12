import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { serviceWeather } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';
import { showWarning, showError } from './js/toast-helper.js';
import { showLoader, hideLoader } from './js/loader-helper.js';

const formSearch = document.querySelector('#myForm');
const gallery = document.querySelector('#gallery');

let lightbox = new SimpleLightbox('.gallery__link', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

formSearch.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  gallery.innerHTML = '';

  const input = event.target.elements.data_input;
  const trimmedInput = input.value.trim();

  if (trimmedInput.length === 0) {
    showWarning();
    return;
  }

  showLoader();

  serviceWeather(trimmedInput)
    .then(data => {
      renderGallery(data.hits);
      if (data.hits.length === 0) {
        showError();
        throw new Error('Invalid input');
      }
    })
    .catch(error => error.message)
    .finally(() => {
      event.target.reset();
      hideLoader();
    });
}

function renderGallery(items) {
  gallery.innerHTML = createMarkup(items);
  lightbox.refresh();
}
