import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/src/generic/i18n/useLanguage.ts';
import { useMode } from '@/src/generic/mode/useMode.ts';
import { useHeader } from '@/src/generic/common/components/header/useHeader.ts';
import { classNames } from '@/src/generic/utils/classNames.ts';
import { NavigationComponent } from '@/src/generic/common/components/navigation/Navigation.component.tsx';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component.tsx';
import styles from '@/src/generic/common/components/header/Header.module.scss';

export const HeaderComponent = () => {
  const { t } = useTranslation();
  const [, setLanguage] = useLanguage();
  const [, setMode] = useMode();
  const [open, setOpen] = useHeader();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <header
      className={classNames([styles.header, open ? styles.open : ''])}
      role="banner"
    >
      <ButtonComponent
        className={styles.menu}
        aria-label={open ? t('common.menu.close') : t('common.menu.open')}
        onClick={() => setOpen(!open)}
      >
        Menu
      </ButtonComponent>
      {open ? (
        <>
          <NavigationComponent />
          <ButtonComponent
            className={styles.button}
            onClick={() => setLanguage('en')}
          >
            EN
          </ButtonComponent>
          <ButtonComponent
            className={styles.button}
            onClick={() => setLanguage('fr')}
          >
            FR
          </ButtonComponent>
          <ButtonComponent
            className={styles.button}
            onClick={() => setMode('dark')}
          >
            dark
          </ButtonComponent>
          <ButtonComponent
            className={styles.button}
            onClick={() => setMode('light')}
          >
            light
          </ButtonComponent>
          <ButtonComponent
            className={styles.button}
            onClick={() => setMode('system')}
          >
            system
          </ButtonComponent>
        </>
      ) : null}
    </header>
  );
};
