import { useEffect } from 'react';
import {
  useNotifications,
  useNotificationsDispatch,
} from '@/src/pages/game/components/notifications/useNotifications.ts';
import { classNames } from '@/src/generic/utils/classNames.ts';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component.tsx';
import { BadgeComponent } from '@/src/generic/common/components/badge/Badge.component.tsx';
import { NotificationComponent } from '@/src/pages/game/components/notification/Notification.component.tsx';
// import { IconComponent } from '@/src/generic/common/components/icon/Icon.component.tsx';
import { Notification } from '@/src/pages/game/components/notification/Notification.type.ts';
import styles from '@/src/pages/game/components/notifications/Notifications.module.scss';

export const NotificationsComponent = () => {
  const dispatch = useNotificationsDispatch();
  const state = useNotifications();

  const totalNotificattions = state.notifications.filter(
    (notification) => notification.enable
  ).length;

  const newNotifications = state.notifications.filter(
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
    <aside
      className={styles.notifications}
      role="complementary"
    >
      <div
        className={classNames([
          styles.inner,
          state.open ? styles.open : '',
          // newNotifications > 0 ? styles.active : '',
        ])}
      >
        <ButtonComponent
          className={styles.button}
          aria-expanded={state.open}
          onClick={onToggle}
        >
          <BadgeComponent value={newNotifications}>
            {/*<IconComponent icon="notifications_active" />*/}
          </BadgeComponent>
        </ButtonComponent>
        {totalNotificattions > 0 ? (
          state.notifications.map((notification: Notification) =>
            notification.enable ? (
              <NotificationComponent
                key={notification.id}
                notification={notification}
              />
            ) : null
          )
        ) : (
          <p className={styles.empty}>Aucune notification</p>
        )}
      </div>
    </aside>
  );
};
