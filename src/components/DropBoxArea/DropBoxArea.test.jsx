import React from 'react';
import ReactDOM from 'react-dom';
import DropBoxArea from './DropBoxArea';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DropBoxArea />, div);
  ReactDOM.unmountComponentAtNode(div);
});
