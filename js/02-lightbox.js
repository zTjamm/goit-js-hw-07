import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
const markup = galleryItems.map((img) => `<li><a class="gallery__item" href="${img.original}">
    <img
      class="gallery__image"
      src="${img.preview}"      
      alt="${img.description}"
    />
  </a></li>`).join("");
gallery.insertAdjacentHTML("afterbegin", markup);
let gallerys = new SimpleLightbox('.gallery a',
            {                
                captionsData: 'alt',
                captionDelay: 250,                
            });
gallerys.on('show.simplelightbox');