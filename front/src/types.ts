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

  export type Posting = {
    id: string;
    name: string;
    seller: User;
    price: number;
    description: string;
    qty: number;
    date: Date;
    link: string;
    coverPhoto: string;
    additionalPhotos: string[];
  };

  export interface SavedItemsProps {
    saveditems: Posting[];
  }

  export type User = {
    firstName: string;
    lastName: string;
    username: string;
    profilePicture: string;
    dateJoined: string;
    email: string;
    purchases: Record<string, any>; 
    sellings: Record<string, any>; 
  };
  