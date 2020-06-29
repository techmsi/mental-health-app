import React from 'react';

export const TherapistCardSummary = ({ specialty, name, email }) => (
  <>
    <h4 className="name">{name}, MD</h4>
    <div className="specialty">{specialty}</div>
    <div className="email">{email}</div>
  </>
);
