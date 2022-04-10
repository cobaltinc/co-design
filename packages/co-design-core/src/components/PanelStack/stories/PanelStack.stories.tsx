import React from 'react';
import { Button } from '../../Button';
import { PanelStack } from '../PanelStack';
import { usePanels } from '../usePanels';

export default {
  title: '@co-design/core/PanelStack',
  component: PanelStack,
  argTypes: {},
};

const FirstPanel = () => {
  const { pushPanel } = usePanels();

  return (
    <div>
      This is first.
      <Button
        onClick={() =>
          pushPanel({
            title: 'Second',
            body: <SecondPanel />,
          })
        }
      >
        Push second
      </Button>
    </div>
  );
};

const SecondPanel = () => {
  const { pushPanel } = usePanels();

  return (
    <div>
      This is second.
      <Button
        onClick={() =>
          pushPanel({
            title: 'First',
            body: <FirstPanel />,
          })
        }
      >
        Push first
      </Button>
    </div>
  );
};

export const Default = () => {
  return (
    <div style={{ padding: 16 }}>
      <PanelStack
        width={400}
        height={600}
        initialPanel={{
          title: 'First',
          body: <FirstPanel />,
        }}
      />
    </div>
  );
};
