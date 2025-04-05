import { useContext } from 'react';
import {
  NotificationsContext,
  NotificationsDispatchContext,
} from '@/src/generic/common/components/notifications/Notifications.context.ts';

export const useNotifications = () => useContext(NotificationsContext);
export const useNotificationsDispatch = () => useContext(NotificationsDispatchContext);
