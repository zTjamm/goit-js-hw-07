import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
const markup = galleryItems.map((img) => `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${img.preview}"
      data-source="${img.original}"
      alt="Image description"
    />
  </a>
</div>`).join("");
gallery.insertAdjacentHTML("afterbegin", markup)
gallery.addEventListener("click", openModal);

function openModal (event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    } else {
        const urlOrig = event.target.dataset.source;
        basicLightbox.create(`<img src="${urlOrig}">`).show();        
        console.log(event.target.dataset.source)
    } 
  
    
}
// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">`)
// instance.show()
// basicLightbox.create(`<img width="1400" height="900" src="https://placehold.it/1400x900">`).show()