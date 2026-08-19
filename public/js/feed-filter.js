const FILTER_MAP = {
  uutiset: ['news', 'analysis'],
  news: ['news', 'analysis'],
  interviews: ['interviews'],
  tools: ['tools'],
};

function initFeedFilter() {
  const tabs = document.querySelectorAll('[data-filter-tab]');
  const feed = document.querySelector('[data-feed]');
  if (!feed) return;

  tabs.forEach((tab) => {
    const button = tab;
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter-tab') || 'all';

      tabs.forEach((t) => {
        const btn = t;
        btn.setAttribute('aria-selected', btn === button ? 'true' : 'false');
        if (btn === button) {
          btn.classList.add('border-cyan-400', 'text-cyan-300');
          btn.classList.remove('border-transparent', 'text-[var(--color-text-dim)]');
        } else {
          btn.classList.remove('border-cyan-400', 'text-cyan-300');
          btn.classList.add('border-transparent', 'text-[var(--color-text-dim)]');
        }
      });

      const cards = feed.querySelectorAll('[data-category]');
      const showCategories = filter === 'all' ? null : FILTER_MAP[filter];
      cards.forEach((card) => {
        const cardCategory = card.getAttribute('data-category');
        const visible = showCategories === null || showCategories.includes(cardCategory || '');
        card.style.display = visible ? '' : 'none';
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', initFeedFilter);
