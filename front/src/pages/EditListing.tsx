import React, { useState } from "react";
import "../style/EditListing.css";
import { Posting } from "../types";
import NavBar from "../components/NavBar/NavBar";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface EditListingProps {
  originalListing: Posting;
  onCancel: () => void;
  onPublish: (status: boolean) => void;
}

const EditListing: React.FC<EditListingProps> = ({ onCancel, onPublish }) => {
  const location = useLocation();
  const originalListing = location.state?.originalListing;
  const navigate = useNavigate();

  console.log("Original Listing:", originalListing);

  const [item_name, setItem] = useState(originalListing.name);
  const [price, setPrice] = useState<number>(originalListing.price);
  const [qty, setQuantity] = useState(originalListing.qty.toString());
  const [description, setDescription] = useState(originalListing.description);
  const [big_pic, setPic] = useState(originalListing.coverPhoto);
  const [error, setError] = useState("");
  const [attribute, setAttribute] = useState("");
  const [new_value, setNewValue] = useState("");

  console.log("edit listing");

  const handlePublish = async (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    setError("");

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        item_name,
        seller_name: originalListing.seller,
        attribute,
        new_value,
      }),
    };

    console.log("Edit requestOptions:", requestOptions);

    try {
      console.log(requestOptions);
      const response = await fetch(
        `http://127.0.0.1:8000/posting/modify`,
        requestOptions
      );

      if (!response.ok) {
        console.log(response);
        throw new Error("Failed to modify listing");
      }

      const data = await response.json();
      console.log(data);

      // Handle the success case
      onPublish(true);
      navigate("/listings");
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
          {/* Input fields */}
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
            onChange={(e) => setPrice(parseFloat(e.target.value))}
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
          <input
            type="text"
            placeholder="Attribute to Edit"
            value={attribute}
            onChange={(e) => setAttribute(e.target.value)}
          />
          <input
            type="text"
            placeholder="New Value"
            value={new_value}
            onChange={(e) => setNewValue(e.target.value)}
          />
          <button type="button" onClick={onCancel} className="cancel-button">
            Cancel
          </button>
          <button
            type="button"
            onClick={handlePublish}
            className="publish-button"
          >
            Save Changes
          </button>
          {/* Error message */}
          {error && <p className="error-message">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default EditListing;
