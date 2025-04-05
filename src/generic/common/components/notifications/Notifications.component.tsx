import { useEffect } from 'react';
import {
  useNotifications,
  useNotificationsDispatch,
} from '@/src/generic/common/components/notifications/useNotifications.ts';
import { classNames } from '@/src/generic/utils/classNames.ts';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component.tsx';
// import { BadgeComponent } from '@/src/generic/common/components/badge/Badge.component.tsx';
import { NotificationComponent } from '@/src/generic/common/components/notification/Notification.component.tsx';
// import { IconComponent } from '@/src/generic/common/components/icon/Icon.component.tsx';
import { Notification } from '@/src/generic/common/components/notification/Notification.type.ts';
import styles from '@/src/generic/common/components/notifications/Notifications.module.scss';

export const NotificationsComponent = () => {
  const dispatch = useNotificationsDispatch();
  const state = useNotifications();

  const total = state.notifications.filter((notification) => notification.enable).length;

  const notView = state.notifications.filter(
    (notification) => notification.enable && !notification.view
  ).length;

  const onToggle = () => dispatch({ type: 'TOGGLE' });

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onToggle();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onToggle]);

  return (
    <div
      className={classNames([styles.notifications, state.open ? styles.open : ''])}
      role="complementary"
    >
      <ButtonComponent
        className={styles.button}
        aria-expanded={state.open}
        onClick={onToggle}
      >
        {notView} notifs
        {/*<BadgeComponent value={notView}>*/}
        {/*<IconComponent*/}
        {/*  icon={total > 0 ? 'notifications_active' : 'notifications'}*/}
        {/*/>*/}
        {/*</BadgeComponent>*/}
      </ButtonComponent>
      <div className={styles.inner}>
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
      </div>
    </div>
  );
};
