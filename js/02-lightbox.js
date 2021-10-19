import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
const markup = galleryItems.map((img) => `<a class="gallery__item" href="${img.original}">
    <img
      class="gallery__image"
      src="${img.preview}"      
      alt="${img.description}"
    />
  </a>`).join("");
gallery.insertAdjacentHTML("afterbegin", markup);
let gallerys = new SimpleLightbox('.gallery a',
            {
                captions: true,
                captionsData: 'alt',
                captionDelay: 250,
                captionPosition: 'bottom',
            });
gallerys.on('show.simplelightbox');