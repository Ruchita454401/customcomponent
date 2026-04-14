import { createOptimizedPicture } from '../../../../scripts/aem.js';

export default function decorate(element, fieldJson, container, formId) {
  element.classList.add('card');

  const basePath = window.hlx?.codeBasePath || '';
  const imgSrc = `${basePath}/blocks/form/components/image/card.png`;

  element.querySelectorAll('.radio-wrapper').forEach((radioWrapper) => {
    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = 'card-image';
    img.loading = 'lazy';
    radioWrapper.appendChild(img);
  });

  return element;
}