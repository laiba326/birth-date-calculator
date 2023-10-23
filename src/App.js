import "./App.css";
import { useSelector } from "react-redux";

import BirthDateCalculator from "./birthdate/BirthDateCalculator";
function App() {
  const birthDate = useSelector((state) => state.birthDate.birthDate);
  console.log(birthDate);

  return (
    <>
      <BirthDateCalculator />
    </>
  );
}

export default App;

// feature-add-date-picker
// bugFix-date-not-formated
