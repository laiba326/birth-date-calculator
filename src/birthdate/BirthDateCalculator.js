import React, { useState } from "react";
import { DatePicker } from "antd";
import { useDispatch } from "react-redux";
import { addBirthDate } from "../redux/slice/birthDateSlice";

const BirthDateCalculator = () => {
  const [birthDate, setBirthDate] = useState(null);

  const dispatch = useDispatch();

  const onChange = (date, DatePicker) => {
    dispatch(addBirthDate(DatePicker));
  };

  return (
    <>
      <DatePicker onChange={onChange} picker="date" />
      <h1>The selected date is {birthDate}</h1>
    </>
  );
};

export default BirthDateCalculator;
