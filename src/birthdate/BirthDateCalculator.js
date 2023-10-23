import React, { useState } from "react";
import { DatePicker } from "antd";

const BirthDateCalculator = () => {
  const [birthdate, setBirthDate] = useState(null);

  const onChange = (date, DatePicker) => {
    setBirthDate(date);
  };

  return (
    <>
      <DatePicker onChange={onChange} picker="date" />
      <h1>The selected date is {"Birthdate"}</h1>
    </>
  );
};

export default BirthDateCalculator;
