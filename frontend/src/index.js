/*import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/styles.css'
import App from './App';
import { Provider } from 'react-redux';

const container = document.getElementById('result')
const root = createRoot(container)
root.render(<App tab="home" />)
*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/styles.css'
import { persistor,store } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <App />
    </PersistGate>
  </Provider>
);