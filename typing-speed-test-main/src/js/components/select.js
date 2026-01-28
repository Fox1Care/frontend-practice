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

