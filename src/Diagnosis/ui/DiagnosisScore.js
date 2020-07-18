import React from 'react';
import { PullQuote, Ranges } from 'Diagnosis/ui/styles-Diagnosis';

export const ScoreRange = ({ min = 0, max = 27 }) => (
  <Ranges className='ranges'>
    <em> {min} </em>
    <em> {max} </em>
  </Ranges>
);

export const ScoreTotal = ({ score, outOfScore }) => (
  <span className='total'>
    <em> {score || 0} </em> out of
    <em> {outOfScore || 0} </em>
  </span>
);

export const ScoreExplanation = () => (
  <PullQuote>
    <p>
      Depression is a mood disorder that causes a persistent feeling of sadness
      and loss of interest.
    </p>
    <cite>Mayo Clinic</cite>
  </PullQuote>
);
