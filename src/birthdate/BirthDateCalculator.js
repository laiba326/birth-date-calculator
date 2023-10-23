import React, { useState } from "react";
import { DatePicker } from "antd";

const BirthDateCalculator = () => {
  const [birthdate, setBirthDate] = useState(null);

  const onChange = (date, DatePicker) => {
    setBirthDate(DatePicker);
  };

  return (
    <>
      <DatePicker onChange={onChange} picker="date" />
      <h1>The selected date is {birthdate}</h1>
    </>
  );
};

export default BirthDateCalculator;
