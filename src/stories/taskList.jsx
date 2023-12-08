import React, { useState } from 'react';
import Checkbox from './task.jsx'

const CheckboxList = () => {
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, label1: 'Task 1', label2: 'Subtask A', isChecked: false },
    { id: 2, label1: 'Task 2', label2: 'Subtask B', isChecked: false },
  ]);

  const handleCheckboxChange = (id, checked) => {
    setCheckboxes((prevCheckboxes) =>
      prevCheckboxes.map((checkbox) =>
        checkbox.id === id ? { ...checkbox, isChecked: checked } : checkbox
      )
    );
  };

  return (
    <div>
      {checkboxes.map((checkbox) => (
        <Checkbox
          key={checkbox.id}
          label1={checkbox.label1}
          label2={checkbox.label2}
          isChecked={checkbox.isChecked}
          onChange={(checked) => handleCheckboxChange(checkbox.id, checked)}
        />
      ))}
    </div>
  );
};

export default CheckboxList;
