import React from "react";

const BasicForm = () => {
  return (
    <>
      <label htmlFor="name">Dish name: </label>
      <input autofocus type="text" name="name" id="name" required />
      <label htmlFor="preparation_time">Preparation time: </label>
      <input type="time" name="preparation_time" id="preparation_time" step="2" />
      <label htmlFor="type">Dish type: </label>
      <select name="type" id="type" required>
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
