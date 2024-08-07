// src/components/ViewList/ViewsList.jsx
import React from 'react';
import { chunkedRoutes } from 'config/routes';
import './ViewsList.css';

const ViewsList = () => {
  return (
    <div className="views-list">
      {chunkedRoutes.map((chunk, index) => (
        <div key={index} className="views-row">
          {chunk.map((route, idx) => (
            <div key={idx} className="view-item">
              {route.icon && (
                <div>
                  <img src={route.icon} alt={route.name} />
                </div>
              )}
              <div>
                <a href={route.path}>{route.name}</a>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ViewsList;
