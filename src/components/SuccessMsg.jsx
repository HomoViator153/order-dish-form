import React from "react";

const SuccessMsg = ({ isListShown }) => {
  return (
    <div className="success_msg-outer_container">
      <div className="success_msg-container">
        <p className="success_submit">The order has been sent.</p>
        <span className="success_msg-span">
          <strong>{!isListShown ? "See details \u2193" : "Hide details \u2191"}</strong>
        </span>
      </div>
      {isListShown && <div className="details-container">Will be rendered list</div>}
    </div>
  );
};

export default SuccessMsg;
