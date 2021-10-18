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
gallery.insertAdjacentHTML("afterbegin", markup)

gallery.addEventListener("click", openModal);
function openModal(event) {    
    event.preventDefault();
    if (event.target.nodeName === "IMG") {
        let gallerys = new SimpleLightbox('.gallery a',
            {
                captionType: Attr,
                captionsData: event.target.alt,
                captionDelay: 250,
            });
        gallerys.on('show.simplelightbox');
        console.log(event.target.alt)
    } else {
        console.log("lol")
    }     
}
  