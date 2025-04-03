/* eslint-disable react-refresh/only-export-components */
import { BrowserRouter } from 'react-router-dom';
import { ReactElement, ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { render, RenderOptions } from '@testing-library/react';
import i18n from '../generic/i18n';

const AllTheProviders = ({ children }: { children: ReactNode }) => (
  <BrowserRouter>
    <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
  </BrowserRouter>
);

export const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });
