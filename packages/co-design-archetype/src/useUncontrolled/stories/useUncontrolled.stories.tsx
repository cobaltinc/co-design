import React, { useState } from 'react';
import { useUncontrolled } from '../useUncontrolled';
import { useId } from '../../useId';

export default {
  title: '@co-design/archetype/useUncontrolled',
};

interface CustomInputProps {
  label: string;
  value?: string;
  defaultValue?: string;
  onChange?: (nextValue: string) => void;
}

const CustomInput = ({ label, value, defaultValue, onChange }: CustomInputProps) => {
  const id = useId();
  const [_value, handleChange] = useUncontrolled({
    value,
    defaultValue,
    finalValue: null,
    onChange,
    rule: (val) => typeof val === 'string',
  });

  return (
    <div style={{ padding: '1rem' }}>
      <label htmlFor={id}>{label}</label>
      <br />
      <input id={id} type="text" value={_value} onChange={(e) => handleChange(e.target.value)} />
    </div>
  );
};

export const Default = () => {
  const [controlledValue, setControlledValue] = useState('controlled');

  return (
    <div style={{ padding: 20 }}>
      <CustomInput label="Uncontrolled" defaultValue="uncontrolled" />
      <CustomInput label="Controlled" value={controlledValue} onChange={setControlledValue} />
      <CustomInput label="Controlled (fixed value)" value="fixed" onChange={setControlledValue} />
    </div>
  );
};
