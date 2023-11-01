import React, { useState } from "react";
import { DatePicker, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addCurrentDate } from "../redux/slice/currentDateSlice";
import dayjs from "dayjs";
import styled from "styled-components";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const DatePickerWrapper = styled.div`
  margin: 10px;
`;

const StyledLabel = styled.label`
  font-size: 18px;
  margin: 15px;
  margin-right: 320px;
  border: solid;
  border-color: green;
  width: 150px;
  height: 25px;
  border-radius: 8px;
  margin-top: -40px;
  color: green;
  background-color: lightgreen;
`;
const StyledH1 = styled.h1`
transition: all ease 0.5s;
&:hover {font-stretch: 250%;
color: blue;
}
`

const CurrentDateCalculator = () => {
  // const [currentDate, setCurrentDate] = useState(null);
  const currentDate = useSelector((state) => state.currentDate.currentDate);
  const dispatch = useDispatch();

  const onChange = (date, DatePicker) => {
    dispatch(addCurrentDate(date.format("YYYY-MM-DD")));
  };
  const handleTodayClick = () => {
    const today = dayjs().format("YYYY-MM-DD"); 
    dispatch(addCurrentDate(today));
  };


  return (
    <Container>
      <DatePickerWrapper>
      <DatePicker onChange={onChange} picker="date" defaultValue={dayjs("2017-01-01")} 
      value={dayjs(currentDate ? currentDate : "2017-01-01" )}
    />
      </DatePickerWrapper>
      <StyledLabel>
      <label>Add Currentdate</label>
      </StyledLabel>
       <Button onClick={handleTodayClick}>Today</Button>
       
      <StyledH1>The current date is {currentDate}</StyledH1>
      
  
    </Container>
  );
};

export default CurrentDateCalculator;