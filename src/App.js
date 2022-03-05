import "./App.css";
import { useState } from "react";

import BasicForm from "./components/BasicForm";
import ConditionalForm from "./components/ConditionalForm";

const App = () => {
  const [isDishTypeSet, setIsDishTypeSet] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    preparation_time: "00:00:00",
    type: "",
    no_of_slices: "",
    diameter: "",
    spiciness_scale: 1,
    slices_of_bread: "",
  });
  return (
    <main className="form-container">
      <form action="" method="POST">
        <BasicForm
          formState={formState}
          setFormState={setFormState}
          isDishTypeSet={isDishTypeSet}
          setIsDishTypeSet={setIsDishTypeSet}
        />
        {isDishTypeSet && <ConditionalForm formState={formState} setFormState={setFormState} />}
        <button type="submit">Order</button>
      </form>
    </main>
  );
};

export default App;
