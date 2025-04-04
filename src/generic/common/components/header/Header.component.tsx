import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useHeader } from '@/src/generic/common/components/header/useHeader.ts';
import { classNames } from '@/src/generic/utils/classNames.ts';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component.tsx';
import { NavigationComponent } from '@/src/generic/common/components/navigation/Navigation.component.tsx';
import { SettingsComponent } from '@/src/generic/common/components/settings/Settings.component.tsx';
import { BadgeComponent } from '@/src/generic/common/components/badge/Badge.component.tsx';
import styles from '@/src/generic/common/components/header/Header.module.scss';
import { IconComponent } from '@/src/generic/common/components/icon/Icon.component.tsx';

export const HeaderComponent = () => {
  const { t } = useTranslation();
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
        <IconComponent icon={open ? 'bottom_panel_open' : 'top_panel_open'} />
        Menu
      </ButtonComponent>
      <div className={styles.inner}>
        {open ? (
          <>
            <NavigationComponent />
            <SettingsComponent />
          </>
        ) : null}
      </div>
      <ButtonComponent className={styles.ads}>
        <BadgeComponent value={10} />
        <IconComponent icon="right_panel_open" />
      </ButtonComponent>
    </header>
  );
};
