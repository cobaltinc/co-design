import { useToggle } from '@co-design/hooks';
import React from 'react';
import { GroupedTransition } from '../GroupedTransition';

export default {
  title: '@co-design/core/GroupedTransition',
  component: GroupedTransition,
};

export const Default = (props) => {
  const [state, toggle] = useToggle();
  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      <GroupedTransition
        mounted={state}
        transitions={{
          box: {
            duration: 400,
            transition: 'fade',
          },
          text: {
            duration: 1000,
            transition: 'pop',
          },
        }}
      >
        {(styles) => (
          <div>
            <div style={{ width: 100, height: 100, backgroundColor: 'red', ...styles.box }} />
            <div style={styles.text}>Hello</div>
          </div>
        )}
      </GroupedTransition>
    </div>
  );
};
