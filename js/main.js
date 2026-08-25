// ===== ПЕРЕКЛЮЧЕНИЕ ТАБОВ =====
document.addEventListener('DOMContentLoaded', () => {
  const tabBtns = document.querySelectorAll('.tabs__btn');
  const tabContents = document.querySelectorAll('.tab-content');

  function switchTab(tabId) {
    // Скрыть все табы
    tabContents.forEach(content => {
      content.classList.remove('tab-content--active');
    });

    // Показать выбранный таб
    const activeTab = document.getElementById(tabId);
    if (activeTab) {
      activeTab.classList.add('tab-content--active');
    }

    // Обновить активный класс кнопок
    tabBtns.forEach(btn => {
      btn.classList.remove('tabs__btn--active');
      if (btn.getAttribute('data-tab') === tabId) {
        btn.classList.add('tabs__btn--active');
      }
    });
  }

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.getAttribute('data-tab');
      switchTab(tabId);
    });
  });

  // ===== АККОРДЕОН =====
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-item__header');

    header.addEventListener('click', () => {
      const isOpen = item.classList.contains('accordion-item--open');

      // Закрыть все другие открытые аккордеоны
      accordionItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('accordion-item--open')) {
          otherItem.classList.remove('accordion-item--open');
        }
      });

      // Переключить текущий
      if (!isOpen) {
        item.classList.add('accordion-item--open');
      } else {
        item.classList.remove('accordion-item--open');
      }
    });
  });
});
