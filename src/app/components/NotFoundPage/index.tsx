import React from 'react';
import { HelmetHeader } from '../HelmetHeader';
import './styles.scss';
import { P } from './P';

export function NotFoundPage() {
  return (
    <>
      <HelmetHeader content="Page not found" helmetTitle="404 Page Not Found" />

      <div className="notfound_wrapper">
        <div className="notfound_title">
          4
          <span role="img" aria-label="Crying Face">
            😢
          </span>
          4
        </div>
        <P>Page not found.</P>
      </div>
    </>
  );
}
