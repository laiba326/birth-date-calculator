import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { useSelector } from "react-redux";
import {
  differenceInMilliseconds,
  differenceInSeconds,
  differenceInMinutes,
  differenceInHours,
} from "date-fns";
export default function CalculateButton() {
  const [dif, setDif] = useState(null);
  const [difInHours, setDifInHours] = useState(null);
  const [difInMinutes, setDifInMinutes] = useState(null);
  const [difInSeconds, setDifInSeconds] = useState(null);
  const [isBothDatesSelected, setIsBothDatesSelected] = useState(null);

  const birthDate = useSelector((state) => state.birthDate.birthDate);
  const currentDate = useSelector((state) => state.currentDate.currentDate);
  useEffect(() => {
    if (birthDate && currentDate) {
      setIsBothDatesSelected(true);
    } else {
      setIsBothDatesSelected(false);
    }
  }, [birthDate, currentDate]);

  const handleClick = () => {
    if (!isBothDatesSelected) {
      return;
    }
    const difInMillisecondsValue = differenceInMilliseconds(
      new Date(currentDate),
      new Date(birthDate)
    );
    setDif(difInMillisecondsValue);

    const difInSecondsValue = differenceInSeconds(
      new Date(currentDate),
      new Date(birthDate)
    );
    setDifInSeconds(difInSecondsValue);

    const difInHoursValue = differenceInHours(
      new Date(currentDate),
      new Date(birthDate)
    );
    setDifInHours(difInHoursValue);

    const difInMinutesValue = differenceInMinutes(
      new Date(currentDate),
      new Date(birthDate)
    );
    setDifInMinutes(difInMinutesValue);
  };

  return (
    <>
      {isBothDatesSelected ? (
        <Button onClick={handleClick}>Calculate </Button>
      ) : (
        <h1 style={{ color: "blue" }}>Please Select Both Date</h1>
      )}
      <h2>Milliseconds:{dif}</h2>
      <h2>Seconds:{difInSeconds}</h2>
      <h2>Minutes:{difInMinutes}</h2>
      <h2>Hours:{difInHours}</h2>
    </>
  );
}
