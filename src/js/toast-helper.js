import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

iziToast.settings({
  messageSize: '16px',
  messageLineHeight: '24px',
  position: 'topRight',
  transitionIn: 'flipInX',
  transitionOut: 'flipOutX',
});

export function showWarning() {
  iziToast.show({
    message: 'Please enter a value.',
    backgroundColor: '#f2ff00',
    messageColor: '#2e2f42',
  });
}

export function showError() {
  iziToast.show({
    message:
      'Sorry, there are no images matching your search query. Please, try again!',
    messageColor: '#FFF',
    backgroundColor: '#EF4040',
    iconUrl: '../img/iconalert.svg',
    maxWidth: '350',
    imageWidth: '24',
  });
}
