/* SLIDE UP */
const slideUp = (target, button) => {
  target.style.height = `${target.offsetHeight}px`;
  target.classList.add('opening');
  target.classList.remove('open');
  target.offsetHeight;
  target.style.height = 0;
  const transitionendHandler = () => {
    target.style.removeProperty('height');
    target.classList.remove('opening');
    target.removeEventListener('transitionend', transitionendHandler);
    button.addEventListener('click', btnHandler);
  };
  target.addEventListener('transitionend', transitionendHandler);
}

/* SLIDE DOWN */
const slideDown = (target, button) => {
  target.classList.add('opening');
  target.style.height = `${target.scrollHeight}px`;
  const transitionendHandler = () => {
    target.style.removeProperty('height');
    target.classList.add('open');
    target.classList.remove('opening');
    target.removeEventListener('transitionend', transitionendHandler);
    button.addEventListener('click', btnHandler);
  }
  target.addEventListener('transitionend', transitionendHandler);
};

/* TOOGLE */
const slideToggle = (target, button) => {
  button.removeEventListener('click', btnHandler);
  if (target.classList.contains('open')) {
    slideUp(target, button);
  } else {
    slideDown(target, button);
  }
}
