// DeleteConfirmationPopup.tsx

import React from "react";
import "../style/DeleteConfirmationPopup.css";

interface DeleteConfirmationPopupProps {
  itemName: string;
  onCancel: () => void;
  onDelete: () => void;
}

const DeleteConfirmationPopup: React.FC<DeleteConfirmationPopupProps> = ({
  itemName,
  onCancel,
  onDelete,
}) => {
  return (
    <div className="delete-confirmation-container">
      <div className="delete-confirmation-popup">
        <p>{`Are you sure you want to delete ${itemName}?`}</p>
        <div className="delete-confirmation-buttons">
          <button onClick={onDelete}>Yes</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationPopup;
