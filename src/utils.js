export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

export function hiddenMenu() {
  const menu = document.querySelector('#menu');
  const modalWindow = document.querySelector('.modal-window');

  if (modalWindow) {
    return menu.classList.remove('open');
  }
  return menu.classList.add('open');
}
