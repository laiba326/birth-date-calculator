import "./App.css";
import { useSelector } from "react-redux";
import styled from "styled-components";

import BirthDateCalculator from "./birthdate/BirthDateCalculator";
import CurrentDateCalculator from "./currentDate/CurrentDateCalculator";
import CalculateButton from "./calculateButton/CalculateButton";
function App() {
  const birthDate = useSelector((state) => state.birthDate.birthDate);
  // console.log(birthDate);
  const currentDate = useSelector((state) => state.currentDate.currentDate);
  // console.log(currentDate);
  const MainContainer = styled.main`
    background-color: aqua;
    margin-top: 20px;
    margin-left: 300px;
    margin-right: 400px;
    border: solid;
    padding: 40px;
    border-radius: 10px;
  `;
  const H1 = styled.h1`
    margin-left: 450px;
    margin-right: 450px;
  `;

  return (
    <>
      <H1>Age Calculator</H1>
      <MainContainer>
        <BirthDateCalculator />
        <CurrentDateCalculator />
        <CalculateButton />
      </MainContainer>
    </>
  );
}

export default App;

// feature-add-date-picker
// bugFix-date-not-formated
