import React from 'react';
import { ToastProvider } from 'react-toast-notifications';
import { Provider } from 'react-redux';

import Routes from './routes';
import GlobalStyle from './styles/global';

import store from './redux/core/store';

const App: React.FC = () => (
  <>
    <Provider store={store}>
      <ToastProvider
        autoDismiss
        autoDismissTimeout={3000}
        placement="top-right"
      >
        <Routes />
      </ToastProvider>
    </Provider>

    <GlobalStyle />
  </>
);

export default App;
