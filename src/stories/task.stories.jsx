import React from 'react';
import Checkbox from './task.jsx';

export default {
  title: 'Checkbox',
  component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  label1: 'Task Heading',
  label2: 'Get notified when someone posts a comment on a posting.',
  isChecked: false,
  onChange: (checked) => console.log('Checkbox is checked:', checked),
};
