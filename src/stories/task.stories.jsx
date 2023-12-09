import React from 'react';
import Checkbox from './task.jsx';

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    isChecked: { control: 'boolean' },
    percentageCompletion: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
  },
};

const Template = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  label1: 'Task Heading',
  label2: 'Get notified when someone posts a comment on a posting.',
  isChecked: false,
  percentageCompletion: 0,
};

export const CheckedWithProgress = Template.bind({});
CheckedWithProgress.args = {
  label1: 'Task Heading',
  label2: 'Get notified when someone posts a comment on a posting.',
  isChecked: true,
  percentageCompletion: 75,
};
