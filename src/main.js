import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImages } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';
import { showWarning, showError } from './js/toast-helper.js';
import { showLoader, hideLoader, show, hide } from './js/loader-helper.js';

const key = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://pixabay.com/api/';

const formSearch = document.querySelector('#myForm');
const gallery = document.querySelector('#gallery');
const loadMoreBtn = document.querySelector('#buttonLoadMore');
const showTheEnd = document.querySelector('.show__the__end');

let lightbox = new SimpleLightbox('.gallery__link', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

formSearch.addEventListener('submit', onFormSubmit);
loadMoreBtn.addEventListener('click', handleClick);

let page = 0;
let per_page = 150;
let totalImages = 0;
let totalPages;
let searchWord = '';
let cardHeight;

async function onFormSubmit(event) {
  event.preventDefault();
  gallery.innerHTML = '';
  page = 1;
  searchWord = event.target.elements.data_input.value.trim();

  if (searchWord.length === 0) {
    hideEndMessage();
    showWarning();
    hideLoadMoreButton();
    return;
  }

  try {
    showLoader();
    const posts = await fetchImages(page, searchWord);
    validateApiResponse(posts, posts.hits);
    const hits = posts.hits;
    checkHitsAndShowError(hits);
    totalImages = posts.totalHits;
    totalPages = Math.ceil(totalImages / per_page);
    page++;

    renderGallery(hits);
    cardHeight = gallery.firstElementChild.getBoundingClientRect().height;

    if (page <= totalPages) {
      showLoadMoreButton();
    }
  } catch (error) {
    showError(error.message);
    hideEndMessage();
    hideLoadMoreButton();
  } finally {
    event.target.reset();
    hideLoader();
  }
}

async function handleClick() {
  console.log('totalPages', totalPages - page);
  if (totalPages <= page) {
    hideLoadMoreButton();
    showEndMessage();
    return;
  }

  hideLoadMoreButton();
  loadMoreBtn.disabled = true;

  try {
    show();
    const posts = await fetchImages(page, searchWord);

    checkHitsAndShowError(posts.hits);
    hide();
    renderGallery(posts.hits);

    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
    showLoadMoreButton();
    page++;
  } catch (error) {
    showError(error.message);
    hideEndMessage();
    hideLoadMoreButton();
  } finally {
    loadMoreBtn.disabled = false;
  }
}

function checkHitsAndShowError(hits) {
  if (hits.length === 0) {
    throw new Error(
      'Sorry, there are no images matching your search query. Please, try again!'
    );
  }
}

function renderGallery(items) {
  const markup = createMarkup(items);
  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

function validateApiResponse(posts, hits) {
  if (!posts || !Array.isArray(hits)) {
    throw new Error('Invalid data structure from API');
  }
}

function showLoadMoreButton() {
  loadMoreBtn.classList.remove('button__none');
}

function hideLoadMoreButton() {
  loadMoreBtn.classList.add('button__none');
}

function showEndMessage() {
  showTheEnd.classList.remove('show__the__end__none');
}

function hideEndMessage() {
  showTheEnd.classList.add('show__the__end__none');
}
