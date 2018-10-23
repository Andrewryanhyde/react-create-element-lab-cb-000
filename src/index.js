import React from 'react';
import ReactDOM from 'react-dom';

const title = document.createElement('h1', {}, "An Awesome Person");
const paragraph = document.createElement('p', {}, "Who Is Learning React");
const list = document.createElement('ul', { className: "my-interests", [i1, i2, i3, i4]});
const meInReact = document.createElement('div', {}, [title, paragraph, list]);


ReactDOM.render(
  meInReact,
  document.getElementById('global')
);

export default meInReact
