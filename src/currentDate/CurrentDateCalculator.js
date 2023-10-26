import React, { useState } from "react";
import { DatePicker } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addCurrentDate } from "../redux/slice/currentDateSlice";

const CurrentDateCalculator = () => {
  // const [currentDate, setCurrentDate] = useState(null);
  const currentDate = useSelector((state) => state.currentDate.currentDate);
  const dispatch = useDispatch();

  const onChange = (date, DatePicker) => {
    dispatch(addCurrentDate(DatePicker));
  };

  return (
    <>
      <DatePicker onChange={onChange} picker="date" />
      <label>Add Currentdate</label><h1>The current date is {currentDate}</h1>
    </>
  );
};

export default CurrentDateCalculator;