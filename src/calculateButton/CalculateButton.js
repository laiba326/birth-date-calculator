import React, { useState } from "react";
import { Button } from "antd";
import { useSelector } from "react-redux";
import { differenceInMilliseconds } from "date-fns";
import { differenceInSeconds } from "date-fns";
import { differenceInMinutes } from "date-fns";
import { differenceInHours } from "date-fns";
export default function CalculateButton() {
  const [dif, setDif] = useState(null);

  const birthDate = useSelector((state) => state.birthDate.birthDate);
  const currentDate = useSelector((state) => state.currentDate.currentDate);

  const handleCalculateHours = () => {
    const difInHours = differenceInHours(
      new Date(currentDate),
      new Date(birthDate)
    );
    setDif(difInHours);
  };

  const handleCalculateMinutes = () => {
    const difInMinutes = differenceInMinutes(
      new Date(currentDate),
      new Date(birthDate)
    );
    setDif(difInMinutes);
  };

  const handleCalculateSeconds = () => {
    const difInSeconds = differenceInSeconds(
      new Date(currentDate),
      new Date(birthDate)
    );
    setDif(difInSeconds);
  };

  const handleCalculateMilliseconds = () => {
    const difInSeconds = differenceInMilliseconds(
      new Date(currentDate),
      new Date(birthDate)
    );
    setDif(difInSeconds);
    console.log(difInSeconds, currentDate, birthDate);
  };

  return (
    <>
      <Button onClick={handleCalculateMilliseconds}>
        Calculate Milliseconds{" "}
      </Button>
      <Button onClick={handleCalculateSeconds}>Calculate Seconds</Button>
      <Button onClick={handleCalculateMinutes}>Calculate Minutes</Button>
      <Button onClick={handleCalculateHours}>Calculate Hours</Button>
      <h1>{dif}</h1>
    </>
  );
}
