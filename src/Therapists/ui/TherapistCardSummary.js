import React from 'react';

export const TherapistCardSummary = ({ specialty, name, email }) => (
  <>
    <div className="cityState">
      <em>New York, NY</em>
    </div>
    <h3 className="name">
      {name}
      {name && ', MD'}
    </h3>
    <div className="specialty">{specialty}</div>
    <div className="email">{email}</div>
  </>
);
