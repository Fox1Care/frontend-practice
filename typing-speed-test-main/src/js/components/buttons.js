export function btnInitState() {
  document.querySelectorAll(['.difficulty-btn-js', '.mode-btn-js']).forEach(btn => {
    btn.addEventListener('click', () => {
      btnHandleState(btn);
    });
  })
}

function btnHandleState(btn) {
  const selectedBtn = btn;
  const elementsGroup = [...document.querySelectorAll(`.${btn.classList[2]}`)];

  elementsGroup.forEach((element) => {
    console.log(element);
    if (element.classList.contains('is-selected')) {
      element.classList.remove('is-selected');
    }
    selectedBtn.classList.add('is-selected');
  });
}
