const text = document.querySelector('.wr');
const btn = document.querySelector('.btn');

const btnHandler = function btnHandler() {
  const button = this;  
  slideToggle(text, button);
};

btn.addEventListener('click', btnHandler);
