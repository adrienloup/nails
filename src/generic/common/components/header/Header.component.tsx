import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useHeader } from '@/src/generic/common/components/header/useHeader.ts';
import { classNames } from '@/src/generic/utils/classNames.ts';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component.tsx';
import { NavigationComponent } from '@/src/generic/common/components/navigation/Navigation.component.tsx';
import { SettingsComponent } from '@/src/generic/common/components/settings/Settings.component.tsx';
import { NotificationsComponent } from '@/src/generic/common/components/notifications/Notifications.component.tsx';
// import { IconComponent } from '@/src/generic/common/components/icon/Icon.component.tsx';
import styles from '@/src/generic/common/components/header/Header.module.scss';

export const HeaderComponent = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useHeader();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [setOpen]);

  return (
    <header
      className={classNames([styles.header, open ? styles.open : ''])}
      role="banner"
    >
      <div className={styles.menu}>
        <ButtonComponent
          className={styles.button}
          aria-label={open ? t('common.menu.close') : t('common.menu.open')}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {/*<IconComponent icon={open ? 'menu_open' : 'menu'} />*/}
          menu
        </ButtonComponent>
        {open ? (
          <>
            <NavigationComponent />
            <SettingsComponent />
          </>
        ) : null}
      </div>
      <NotificationsComponent />
    </header>
  );
};
