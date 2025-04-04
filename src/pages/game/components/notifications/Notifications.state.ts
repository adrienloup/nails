import { State } from '@/src/pages/game/components/notifications/Notifications.type.ts';
import { Notification } from '@/src/pages/game/components/notification/Notification.type.ts';

const notifications: Notification[] = [
  {
    id: 'manufacturing',
    enable: true,
  },
  {
    id: 'business',
    enable: true,
  },
  {
    id: 'machine',
    enable: false,
  },
  {
    id: 'marketing',
    enable: false,
  },
  {
    id: 'technology',
    enable: false,
  },
  {
    id: 'trust',
    enable: false,
  },
  {
    id: 'project',
    enable: false,
  },
  {
    id: 'megamachine',
    enable: false,
  },
];

export const notificationsState: State = {
  notifications: notifications,
  open: false,
};
