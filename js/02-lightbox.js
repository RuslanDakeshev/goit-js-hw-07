import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
     
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join('');
}

galleryEl.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));

new SimpleLightbox('.gallery__link', {
  captionsData: `alt`,
  captionDelay: 250,
});
