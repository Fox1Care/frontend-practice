const mediaQuery = window.matchMedia('(max-width: 515px)');

export function handleScreenChange() {
  const logo = document.querySelector('.test__logo');
  const element = document.querySelector('.test__pb-label');

  if (mediaQuery.matches) {
    element.textContent = 'Best:'
    logo.setAttribute('src', './src/assets/images/logo-small.svg');
  } 
  else {
    element.textContent = 'Personal Best:'
    logo.setAttribute('src', './src/assets/images/logo-large.svg');
  }
}

mediaQuery.addEventListener('change', handleScreenChange);