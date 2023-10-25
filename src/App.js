import "./App.css";
import { useSelector } from "react-redux";

import BirthDateCalculator from "./birthdate/BirthDateCalculator";
import CurrentDateCalculator from "./currentDate/CurrentDateCalculator";
function App() {
  const birthDate = useSelector((state) => state.birthDate.birthDate);
  // console.log(birthDate);
  const currentDate = useSelector((state) => state.currentDate.currentDate);
  // console.log(currentDate);
  return (
    <>
      <BirthDateCalculator />
      <CurrentDateCalculator/>
    
    </>
  );
}

export default App;

// feature-add-date-picker
// bugFix-date-not-formated
