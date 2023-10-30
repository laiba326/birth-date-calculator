import React, { useState } from "react";
import { Button, DatePicker } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addBirthDate } from "../redux/slice/birthDateSlice";
import dayjs from "dayjs";

const BirthDateCalculator = () => {
  const birthDate = useSelector((state) => state.birthDate.birthDate);
  const dispatch = useDispatch();

  const onChange = (date, DatePicker) => {
    dispatch(addBirthDate(date.format("YYYY-MM-DD")));
  };
  const handleTodayClick = () => {
    const today = dayjs().format("YYYY-MM-DD");
    dispatch(addBirthDate(today));
  };

  return (
    <>
      <label> Birth Date </label>
      <DatePicker
        onChange={onChange}
        picker="date"
        defaultValue={dayjs("2015/01/01")}
      />
      <Button onClick={handleTodayClick}>Today</Button>
      <h1> The birthdate is {birthDate}</h1>
    </>
  );
};

export default BirthDateCalculator;
