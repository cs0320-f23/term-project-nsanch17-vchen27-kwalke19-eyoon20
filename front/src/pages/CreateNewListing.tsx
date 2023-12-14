import React, { useState } from "react";
import "../style/CreateNewListing.css";
import NavBar from "../components/NavBar/NavBar";
import { useNavigate } from "react-router-dom";

const CreateNewListing = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  
  // Initialize the navigate function
  const navigate = useNavigate();

  const handlePublish = () => {
    const currentDate = new Date().toISOString();
    setDate(currentDate);
    // Here you will handle the submission of the new listing
    // Typically, this would involve setting up a POST request to your server
    navigate("/new-listing-confirmation");
  };

  return (
    <div>
      <NavBar />
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
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button className="publish-button" onClick={handlePublish}>
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateNewListing;
