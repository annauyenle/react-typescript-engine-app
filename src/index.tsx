import * as React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import AppRouter from './AppRouter';

render(<AppRouter />, document.getElementById('root'));