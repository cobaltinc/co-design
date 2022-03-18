import React from 'react';
import { Card } from '../Card';

export default {
  title: '@co-design/core/Card',
  component: Card,
  argTypes: {},
};

export const Default = () => {
  return (
    <div style={{ padding: 24 }}>
      <Card co={{ maxWidth: 400 }}>
        <Card.Section>
          <img src="https://picsum.photos/400/200" />
        </Card.Section>
        Card
      </Card>
    </div>
  );
};
