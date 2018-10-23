import React from 'react';
import ReactDOM from 'react-dom';

const title = document.createElement('h1', {}, "An Awesome Person");
const paragrapg = document.createElement('p', {}, "Who Is Learning React");
const meInReact = document.createElement('div', {}, [title, paragraph, list]);


ReactDOM.render(
  meInReact,
  document.getElementById('global')
);

export default meInReact
