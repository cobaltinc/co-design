import React from 'react';
import { MediaQuery } from '../MediaQuery';

export default {
  title: '@co-design/primitive/MediaQuery',
  component: MediaQuery,
};

export const Default = () => {
  const highlight = { color: 'blue' };
  return (
    <div>
      <MediaQuery largerThan="xlarge" style={highlight}>
        <div>largerThan xlarge</div>
      </MediaQuery>
      <MediaQuery largerThan="large" style={highlight}>
        <div>largerThan large</div>
      </MediaQuery>
      <MediaQuery largerThan="medium" style={highlight}>
        <div>largerThan medium</div>
      </MediaQuery>
      <MediaQuery largerThan="small" style={highlight}>
        <div>largerThan small</div>
      </MediaQuery>
      <MediaQuery largerThan="xsmall" style={highlight}>
        <div>largerThan xsmall</div>
      </MediaQuery>

      <MediaQuery smallerThan="xlarge" style={highlight}>
        <div>smallerThan xlarge</div>
      </MediaQuery>
      <MediaQuery smallerThan="large" style={highlight}>
        <div>smallerThan large</div>
      </MediaQuery>
      <MediaQuery smallerThan="medium" style={highlight}>
        <div>smallerThan medium</div>
      </MediaQuery>
      <MediaQuery smallerThan="small" style={highlight}>
        <div>smallerThan small</div>
      </MediaQuery>
      <MediaQuery smallerThan="xsmall" style={highlight}>
        <div>smallerThan xsmall</div>
      </MediaQuery>
    </div>
  );
};
