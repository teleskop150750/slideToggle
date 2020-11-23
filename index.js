import SlideToggle from './slideToggle.js';

const text = document.querySelector('.wr');
const btn = document.querySelector('.btn');

const vm = new SlideToggle({
  target: text,
  button: btn,
});
