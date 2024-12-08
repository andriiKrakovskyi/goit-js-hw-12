export const loader = document.querySelector('#loader');
export const loaderShow = document.querySelector('#loaderShow');

export function showLoader() {
  loader.classList.remove('hidden__css');
}

export function hideLoader() {
  loader.classList.add('hidden__css');
}

export function show() {
  loaderShow.classList.remove('hidden__css');
}

export function hide() {
  loaderShow.classList.add('hidden__css');
}
