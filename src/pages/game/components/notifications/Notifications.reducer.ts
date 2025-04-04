import { Action, Notifications } from '@/src/pages/game/components/notifications/Notifications.type.ts';

export const notificationsReducer = (state: Notifications, action: Action): Notifications => {
  switch (action.type) {
    case 'TOGGLE':
      return {
        ...state,
        open: !state.open,
      };
    // case 'ADD':
    //   return state.map((notification) =>
    //     notification.id === action.id ? { ...notification, enable: true, animate: true } : notification
    //   );
    // case 'REMOVE':
    //   return state.map((notification) =>
    //     notification.id === action.id ? { ...notification, enable: false } : notification
    //   );
    // case 'UPDATE':
    //   return state.map((notification) =>
    //     notification.id === action.id ? { ...notification, animate: false } : notification
    //   );
    default:
      return state;
  }
};
