import { Notification } from '@/src/generic/common/components/notification/Notification.type.ts';

export interface State {
  notifications: Notification[];
  open: boolean;
}

export type Action =
  | { type: 'ENABLE'; id: string }
  | { type: 'DISABLE'; id: string }
  | { type: 'VIEW'; id: string }
  | { type: 'TOGGLE' };
