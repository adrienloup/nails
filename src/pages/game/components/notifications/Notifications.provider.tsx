import { useCallback, useEffect, useReducer } from 'react';
import { useLocalStorage } from '@/src/generic/hooks/useLocalStorage.ts';
import { notificationsReducer } from '@/src/pages/game/components/notifications/Notifications.reducer.ts';
import {
  NotificationsContext,
  NotificationsDispatchContext,
} from '@/src/pages/game/components/notifications/Notifications.context.ts';
import { notificationsState } from '@/src/pages/game/components/notifications/Notifications.state.ts';
import { Notifications } from '@/src/pages/game/components/notifications/Notifications.type.ts';
import { Children } from '@/src/generic/types/Children.type.ts';

export function NotificationsProvider({ children }: { children: Children }) {
  const [state, setState] = useLocalStorage<Notifications>('_notifications_3mma_0', notificationsState);
  const [notifications, setNotifications] = useReducer(notificationsReducer, state);

  const update = useCallback(() => {
    setState(notifications);
  }, [notifications, setState]);

  useEffect(() => {
    update();
  }, [update]);

  return (
    <NotificationsContext.Provider value={notifications}>
      <NotificationsDispatchContext.Provider value={setNotifications}>
        {children}
      </NotificationsDispatchContext.Provider>
    </NotificationsContext.Provider>
  );
}
