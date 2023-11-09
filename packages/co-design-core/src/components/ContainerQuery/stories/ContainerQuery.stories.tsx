import React from 'react';
import { ContainerQuery } from '../ContainerQuery';

export default {
  title: '@co-design/core/ContainerQuery',
  component: ContainerQuery,
};

export const Default = () => {
  const highlight = { color: 'blue' };
  return (
    <div>
      <ContainerQuery largerThan="xlarge" style={highlight}>
        <div>largerThan xlarge</div>
      </ContainerQuery>
      <ContainerQuery largerThan="large" style={highlight}>
        <div>largerThan large</div>
      </ContainerQuery>
      <ContainerQuery largerThan="medium" style={highlight}>
        <div>largerThan medium</div>
      </ContainerQuery>
      <ContainerQuery largerThan="small" style={highlight}>
        <div>largerThan small</div>
      </ContainerQuery>
      <ContainerQuery largerThan="xsmall" style={highlight}>
        <div>largerThan xsmall</div>
      </ContainerQuery>

      <ContainerQuery smallerThan="xlarge" style={highlight}>
        <div>smallerThan xlarge</div>
      </ContainerQuery>
      <ContainerQuery smallerThan="large" style={highlight}>
        <div>smallerThan large</div>
      </ContainerQuery>
      <ContainerQuery smallerThan="medium" style={highlight}>
        <div>smallerThan medium</div>
      </ContainerQuery>
      <ContainerQuery smallerThan="small" style={highlight}>
        <div>smallerThan small</div>
      </ContainerQuery>
      <ContainerQuery smallerThan="xsmall" style={highlight}>
        <div>smallerThan xsmall</div>
      </ContainerQuery>
    </div>
  );
};
