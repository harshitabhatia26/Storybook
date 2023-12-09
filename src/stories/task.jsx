import React from "react";
import "./task.css";

const ProgressBar = ({ percentageCompletion }) => {
  const progressStyle = {
    width: `${percentageCompletion}%`,
    height: "5px",
    backgroundColor: "#2196F3",
    transition: "width 0.3s ease",
  };

  return (
    <div className="progress-bar-container">
      {percentageCompletion >= 0 && (
        <div style={progressStyle} className="progress-bar"></div>
      )}
    </div>
  );
};

const Checkbox = ({
  label1,
  label2,
  isChecked,
  onChange,
  percentageCompletion,
}) => {
  const handleCheckboxChange = () => {
    onChange(!isChecked);
  };

  return (
    <div className="task">
      <div className="checkbox-container">
        <div
          className={`checkmark ${isChecked ? "checked" : ""}`}
          style={{ backgroundColor: isChecked ? "#2196F3" : "transparent" }}
        >
          {isChecked && (
            <svg
              className="checkmark-svg"
              fill="#000000"
              width="129px"
              height="129px"
              viewBox="0 0 1920 1920"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000000"
              stroke-width="0.019200000000000002"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M1743.858 267.012 710.747 1300.124 176.005 765.382 0 941.387l710.747 710.871 1209.24-1209.116z"
                  fill-rule="evenodd"
                ></path>{" "}
              </g>
            </svg>
          )}
        </div>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <div className="task-info">
          <label className="task-heading">{label1}</label>
          <label className="task-subheading">{label2}</label>
        </div>
      </div>
      <div className="progress">
        <label className="progress-bar-label">{percentageCompletion}% Complete</label>
        <ProgressBar percentageCompletion={percentageCompletion} />
      </div>
    </div>
  );
};

export default Checkbox;
