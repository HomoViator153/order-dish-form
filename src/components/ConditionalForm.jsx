import React from "react";

const ConditionalForm = (props) => {
  const { type, no_of_slices, diameter, spiciness_scale, slices_of_bread } = props.formState;
  const { setFormState } = props;

  const handleOnChange = (e) => {
    const { value, name } = e.target;

    if (name === "name" || name === "type" || name === "preparation_time") {
      setFormState((formState) => ({
        ...formState,
        [name]: value,
      }));
    } else {
      setFormState((formState) => ({
        ...formState,
        [name]: Number(value),
      }));
    }
  };

  const renderConditionalForm = () => {
    if (type === "") return;
    else if (type === "pizza") return renderPizzaForm();
    else if (type === "soup") return renderSoupForm();
    else if (type === "sandwich") return renderSandwichForm();
    else console.error(`Wrong type value: ${type}`);
  };

  const renderPizzaForm = () => {
    return (
      <>
        <label htmlFor="no_of_slices">Number of slices: </label>
        <input
          id="no_of_slices"
          type="number"
          value={no_of_slices}
          onChange={handleOnChange}
          max="50"
          min="1"
          name="no_of_slices"
          required
        />
        <label htmlFor="diameter">Diameter: </label>
        <input
          id="diameter"
          type="number"
          value={diameter}
          onChange={handleOnChange}
          max="100"
          min="10"
          name="diameter"
          required
          step="1"
        />
      </>
    );
  };

  const renderSoupForm = () => {
    return (
      <>
        <label htmlFor="spiciness_scale">Spiciness scale: {spiciness_scale}</label>
        <div className="spiciness_scale-container">
          <span>1</span>
          <input
            id="spiciness_scale"
            type="range"
            value={spiciness_scale}
            onChange={handleOnChange}
            max="10"
            min="1"
            name="spiciness_scale"
            required
          />
          <span>10</span>
        </div>
      </>
    );
  };

  const renderSandwichForm = () => {
    return (
      <>
        <label htmlFor="slices_of_bread">Slices of bread: </label>
        <input
          id="slices_of_bread"
          type="number"
          value={slices_of_bread}
          onChange={handleOnChange}
          max="10"
          min="1"
          name="slices_of_bread"
          required
          step="1"
        />
      </>
    );
  };

  return renderConditionalForm();
};

export default ConditionalForm;
