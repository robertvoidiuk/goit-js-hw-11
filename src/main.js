import { getImages } from './js/pixabay-api';
import { renderImages, clearMarkup } from './js/render-functions';
import { showLoader, hideLoader, showMessage } from './js/modules/helpers';

const formEl = document.querySelector('.search-form');

formEl.addEventListener('submit', onSubmitBtn);

function onSubmitBtn(e) {
  e.preventDefault();
  showLoader();
  clearMarkup();

  const userValue = e.target.elements.input.value.trim().split(' ');
  const userWord = userValue.filter(word => word).join('+');

  if (!userWord) {
    clearMarkup();
    showMessage('Error, empty field');
    hideLoader();
    return;
  }
  getImages(userWord)
    .then(res => {
      if (res.hits.length === 0) {
        hideLoader();
        showMessage(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      } else {
        renderImages(res.hits);
      }
    })
    .catch(console.log)
    .finally(() => {
      hideLoader();
    });
  e.target.reset();
}
