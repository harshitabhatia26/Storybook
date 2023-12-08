import React from 'react';
import CheckboxList from './taskList';

export default {
  title: 'CheckboxList',
  component: CheckboxList,
};

export const Default = () => <CheckboxList />;

export const WithCheckedItems = () => (
  <CheckboxList
    checkboxes={[
      { id: 1, label1: 'Task 1', label2: 'Subtask A', isChecked: true },
      { id: 2, label1: 'Task 2', label2: 'Subtask B', isChecked: false },
    ]}
  />
);
