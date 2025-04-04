import { useTranslation } from 'react-i18next';
import { useNotificationsDispatch } from '@/src/pages/game/components/notifications/useNotifications.ts';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component.tsx';
import { IconComponent } from '@/src/generic/common/components/icon/Icon.component.tsx';
import { Notification } from '@/src/pages/game/components/notification/Notification.type.ts';
import styles from '@/src/pages/game/components/notification/Notification.module.scss';

export const NotificationComponent = ({ notification, ...props }: { notification: Notification }) => {
  const { t } = useTranslation();
  const setNotifications = useNotificationsDispatch();

  const onClick = () => setNotifications({ type: 'DISABLE', id: notification.id });

  return (
    <div
      className={styles.notification}
      {...props}
    >
      <ButtonComponent
        className={styles.link}
        to={`/nails/explore/${notification.id}`}
      >
        {t(`game.notification.${notification.id}`)}
      </ButtonComponent>
      <ButtonComponent
        className={styles.button}
        onClick={onClick}
        aria-label="Supprimer la notification"
      >
        <IconComponent icon="cancel" />
      </ButtonComponent>
    </div>
  );
};
