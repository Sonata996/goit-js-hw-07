import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const ulGallery = document.querySelector('.gallery')
ulGallery.addEventListener("click", onOpenModalWindowClick)

const markupGallery = ({ preview, original, description }) => `
<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`

const listImg = galleryItems.reduce((acc, elem) => acc + markupGallery(elem),[])
ulGallery.insertAdjacentHTML('beforeend', listImg)

function onOpenModalWindowClick(event) {
  event.preventDefault()
    if (event.target.src === event.target.dataset.source) {
        return
    }

    const instance = basicLightbox.create(`
    <div class="modal">
    <img src='${event.target.src}' width="600" height="400">
    </div>
`)
    instance.show()
}

