import React, { useState } from "react";
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

  const birthDate = useSelector((state) => state.birthDate.birthDate);
  const currentDate = useSelector((state) => state.currentDate.currentDate);

  const handleClick = () => {
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
      <Button onClick={handleClick}>Calculate </Button>
      <h2>Milliseconds:{dif}</h2>
      <h2>Seconds:{difInSeconds}</h2>
      <h2>Minutes:{difInMinutes}</h2>
      <h2>Hours:{difInHours}</h2>
    </>
  );
}
