import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useHeader } from '@/src/generic/common/components/header/useHeader.ts';
import {
  useNotifications,
  useNotificationsDispatch,
} from '@/src/generic/common/components/notifications/useNotifications.ts';
import { MenuComponent } from '@/src/generic/common/components/menu/Menu.component.tsx';
import { NotificationsComponent } from '@/src/generic/common/components/notifications/Notifications.component.tsx';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component.tsx';
import styles from '@/src/generic/common/components/header/Header.module.scss';

export const HeaderComponent = () => {
  const { t } = useTranslation();
  const notifyDispatch = useNotificationsDispatch();
  const notifyState = useNotifications();
  const [openHeader, setOpenHeader] = useHeader();

  const onMenuClick = () => {
    if (!openHeader && notifyState.open) {
      notifyDispatch({ type: 'TOGGLE' });
    }
    setOpenHeader(!openHeader);
  };

  const onNotificationsClick = () => {
    if (!notifyState.open && openHeader) {
      setOpenHeader(false);
    }
    notifyDispatch({ type: 'TOGGLE' });
  };

  const notView = notifyState.notifications.filter(
    (notification) => notification.enable && !notification.view
  ).length;

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && openHeader) setOpenHeader(false);
      if (e.key === 'Escape' && notifyState.open) onNotificationsClick();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [openHeader, notifyState.open]);

  return (
    <header
      className={styles.header}
      role="banner"
    >
      <ButtonComponent
        id="menubutton"
        className={styles.menu}
        aria-label={openHeader ? t('common.menu.close') : t('common.menu.open')}
        aria-expanded={openHeader}
        aria-controls="menu"
        onClick={onMenuClick}
      >
        {/*<IconComponent icon={open ? 'menu_open' : 'menu'} />*/}
        menu
      </ButtonComponent>
      <MenuComponent />
      <ButtonComponent
        id="notificationsbutton"
        className={styles.notifications}
        aria-label={
          notifyState.open ? t('common.notifications.close') : t('common.notifications.open')
        }
        aria-expanded={notifyState.open}
        aria-controls="notifications"
        onClick={onNotificationsClick}
      >
        {notView} noti
      </ButtonComponent>
      <NotificationsComponent />
    </header>
  );
};
