import React from 'react';

export const TherapistCardSummary = ({ specialty, name, email }) => (
  <>
    <div className="cityState">New York, NY</div>
    <h3 className="name">
      {name}
      <small>{name && ', MD'}</small>
    </h3>
    <div className="specialty">{specialty}</div>
    <div className="email">{email}</div>
  </>
);
