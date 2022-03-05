import React from "react";

const FailureMsg = () => {
  return (
    <div className="failure_msg-outer_container">
      <div className="failure_msg-container">
        <p className="failure_submit">The order hasn't been sent.</p>
        <span className="failure_msg-span">
          <strong>See details in console</strong>
        </span>
      </div>
    </div>
  );
};

export default FailureMsg;
