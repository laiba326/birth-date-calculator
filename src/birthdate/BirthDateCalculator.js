import React, { useState } from "react";
import { DatePicker } from "antd";

const BirthDateCalculator = () => {
  const [birthDate, setBirthDate] = useState(null);

  const onChange = (date, DatePicker) => {
    setBirthDate(DatePicker);
  };

  return (
    <>
      <DatePicker onChange={onChange} picker="date" />
      <h1>The selected date is {birthDate}</h1>
    </>
  );
};

export default BirthDateCalculator;
