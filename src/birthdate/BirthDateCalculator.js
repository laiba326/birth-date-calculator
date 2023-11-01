import React, { useState } from "react";
import { DatePicker, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addBirthDate } from "../redux/slice/birthDateSlice";
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
  margin-right: 300px;
  border: solid;
  border-color: green;
  width: 130px;
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
// const styledButton = styled(Button)`
//   background-color: brown;
//   color: #fff;
//   border: none;
//   margin-top: 10px;
// `;






const BirthDateCalculator = () => {
  
  const birthDate = useSelector((state) => state.birthDate.birthDate);
  const dispatch = useDispatch();
  const defaultValue = () => (
    <DatePicker defaultValue={dayjs('2015/01/01')} />

  );
 

  const onChange = (date, DatePicker) => {
    dispatch(addBirthDate(date.format("YYYY-MM-DD")));
  };
  const handleTodayClick = () => {
    const today = dayjs().format("YYYY-MM-DD"); 
    dispatch(addBirthDate(today));
  };
  return (
    <Container>
      <DatePickerWrapper><DatePicker onChange={onChange} picker="date" defaultValue={dayjs("2015-01-01")}
      value={dayjs(birthDate ? birthDate : "2015-01-01" )}
      
      /></DatePickerWrapper>
      <StyledLabel>Add Birthdate</StyledLabel> 
      <styledButton>
      <Button onClick={handleTodayClick}>Today</Button>
      </styledButton>
      <StyledH1>The birthdate is {birthDate}</StyledH1>
     
    </Container>
  );
};

export default BirthDateCalculator;
