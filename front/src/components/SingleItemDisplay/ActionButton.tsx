import React from 'react';
import "../../style/SingleItemDisplay.css"

// Define the props interface
interface ActionButtonProps {
  text: string;
  type: 'wishlist' | 'message'; // Adjust this as needed for your types of buttons
}

// Use the interface for your component props
const ActionButton: React.FC<ActionButtonProps> = ({ text, type }) => {
  const buttonClass = `action-button ${type}`;
  return (
    <button className={buttonClass}>{text}</button>
  );
};

export default ActionButton;