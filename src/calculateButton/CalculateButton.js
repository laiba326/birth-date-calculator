import React, { useState } from "react";
import { Button } from "antd";
import { useSelector } from "react-redux";
import { differenceInMilliseconds, differenceInDays,differenceInWeeks } from "date-fns";
export default function CalculateButton() {
  const [dif, setDif] = useState(null);
  const [difInDays, setDifInDays] = useState(null);
  const [difInWeeks, setDifInWeeks] = useState(null);



  const birthDate = useSelector((state) => state.birthDate.birthDate);
  const currentDate = useSelector((state) => state.currentDate.currentDate);

  const handleClick = () => {
    const difInSeconds = differenceInMilliseconds(
      new Date(currentDate),
      new Date(birthDate)
    );
    setDif(difInSeconds);
    console.log(difInSeconds, currentDate, birthDate);
  
  
    const diffInDays = differenceInDays(
      new Date(currentDate),
      new Date(birthDate)
    );
    setDifInDays(diffInDays);
  
    const diffInWeeks = differenceInWeeks(
      new Date(currentDate),
      new Date(birthDate)
    );
    setDifInWeeks(diffInWeeks);

  
};
  return (
    <>
      <Button onClick={handleClick}>Calculate </Button>
      <h1>differenceInMilliseconds: {dif}</h1>
      <h1>differenceInDays: {difInDays}</h1>
      <h1>differenceInWeeks: {difInWeeks}</h1>
    </>
  );
}
