import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { App } from 'components/App/App';
import { store } from './redux/store';

import 'modern-normalize';
import { ThemeProvider } from 'styled-components';
import { theme } from 'utils/theme';
import { MyStyleReset } from 'utils/resetStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyStyleReset />
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="goit-react-hw-07-phonebook">
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
