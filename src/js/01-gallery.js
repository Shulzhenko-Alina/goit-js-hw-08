// Add imports above this line

// import { galleryItems } from "./gallery-items.js";
// // Change code below this line

// const galleryContainerEl = document.querySelector(".gallery");
// const imagesMarkup = createItemsMarkup(galleryItems);
// galleryContainerEl.insertAdjacentHTML("beforeend", imagesMarkup);

// function createItemsMarkup(item) {
//   return galleryItems
//     .map(({ preview, original, description }) => {
//       return `<div class="gallery__item">
//       <a class="gallery__link" href="${original.value}">
//         <img
//           class="gallery__image"
//           src="${preview}"
//           data-source="${original}"
//           alt="${description}"
//         />
//       </a>
//     </div>`;
//     })
//     .join("");
// }
// const onContainerClick = (e) => {
//   e.preventDefault();

//   if (e.target.classList.contains("gallery")) return;
//     const source = e.target.dataset.source;
    
//   const instance = basicLightbox.create(`
//     <img src="${source}"width="800" height="600">`);

//   instance.show();
// };

// galleryContainerEl.addEventListener("click", onContainerClick);

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';

document.addEventListener('DOMContentLoaded', function () {
  const galleryContainerEl = document.querySelector('.gallery');
  const imagesMarkup = createItemsMarkup(galleryItems);
  galleryContainerEl.insertAdjacentHTML('beforeend', imagesMarkup);

  const lightbox = new SimpleLightbox('.gallery a');

  function createItemsMarkup(items) {
    return items
      .map(({ preview, original, description }) => {
        return `<div class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </div>`;
      })
      .join('');
  }

  galleryContainerEl.addEventListener('click', onContainerClick);

  function onContainerClick(event) {
    event.preventDefault();

    if (event.target.classList.contains('gallery__image')) {
      const source = event.target.dataset.source;

      lightbox.open({ source });
    }
  }
});