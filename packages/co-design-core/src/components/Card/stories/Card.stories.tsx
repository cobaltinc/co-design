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
          <img src="https://fastly.picsum.photos/id/586/400/200.jpg?hmac=7YZrdETmXCFxEWGl6PgF7aYbL8ynsOu_oGNXX30Wz50" />
        </Card.Section>
        Card
      </Card>
    </div>
  );
};
