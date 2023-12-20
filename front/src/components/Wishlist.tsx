import React, { useState, useEffect } from "react";
import { Posting, User } from "../types";
import "../style/WishList.css";
import NavBar from "../components/NavBar/NavBar";
import { useNavigate } from "react-router-dom";
import { useUser } from "./UserProfile/UserContext";

interface WishListProps {}

const WishList: React.FC<WishListProps> = ({}) => {
  const [wishList, setWishList] = useState<Posting[]>([]);
  const navigate = useNavigate();
  const { user } = useUser();
  const [loading, setLoading] = useState(true);

  // Fetch wish list items from the server when the component mounts
  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        // Assuming 'user' contains the current user's information
        const response = await fetch(
          `http://127.0.0.1:8000/user/wishlist/${user?.username}`
        );

        if (response.ok) {
          const data = await response.json();
          const fetchedWishlist = data.wishlist;
          const wishlistArray = Array.isArray(fetchedWishlist)
            ? fetchedWishlist
            : Object.values(fetchedWishlist);
          setWishList(wishlistArray);
          console.log("Fetched data:", data);
        } else {
          throw new Error("Failed to fetch wish list items");
        }
      } catch (error) {
        console.log("Error fetching wish list items", error);
      } finally {
        setLoading(false);
      }
    };
    fetchWishlist();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  const handleViewListing = (item_name: string) => {
    console.log(item_name);
    const selectedWishListItem = wishList.find(
      (wishListItem) => wishListItem.name === item_name
    );

    if (selectedWishListItem) {
      // Navigate to SingleItemDisplay and pass the selectedWishListItem information
      navigate(`/single-item/${selectedWishListItem.name}`, {
        state: { selectedWishListItem },
      });
    } else {
      console.error("Wish list item not found");
    }
  };

  const handleRemoveFromWishList = async (itemName: string) => {
    const selectedWishListItem = wishList.find(
      (wishListItem) => wishListItem.name === itemName
    );

    if (selectedWishListItem) {
      // Add logic to remove the item from the wish list on the server

      // Filter out the removed item from the state
      const updatedWishList = wishList.filter(
        (wishListItem) => wishListItem.name !== selectedWishListItem.name
      );

      // Update the state to re-render the component without the removed item
      setWishList(updatedWishList);
    } else {
      console.error("Wish list item not found");
    }
  };

  return (
    <div>
      <h2 className="wishlist-header">My Wish List</h2>
      <div className="wishlist-container">
        {wishList.map((wishListItem) => (
          <div key={wishListItem.id} className="wishlist-item">
            <img
              src={`http://127.0.0.1:8000/wishlist/wishlist_pictures/${wishListItem.picture}`}
              alt={wishListItem.name}
              className="wishlist-cover-photo"
            />
            <div className="wishlist-details">
              <h2>{wishListItem.name}</h2>
              <p>{wishListItem.description}</p>
              <span>
                $
                {typeof wishListItem.price === "number"
                  ? wishListItem.price.toFixed(2)
                  : wishListItem.price}
              </span>

              <span>Quantity: {wishListItem.qty}</span>
              <div className="wishlist-date">
                Added on: {new Date(wishListItem.date).toLocaleDateString()}
              </div>
              <div className="wishlist-buttons">
                <button
                  className="view-wishlist-btn"
                  onClick={() => handleViewListing(wishListItem.name)}
                >
                  View Item
                </button>
                <button
                  className="remove-from-wishlist-btn"
                  onClick={() => handleRemoveFromWishList(wishListItem.name)}
                >
                  Remove from Wish List
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishList;
