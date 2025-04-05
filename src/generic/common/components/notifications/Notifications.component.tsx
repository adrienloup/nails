// import { useEffect } from 'react';
// import { useTranslation } from 'react-i18next';
import {
  useNotifications,
  // useNotificationsDispatch,
} from '@/src/generic/common/components/notifications/useNotifications.ts';
// import { useHeader } from '@/src/generic/common/components/header/useHeader.ts';
import { classNames } from '@/src/generic/utils/classNames.ts';
// import { ButtonComponent } from '@/src/generic/common/components/button/Button.component.tsx';
import { NotificationComponent } from '@/src/generic/common/components/notification/Notification.component.tsx';
import { Notification } from '@/src/generic/common/components/notification/Notification.type.ts';
import styles from '@/src/generic/common/components/notifications/Notifications.module.scss';

export const NotificationsComponent = () => {
  // const { t } = useTranslation();
  // const dispatch = useNotificationsDispatch();
  const state = useNotifications();
  // const [openHeader, setOpenHeader] = useHeader();

  const total = state.notifications.filter((notification) => notification.enable).length;

  // const notView = state.notifications.filter(
  //   (notification) => notification.enable && !notification.view
  // ).length;

  // const onToggle = () => {
  //   if (!state.open && openHeader) {
  //     setOpenHeader(false);
  //   }
  //   dispatch({ type: 'TOGGLE' });
  // };

  // useEffect(() => {
  //   const onKeyDown = (e: KeyboardEvent) => {
  //     if (e.key === 'Escape' && state.open) onToggle();
  //   };
  //   window.addEventListener('keydown', onKeyDown);
  //   return () => window.removeEventListener('keydown', onKeyDown);
  // }, [state.open]);
  // }, [state.open, onToggle]);

  return (
    <div
      id="notifications"
      className={classNames([styles.notifications, state.open ? styles.open : ''])}
      role="complementary"
      aria-labelledby="notificationsbutton"
    >
      {/*<ButtonComponent*/}
      {/*  id="notificationsbutton"*/}
      {/*  className={styles.button}*/}
      {/*  aria-label={state.open ? t('common.notifications.close') : t('common.notifications.open')}*/}
      {/*  aria-expanded={state.open}*/}
      {/*  aria-controls="notifications"*/}
      {/*  onClick={onToggle}*/}
      {/*>*/}
      {/*  {notView} noti*/}
      {/*</ButtonComponent>*/}
      {/*<div className={styles.inner}>*/}
      {total > 0 ? (
        <>
          {state.notifications.map((notification: Notification) =>
            notification.enable ? (
              <NotificationComponent
                key={notification.id}
                notification={notification}
              />
            ) : null
          )}
        </>
      ) : (
        <p className={styles.empty}>Aucune notification</p>
      )}
      {/*</div>*/}
    </div>
  );
};
