import React, { useState } from "react";
import { DatePicker } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addBirthDate } from "../redux/slice/birthDateSlice";

const BirthDateCalculator = () => {
  // const [birthDate, setBirthDate] = useState(null);
  const birthDate = useSelector((state) => state.birthDate.birthDate);
  const dispatch = useDispatch();

  const onChange = (date, DatePicker) => {
    dispatch(addBirthDate(DatePicker));
  };

  return (
    <>
      <DatePicker onChange={onChange} picker="date" />
      <h1>The birthdate is {birthDate}</h1>
    </>
  );
};

export default BirthDateCalculator;
