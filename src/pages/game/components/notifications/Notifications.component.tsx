import { useEffect, useState } from 'react';
import {
  useNotifications,
  useNotificationsDispatchs,
} from '@/src/pages/game/components/notifications/useNotifications.ts';
import { classNames } from '@/src/generic/utils/classNames.ts';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component.tsx';
import { BadgeComponent } from '@/src/generic/common/components/badge/Badge.component.tsx';
// import { IconComponent } from '@/src/generic/common/components/icon/Icon.component.tsx';
import styles from '@/src/pages/game/components/notifications/Notifications.module.scss';

export const NotificationsComponent = () => {
  const setNotifications = useNotificationsDispatchs();
  const notifications = useNotifications();
  const [value] = useState(10);

  const onToggle = () => setNotifications({ type: 'TOGGLE' });

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && notifications.open) onToggle();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [notifications.open]);

  return (
    <aside
      className={styles.notifications}
      role="complementary"
    >
      <div
        className={classNames([
          styles.inner,
          notifications.open ? styles.open : '',
          value > 0 ? styles.active : '',
        ])}
      >
        <ButtonComponent
          className={styles.button}
          onClick={onToggle}
        >
          <BadgeComponent value={value}>{/*<IconComponent icon="notifications_active" />*/}</BadgeComponent>
        </ButtonComponent>
        Notifications
        <br />
        Notifications
        <br />
        Notifications
        <br />
        Notifications
        <br />
        Notifications
        <br />
        Notifications
        <br />
        {/*<div style={{ height: '2000px' }}></div>*/}
      </div>
    </aside>
  );
};
