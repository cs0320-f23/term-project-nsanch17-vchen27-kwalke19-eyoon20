import React, { useState, forwardRef } from 'react';
import { Posting, SavedItemsProps } from "../../types"
import "../../style/SavedItems.css"

const SavedItems = forwardRef<HTMLDivElement, SavedItemsProps>(({ saveditems }, ref) => {
    const [viewedSavedItems, setViewedSavedItems] = useState<Record<string, boolean>>({});

  const handleNotificationClick = (id: string, link: string) => {
    setViewedSavedItems((prev) => ({ ...prev, [id]: true }));
    window.location.href = link;
  };

  const getTimeElapsed = (timestamp: Date) => {
    const seconds = Math.floor((new Date().getTime() - new Date(timestamp).getTime()) / 1000);
  
    if (seconds === 1) return '1 second ago'; // Handle singular case
  
    let interval = seconds / 31536000;
    if (interval >= 1) return `${Math.floor(interval)} year${Math.floor(interval) !== 1 ? 's' : ''} ago`;
    interval = seconds / 2592000;
    if (interval >= 1) return `${Math.floor(interval)} month${Math.floor(interval) !== 1 ? 's' : ''} ago`;
    interval = seconds / 604800;
    if (interval >= 1) return `${Math.floor(interval)} week${Math.floor(interval) !== 1 ? 's' : ''} ago`;
    interval = seconds / 86400;
    if (interval >= 1) return `${Math.floor(interval)} day${Math.floor(interval) !== 1 ? 's' : ''} ago`;
    interval = seconds / 3600;
    if (interval >= 1) return `${Math.floor(interval)} hour${Math.floor(interval) !== 1 ? 's' : ''} ago`;
    interval = seconds / 60;
    if (interval >= 1) return `${Math.floor(interval)} minute${Math.floor(interval) !== 1 ? 's' : ''} ago`;
  
    return `${Math.floor(seconds)} second${Math.floor(seconds) !== 1 ? 's' : ''} ago`;
  };
  
  

  return (
    <div className="saveditems-popup" ref={ref}>
      {saveditems.slice(0, 50).map((s: Posting) => (
        <div
          key={s.id}
          className={`saveditems-item ${!viewedSavedItems[s.id] ? 'unviewed' : ''}`}
          onClick={() => handleNotificationClick(s.id, s.link)}
        >
          {s.coverPhoto && <img src={s.coverPhoto} alt="User" className="saveditems-photo" />}
          <div className="saveditems-content">
            <span className="saveditems-message">{s.name}</span>
            <span className="saveditems-timestamp">{getTimeElapsed(s.date)}</span>
          </div>
        </div>
      ))}
    </div>
  );
});

export default SavedItems;