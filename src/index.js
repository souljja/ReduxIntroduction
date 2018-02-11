import React from 'react';
import { render } from 'react-dom';
import Counter from './Counter';
import Styles from "./Styles.css";

const App = () => (<Counter />);

render(<App />, document.getElementById('root'));
