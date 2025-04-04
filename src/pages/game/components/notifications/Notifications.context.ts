import { createContext, Dispatch } from 'react';
import { notificationsState } from '@/src/pages/game/components/notifications/Notifications.state.ts';
import { Action, Notifications } from '@/src/pages/game/components/notifications/Notifications.type.ts';

export const NotificationsContext = createContext<Notifications>(notificationsState);
export const NotificationsDispatchContext = createContext<Dispatch<Action>>(() => {});
