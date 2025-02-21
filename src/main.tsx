import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/index';
import { BrowserRouter } from 'react-router-dom';

import 'remixicon/fonts/remixicon.css';
import '@blocknote/mantine/style.css';
import '@blocknote/core/fonts/inter.css';
import '@blocknote/mantine/style.css';
createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
