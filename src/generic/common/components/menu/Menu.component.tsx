// import { useEffect } from 'react';
// import { useTranslation } from 'react-i18next';
import { useHeader } from '@/src/generic/common/components/header/useHeader.ts';
// import {
//   useNotifications,
//   useNotificationsDispatch,
// } from '@/src/generic/common/components/notifications/useNotifications.ts';
import { classNames } from '@/src/generic/utils/classNames.ts';
// import { ButtonComponent } from '@/src/generic/common/components/button/Button.component.tsx';
import { NavigationComponent } from '@/src/generic/common/components/navigation/Navigation.component.tsx';
import { SettingsComponent } from '@/src/generic/common/components/settings/Settings.component.tsx';
// import { IconComponent } from '@/src/generic/common/components/icon/Icon.component.tsx';
import styles from '@/src/generic/common/components/menu/Menu.module.scss';

export const MenuComponent = () => {
  // const { t } = useTranslation();
  // const notifyDispatch = useNotificationsDispatch();
  // const notifyState = useNotifications();
  // const [open, setOpen] = useHeader();
  const [openHeader] = useHeader();

  // const onClick = () => {
  //   if (!open && notifyState.open) {
  //     notifyDispatch({ type: 'TOGGLE' });
  //   }
  //   setOpen(!open);
  // };
  //
  // useEffect(() => {
  //   const onKeyDown = (e: KeyboardEvent) => {
  //     if (e.key === 'Escape' && open) setOpen(false);
  //   };
  //   window.addEventListener('keydown', onKeyDown);
  //   return () => window.removeEventListener('keydown', onKeyDown);
  // }, [open, setOpen]);

  return (
    <div
      id="menu"
      className={classNames([styles.menu, openHeader ? styles.open : ''])}
      role="menu"
      aria-labelledby="menubutton"
    >
      {/*<ButtonComponent*/}
      {/*  id="menubutton"*/}
      {/*  className={styles.button}*/}
      {/*  aria-label={open ? t('common.menu.close') : t('common.menu.open')}*/}
      {/*  aria-expanded={open}*/}
      {/*  aria-controls="menu"*/}
      {/*  onClick={onClick}*/}
      {/*>*/}
      {/*  /!*<IconComponent icon={open ? 'menu_open' : 'menu'} />*!/*/}
      {/*  menu*/}
      {/*</ButtonComponent>*/}
      {openHeader ? (
        <>
          <NavigationComponent />
          <SettingsComponent />
        </>
      ) : null}
    </div>
  );
};
