// use for global types

export interface Notification {
    id: string;
    message: string;
    link: string;
    viewed: boolean;
    userPhoto?: string;
    timestamp: Date;
  }
  
  export interface NotificationsProps {
    notifications: Notification[];
  }