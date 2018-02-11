import React from 'react';
import { render } from 'react-dom';
import Counter from './Counter';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (<Counter />);

render(<App />, document.getElementById('root'));
