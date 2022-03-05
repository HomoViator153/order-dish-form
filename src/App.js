import "./App.css";
import { useState } from "react";

import BasicForm from "./components/BasicForm";
import ConditionalForm from "./components/ConditionalForm";
import SuccessMsg from "./components/SuccessMsg";
import FailureMsg from "./components/FailureMsg";

const url = "http://localhost:3000/posts";

const App = () => {
  const [isDishTypeSet, setIsDishTypeSet] = useState(false);
  const [responseFromServer, setResponseFromServer] = useState({});
  const [isListShown, setIsListShown] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    preparation_time: "00:00:00",
    type: "",
    no_of_slices: "",
    diameter: "",
    spiciness_scale: 1,
    slices_of_bread: "",
  });

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await postFormData(formState);
      setResponseFromServer(response);
    } catch (err) {
      console.error(err);
    }
    resetFormState();
  };

  const postFormData = async (formData) => {
    let acurateData;

    if (formState.type === "pizza") {
      const { slices_of_bread, spiciness_scale, ...pizzaData } = formData;
      acurateData = pizzaData;
    } else if (formState.type === "soup") {
      const { slices_of_bread, diameter, no_of_slices, ...soupData } = formData;
      acurateData = soupData;
    } else if (formState.type === "sandwich") {
      const { spiciness_scale, diameter, no_of_slices, ...sandwichData } = formData;
      acurateData = sandwichData;
    }

    const JsonFormData = JSON.stringify(acurateData);

    const fetchParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JsonFormData,
    };

    const response = await fetch(url, fetchParameters);
    displayMsg(response);

    return response.json();
  };

  const displayMsg = (response) => {
    if (isListShown) setIsListShown(false);
    if (response.ok) {
      document.querySelector(".success_msg-outer_container").classList.add("active");
      document.querySelector(".failure_msg-outer_container").classList.remove("active");
    } else {
      document.querySelector(".failure_msg-outer_container").classList.add("active");
      document.querySelector(".success_msg-outer_container").classList.remove("active");
      console.error(response);
    }
  };

  const resetFormState = () => {
    setIsDishTypeSet(false);
    setFormState((formState) => ({
      ...formState,
      name: "",
      diameter: "",
      type: "",
      no_of_slices: "",
      preparation_time: "00:00:00",
      slices_of_bread: "",
      spiciness_scale: 1,
    }));
  };

  return (
    <main className="form-container">
      <form onSubmit={handleSubmitForm}>
        <BasicForm
          formState={formState}
          setFormState={setFormState}
          isDishTypeSet={isDishTypeSet}
          setIsDishTypeSet={setIsDishTypeSet}
        />
        {isDishTypeSet && <ConditionalForm formState={formState} setFormState={setFormState} />}
        <button type="submit">Order</button>
      </form>
      <SuccessMsg
        responseFromServer={responseFromServer}
        isListShown={isListShown}
        setIsListShown={setIsListShown}
      />
      <FailureMsg />
    </main>
  );
};

export default App;
