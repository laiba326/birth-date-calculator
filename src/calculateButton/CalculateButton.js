import React, { useState } from "react";
import { Button } from "antd";
import { useSelector } from "react-redux";
import { differenceInMilliseconds } from "date-fns";
export default function CalculateButton() {
  const [dif, setDif] = useState(null);

  const birthDate = useSelector((state) => state.birthDate.birthDate);
  const currentDate = useSelector((state) => state.currentDate.currentDate);

  const handleClick = () => {
    const difInSeconds = differenceInMilliseconds(
      new Date(currentDate),
      new Date(birthDate)
    );
    setDif(difInSeconds);
    console.log(difInSeconds, currentDate, birthDate);
  };

  return (
    <>
      <Button onClick={handleClick}>Calculate </Button>
      <h1>{dif}</h1>
    </>
  );
}
