import { createOptimizedPicture } from '../../../../scripts/aem.js';

export default function decorate(element, fieldJson, container, formId) {
  element.classList.add('card');

  element.querySelectorAll('.radio-wrapper').forEach((radioWrapper) => {
    const img = document.createElement('img');
    img.src = '/blocks/form/components/image/card.png';
    img.alt = 'card-image';
    img.loading = 'lazy';
    radioWrapper.appendChild(img);
  });

  return element;
}