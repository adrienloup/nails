import { useTranslation } from 'react-i18next';
import { useNotificationsDispatch } from '@/src/generic/common/components/notifications/useNotifications.ts';
import { classNames } from '@/src/generic/utils/classNames.ts';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component.tsx';
import { IconComponent } from '@/src/generic/common/components/icon/Icon.component.tsx';
import { Notification } from '@/src/generic/common/components/notification/Notification.type.ts';
import styles from '@/src/generic/common/components/notification/Notification.module.scss';

export const NotificationComponent = ({
  notification,
  ...props
}: {
  notification: Notification;
}) => {
  const { t } = useTranslation();
  const setNotifications = useNotificationsDispatch();

  const onDisable = () => setNotifications({ type: 'DISABLE', id: notification.id });
  const onView = () => setNotifications({ type: 'VIEW', id: notification.id });

  return (
    <div
      className={classNames([styles.notification, notification.view ? styles.view : ''])}
      {...props}
    >
      <ButtonComponent
        className={styles.link}
        to={`/nails/explore/${notification.id}`}
        triggerClick={onView}
      >
        {t(`game.notification.${notification.id}`)}
      </ButtonComponent>
      <ButtonComponent
        className={styles.button}
        onClick={onDisable}
        aria-label="Supprimer la notification"
      >
        <IconComponent icon="cancel" />
      </ButtonComponent>
    </div>
  );
};
