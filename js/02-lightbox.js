import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const ulGallery = document.querySelector('.gallery')
ulGallery.addEventListener('click', onOpenSliderWIndowClicl)

const markupGallery = ({ preview, original, description }) => 
`<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}"/>
   </a>
</li>`.join('')

const downloadMarkupGallery = galleryItems.reduce((acc, elem) => acc + markupGallery(elem), [])
ulGallery.insertAdjacentHTML("beforeend", downloadMarkupGallery)

function onOpenSliderWIndowClicl() {
    
}
const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
})