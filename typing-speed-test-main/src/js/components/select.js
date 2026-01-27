import Choices from "choices.js";

export function choicesInit() {
  document.addEventListener('DOMContentLoaded', () => {
  const selectors = ['.difficulty-select-js', '.mode-select-js'];

  selectors.forEach(selector => {
    const element = document.querySelector(selector);
      if (element) {
      new Choices(element, {
        searchEnabled: false,
        itemSelectText: '',
        shouldSort: false,
      });
    }
  });
});
}

const mediaQuery = window.matchMedia('(max-width: 515px)');

export function handleScreenChange() {
  const logo = document.querySelector('.test__logo');
  const element = document.querySelector('.test__pb-wpm');

  if (mediaQuery.matches) {
    logo.setAttribute('src', './src/assets/images/logo-small.svg');
    element.textContent = 'Best:'
  } 
  else {
    element.textContent = 'Personal Best:'
    logo.setAttribute('src', './src/assets/images/logo-large.svg');
  }
}

mediaQuery.addEventListener('change', handleScreenChange);