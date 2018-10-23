import React from 'react';
import ReactDOM from 'react-dom';

const i1 = document.createElement('li', {}, "javascript")
const i2 = document.createElement('li', {}, "react")
const i3 = document.createElement('li', {}, "Movies")
const i4 = document.createElement('li', {}, "Ice Cream")

const title = document.createElement('h1', {}, "An Awesome Person");
const paragraph = document.createElement('p', {}, "Who Is Learning React");
const list = document.createElement('ul', { className: "my-interests", [i1, i2, i3, i4]});
const meInReact = document.createElement('div', {}, [title, paragraph, list]);


ReactDOM.render(
  meInReact,
  document.getElementById('global')
);

export default meInReact
