import { createOptimizedPicture } from '../../../../scripts/aem.js';

export default function decorate(element, fieldJson, container, formId) {
  element.classList.add('card');

  const imgPath = new URL(
    '/blocks/form/components/image/card.png',
    import.meta.url,
  ).href;

  element.querySelectorAll('.radio-wrapper').forEach((radioWrapper) => {
    const img = document.createElement('img');
    img.src = imgPath;
    img.alt = 'card-image';
    img.loading = 'lazy';
    radioWrapper.appendChild(img);
  });

  return element;
}