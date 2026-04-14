import { createOptimizedPicture } from '../../../../scripts/aem.js';

export default function decorate(element, fieldJson, container, formId) {
  element.classList.add('card');

  element.querySelectorAll('.radio-wrapper').forEach((radioWrapper) => {
    const image = createOptimizedPicture(
      'https://main--customcomponent--ruchita454401.aem.live/blocks/form/components/image/card.png',
      'card-image',
    );
    radioWrapper.appendChild(image);
  });

  return element;
}
