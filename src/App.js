import "./App.css";

import BasicForm from "./components/BasicForm";
import ConditionalForm from "./components/ConditionalForm";

const App = () => {
  return (
    <main className="form-container">
      <form action="" method="POST">
        <BasicForm />
        <ConditionalForm />
        <button type="submit">Order</button>
      </form>
    </main>
  );
};

export default App;
