import React from "react";

const BasicForm = (props) => {
  const { name, type, preparation_time } = props.formState;
  const { isDishTypeSet, setIsDishTypeSet, setFormState } = props;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <label htmlFor="name">Dish name: </label>
      <input
        type="text"
        value={name}
        onChange={handleOnChange}
        name="name"
        id="name"
        required
        autoFocus
      />
      <label htmlFor="preparation_time">Preparation time: </label>
      <input
        type="time"
        value={preparation_time}
        onChange={handleOnChange}
        name="preparation_time"
        id="preparation_time"
        step="2"
      />
      <label htmlFor="type">Dish type: </label>
      <select
        name="type"
        value={type}
        onChange={(e) => {
          handleOnChange(e);
          if (isDishTypeSet) setIsDishTypeSet(true);
        }}
        id="type"
        required>
        <option hidden disabled value="">
          -- Choose dish type --
        </option>
        <option value="pizza">Pizza</option>
        <option value="soup">Soup</option>
        <option value="sandwich">Sandwich</option>
      </select>
    </>
  );
};

export default BasicForm;
