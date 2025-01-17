import { Key, ReactNode } from 'react';
//
import { Radio, RadioProps } from '../components';

export const renderRadioOptions = (
  options: Array<
    {
      value: any;
      label: ReactNode;
      key: Key;
    } & Pick<RadioProps, 'variant' | 'labelPosition'>
  >,
) => (
  <div style={{ display: 'flex' }}>
    {options.map(({ key, value, label, ...others }) => (
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      <Radio key={key} value={value} {...others}>
        {label}
      </Radio>
    ))}
  </div>
);
