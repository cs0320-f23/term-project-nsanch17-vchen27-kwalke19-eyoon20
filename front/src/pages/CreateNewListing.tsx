import React, { useState } from "react";
import "../style/CreateNewListing.css";
import NavBar from "../components/NavBar/NavBar";
import { useNavigate } from "react-router-dom";
import { useUser } from "../components/UserProfile/UserContext";
import Model from "../assets/model-placeholder.png";

interface CreateNewListingProps {
  onPublish: (status: boolean) => void;
}

const CreateNewListing: React.FC<CreateNewListingProps> = ({ onPublish }) => {
  const [item_name, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [username, setUsername] = useState("");
  const [big_pic, setPic] = useState(Model);
  const [photo, setPhoto] = useState<File | null>(null);
  const [error, setError] = useState("");

  // Initialize the navigate function
  const navigate = useNavigate();
  const { user } = useUser();

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0];
    setPhoto(selectedFile);
  };

  const handlePublish = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    const sellerName = user?.username || "Anonymous";

    const newListing = {
      item_name,
      seller_name: sellerName,
      price,
      description,
      qty,
      big_pic,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newListing),
    };

    console.log(requestOptions);

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/posting/create",
        requestOptions
      );
      const data = await response.json();
      console.log(data);

      if (!response.ok) {
        throw new Error(
          data.error_message || "An error occurred during publishing."
        );
      }

      console.log("Publish successful:", data);
      onPublish(true);
    } catch (error) {
      if (error instanceof Error) {
        console.error("Publish failed:", error.message);
        setError(error.message);
      } else {
        console.error("Publish failed:", error);
        setError("An unexpected error occurred.");
      }
    }

    // Here you will handle the submission of the new listing
    // Typically, this would involve setting up a POST request to your server
    navigate("/new-listing-confirmation");
  };

  return (
    <div>
      <div className="create-listing-container">
        <h1>Create A New Listing</h1>
        <div className="form-container">
          <div className="photo-upload">
            <button>Add Photos</button>
            {/* Implement photo upload functionality here */}
          </div>
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
          <form onSubmit={handlePublish} className="form-container">
            <button type="submit" className="publish-button">
              Publish
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateNewListing;
