import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

import App from './App.jsx'
import { Header } from './components/header/index.jsx';

import './index.css'

import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";

const queryClient = new QueryClient();

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <QueryClientProvider client={queryClient}>
        <Header />
        <App />
      </QueryClientProvider>
    </I18nextProvider>
  </React.StrictMode>,
)
