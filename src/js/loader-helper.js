export const loader = document.querySelector('#loader');

export function showLoader() {
  loader.classList.remove('hidden__css');
}

export function hideLoader() {
  loader.classList.add('hidden__css');
}
