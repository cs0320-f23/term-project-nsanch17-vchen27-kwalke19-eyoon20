import React, { useState } from "react";
import "../style/EditListing.css";
import { Posting } from "../types";
import NavBar from "../components/NavBar/NavBar";

interface EditListingProps {
  originalListing: Posting;
  onCancel: () => void;
  onPublish: (status: boolean) => void;
}

const EditListing: React.FC<EditListingProps> = ({
  originalListing,
  onCancel,
  onPublish,
}) => {
  console.log("Original Listing:", originalListing);

  const [item_name, setItem] = useState(originalListing.name);
  const [price, setPrice] = useState(originalListing.price.toString());
  const [qty, setQuantity] = useState(originalListing.qty.toString());
  const [description, setDescription] = useState(originalListing.description);
  const [big_pic, setPic] = useState(originalListing.coverPhoto);
  const [error, setError] = useState("");

  console.log("edit listing");

  const handlePublish = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    const requestOptions = {
      method: "POST", // Change method to POST
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        item_name,
        seller_name: originalListing.seller, // Use the seller name from the original listing
        price,
        qty,
        description,
        big_pic,
      }),
    };

    console.log("Edit requestOptions:", requestOptions);

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/posting/modify`,
        requestOptions
      );

      if (!response.ok) {
        throw new Error("Failed to modify listing");
      }

      const data = await response.json();
      console.log(data);

      // Handle the success case
      onPublish(true);
    } catch (error) {
      if (error instanceof Error) {
        console.error("Modify failed:", error.message);
        setError(error.message);
      } else {
        console.error("Modify failed:", error);
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <div>
      <div className="edit-listing-container">
        <h1>Edit Listing</h1>
        <div className="form-container">
          <input
            type="text"
            placeholder="Title of Listing"
            value={item_name}
            onChange={(e) => setItem(e.target.value)}
          />
          <input
            type="text"
            placeholder="Price (i.e. 54.99, 5.00)"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            type="number"
            placeholder="Quantity"
            value={qty}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button type="button" onClick={onCancel} className="cancel-button">
            Cancel
          </button>
          <form onSubmit={handlePublish} className="form-container">
            <button type="submit" className="publish-button">
              Save Changes
            </button>
          </form>
          {error && <p className="error-message">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default EditListing;
