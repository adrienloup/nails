export interface Notification {
  id: string;
  text: string;
  path: string;
  enable: boolean;
}

export interface Notifications {
  notifications: Notification[];
  open: boolean;
}

export type Action =
  // | { type: 'ADD'; id: string }
  // | { type: 'REMOVE'; id: string }
  // | { type: 'UPDATE'; id: string };
  { type: 'TOGGLE' };

// export interface Notifications {
//   notifications: Notification[];
//   open: boolean;
// }

// export type State = Notifications[];
