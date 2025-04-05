import { MenuComponent } from '@/src/generic/common/components/menu/Menu.component.tsx';
import { NotificationsComponent } from '@/src/generic/common/components/notifications/Notifications.component.tsx';
import styles from '@/src/generic/common/components/header/Header.module.scss';

export const HeaderComponent = () => {
  return (
    <header
      className={styles.header}
      role="banner"
    >
      <MenuComponent />
      <NotificationsComponent />
    </header>
  );
};
