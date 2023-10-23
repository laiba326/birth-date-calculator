import React, {useState} from "react";
import { DatePicker} from "antd";


const BirthDatePicker = () => {
    const [selectedDate, setSelectedDate] = useState(null);
  
const onChange = (date, DatePicker)=> {
    setSelectedDate (date)
};
return (
    <>
    
    <DatePicker setSelectedDate={onChange} DatePicker="selectedDate"/>
    <h1>The Birthdate is {"selectedDate"}</h1>
    
    
    </>
);
};

  export default BirthDatePicker;
