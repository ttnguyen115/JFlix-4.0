import * as React from 'react';
import { Helmet } from 'react-helmet-async';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <div className="" style={{ marginTop: 80 }}>
        <span>My HomePage hehe</span>
      </div>
    </>
  );
}
