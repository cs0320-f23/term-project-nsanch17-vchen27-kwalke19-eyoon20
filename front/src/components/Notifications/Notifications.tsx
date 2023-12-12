import React, { useState, forwardRef } from 'react';
import { Notification, NotificationsProps } from "../../types"
import "../../style/Notifications.css"

const Notifications = forwardRef<HTMLDivElement, NotificationsProps>(({ notifications }, ref) => {
    const [viewedNotifications, setViewedNotifications] = useState<Record<string, boolean>>({});

  const handleNotificationClick = (id: string, link: string) => {
    setViewedNotifications((prev) => ({ ...prev, [id]: true }));
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
    <div className="notifications-popup" ref={ref}>
      {notifications.slice(0, 50).map((notif: Notification) => (
        <div
          key={notif.id}
          className={`notification-item ${!viewedNotifications[notif.id] ? 'unviewed' : ''}`}
          onClick={() => handleNotificationClick(notif.id, notif.link)}
        >
          {notif.userPhoto && <img src={notif.userPhoto} alt="User" className="notification-photo" />}
          <div className="notification-content">
            <span className="notification-message">{notif.message}</span>
            <span className="notification-timestamp">{getTimeElapsed(notif.timestamp)}</span>
          </div>
        </div>
      ))}
    </div>
  );
});

export default Notifications;