// use for global types

export interface Notification {
  id: string;
  message: string;
  listing: Posting;
  viewed: boolean;
  timestamp: Date; // just get this from the Backend
}

//if seller marks an item as bought on the saved list after a successful exchange (success!)
//if seller marks an item as bought on the saved list, notifying potential buyer that they were not the chosen one (failure :()
//if random user adds my (seller) item to wishlist (User.wishlist.posting.status)

export interface NotificationsProps {
  notifications: Notification[];
}

export type Posting = {
  // id: string;
    //Need to get rid of id
    //replace all instances
    // id = f:{item_name}_{item_seller}
    //"link" should do a navigate to the page
  name: string;
  seller: User;
  price: number;
  description: string;
  qty: number;
  date: Date;
  coverPhoto: string;
  additionalPhotos: string[];
  status: string; //enum; cj

};

export interface SavedItemsProps {
  saveditems: Posting[];
  //Record<string,any>
  // Need to change this into a dictionary; 
  // each item being ID (posting.name_posting.seller, Posting)
}

export type User = {
  firstName: string;
  lastName: string;
  username: string;
  profilePicture: string;
  dateJoined: string;
  email: string;
  purchases: Record<string, any>; //key: (item_name)_(item_user) 
  sellings: Record<string, any>; //key: (item_name)_(item_user) 
  wishlist: Record<string, any>; //key: (item_name)_(item_user)
  reviews: Record<string, any>; //key is author of review
  notifications: Notification[]; //need to call User.notifications for the frontend
};

export type Review = {
  rating: number;
  content: string;
  date: Date;
  author: User;
}

//for search: take in dictionary of items (related to, say, the keyword red) and then show it on screen