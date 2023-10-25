import React, { useState } from "react";
import { DatePicker } from "antd";
import { useDispatch } from "react-redux";
import { addCurrentDate } from "../redux/slice/currentDateSlice";

const CurrentDate = () => {
  const [CurrentDate, setCurrentDate] = useState(null);

  const dispatch = useDispatch();

  const onChange = (date, DatePicker) => {
    dispatch(addCurrentDate(DatePicker));
  };

  return (
    <>
      <DatePicker onChange={onChange} picker="date" />
      <h1>The selected date is {CurrentDate}</h1>
    </>
  );
};

export default CurrentDate;
