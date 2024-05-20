import React from 'react';

export default function Content() {
  return (
    <div className="site-wrapper">
      <main>
        <Intro />
        <Pricing id="pricing" />
        <Project id="project" />
      </main>
    </div>
  );
}
