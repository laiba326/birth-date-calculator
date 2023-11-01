import React, { useState } from "react";
import { Button, DatePicker } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addCurrentDate } from "../redux/slice/currentDateSlice";
import dayjs from "dayjs";
const CurrentDateCalculator = () => {
  const birthDate = useSelector((state) => state.birthDate.birthDate);
  const currentDate = useSelector((state) => state.currentDate.currentDate);

  const dispatch = useDispatch();

  const onChange = (date, DatePicker) => {
    dispatch(addCurrentDate(DatePicker));
  };
  const handleTodayClick = () => {
    const today = dayjs().format("YYYY-MM-DD");
    dispatch(addCurrentDate(today));
  };
  return (
    <>
      <label> Current Date </label>
      <DatePicker
        onChange={onChange}
        picker="date"
        defaultValue={dayjs("2017/01/01")}
        value={dayjs(currentDate ? currentDate : "2017/01/01")}
      />
      <Button onClick={handleTodayClick}>Today</Button>
      <h1> The current date is {currentDate}</h1>
    </>
  );
};

export default CurrentDateCalculator;
