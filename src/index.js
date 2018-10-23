import React from 'react';
import ReactDOM from 'react-dom';

const meInReact = document.createElement('div', {}, [title, paragraph, list]);


ReactDOM.render(
  meInReact,
  document.getElementById('global')
);

export default meInReact
