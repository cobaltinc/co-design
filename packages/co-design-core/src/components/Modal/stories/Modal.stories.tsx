import React, { useState } from 'react';
import { Modal } from '../Modal';

export default {
  title: '@co-design/core/Modal',
  component: Modal,
};

export const Default = () => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal opened={opened} onClose={() => setOpened(false)} title="Title!">
        Content
      </Modal>
      <button onClick={() => setOpened(true)}>Open Modal</button>
    </>
  );
};

export const NoTitle = () => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal opened={opened} onClose={() => setOpened(false)}>
        Content
      </Modal>
      <button onClick={() => setOpened(true)}>Open Modal</button>
    </>
  );
};
