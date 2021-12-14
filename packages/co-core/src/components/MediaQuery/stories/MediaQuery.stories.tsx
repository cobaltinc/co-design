import React from 'react';
import { MediaQuery } from '../MediaQuery';

export default {
  title: '@co/core/MediaQuery',
  component: MediaQuery,
};

export const Default = () => {
  const hide = { display: 'none' };
  return (
    <div>
      <MediaQuery largerThan="xlarge" style={hide}>
        <div>largerThan xlarge</div>
      </MediaQuery>
      <MediaQuery largerThan="large" style={hide}>
        <div>largerThan large</div>
      </MediaQuery>
      <MediaQuery largerThan="medium" style={hide}>
        <div>largerThan medium</div>
      </MediaQuery>
      <MediaQuery largerThan="small" style={hide}>
        <div>largerThan small</div>
      </MediaQuery>
      <MediaQuery largerThan="xsmall" style={hide}>
        <div>largerThan xsmall</div>
      </MediaQuery>

      <MediaQuery smallerThan="xlarge" style={hide}>
        <div>smallerThan xlarge</div>
      </MediaQuery>
      <MediaQuery smallerThan="large" style={hide}>
        <div>smallerThan large</div>
      </MediaQuery>
      <MediaQuery smallerThan="medium" style={hide}>
        <div>smallerThan medium</div>
      </MediaQuery>
      <MediaQuery smallerThan="small" style={hide}>
        <div>smallerThan small</div>
      </MediaQuery>
      <MediaQuery smallerThan="xsmall" style={hide}>
        <div>smallerThan xsmall</div>
      </MediaQuery>
    </div>
  );
};
