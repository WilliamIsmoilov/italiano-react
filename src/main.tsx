import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter as Router} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './store.ts';
import ContextProvider from './components/context/ContextProvider.tsx';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ContextProvider>
        <Router>
     <App />
    </Router>
      </ContextProvider>
    </Provider>
  </StrictMode>,
)
