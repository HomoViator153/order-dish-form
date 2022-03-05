import { useState } from "react";

const SuccessMsg = ({ isListShown, responseFromServer, setIsListShown }) => {
  const [renderListState, setRenderListState] = useState([]);
  let acurateData;

  if (responseFromServer.type === "pizza") {
    const { slices_of_bread, spiciness_scale, id, ...pizzaData } = responseFromServer;
    acurateData = pizzaData;
  } else if (responseFromServer.type === "soup") {
    const { slices_of_bread, diameter, no_of_slices, id, ...soupData } = responseFromServer;
    acurateData = soupData;
  } else if (responseFromServer.type === "sandwich") {
    const { spiciness_scale, diameter, no_of_slices, id, ...sandwichData } = responseFromServer;
    acurateData = sandwichData;
  }

  const handleClick = () => {
    const keysArray = Object.keys(acurateData);
    const valuesArray = Object.values(acurateData);

    const keysArrayFinal = keysArray.map((item) => {
      if (item === "name") return "Dish name";
      else if (item === "preparation_time") return "Preparation time";
      else if (item === "type") return "Dish type";
      else if (item === "no_of_slices") return "Number of slices";
      else if (item === "diameter") return "Diameter";
      else if (item === "spiciness_scale") return "Spiciness";
      else if (item === "slices_of_bread") return "Slices of bread";
    });

    const renderList = keysArrayFinal.map((item, index) => (
      <p key={item} className="list_element-container">
        <span className="key_item">{item}: </span>
        <span className="value_item">{valuesArray[index]}</span>
      </p>
    ));
    setRenderListState(renderList);
    setIsListShown(!isListShown);
  };

  return (
    <div className="success_msg-outer_container">
      <div className="success_msg-container">
        <p className="success_submit">The order has been sent.</p>
        <span className="success_msg-span" onClick={handleClick}>
          <strong>{!isListShown ? "See details \u2193" : "Hide details \u2191"}</strong>
        </span>
      </div>
      {isListShown && <div className="details-container">{renderListState}</div>}
    </div>
  );
};

export default SuccessMsg;
