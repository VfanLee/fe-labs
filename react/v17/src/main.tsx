import 'antd/dist/antd.css';
import '@/styles/reset.less';

import ReactDOM from 'react-dom';
import { StrictMode } from 'react';

import App from './App.tsx';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
