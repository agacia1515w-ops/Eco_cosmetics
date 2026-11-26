'use strict';

import '../styles/main.scss';

const shop = document.querySelector('.shop');

if (shop) {
  const tabs = shop.querySelectorAll('.shop__link');
  const products = shop.querySelectorAll('.shop__product');
  const slider = shop.querySelector('.shop__products');
  const emptyMessage = shop.querySelector('.shop__empty');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const category = tab.dataset.category;
      let hasProducts = false;

      tabs.forEach((item) => {
        const isActive = item === tab;

        item.classList.toggle('shop__link--active', isActive);
        item.setAttribute('aria-pressed', String(isActive));
      });

      products.forEach((product) => {
        const isVisible = product.dataset.product
  .split(' ')
  .includes(category);

        product.hidden = !isVisible;

        if (isVisible) {
          hasProducts = true;
        }
      });

      emptyMessage.hidden = hasProducts;

      slider.scrollTo({
        left: 0,
        behavior: 'instant',
      });
    });
  });
}
import '../styles/main.scss';