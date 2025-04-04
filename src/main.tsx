import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from '@/src/provider.tsx';
import { version } from '@/package.json';
import App from '@/src/generic/app/App.tsx';
import '@/src/generic/i18n';

createRoot(document.getElementById('_nails_3mma_0')!).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>
);

console.log(
  `%c[App]%c${version}%c@jff`,
  'padding: 4px 3px 3px; background: #252529; font-weight: bold; color: #7400ff;',
  'padding: 4px 3px 3px; background: #7400ff; font-weight: bold; color: #252529;',
  'padding: 4px 3px 3px; background: #252529; font-weight: bold; color: #7400ff;'
);
