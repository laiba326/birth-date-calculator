import "./App.css";
import { useSelector } from "react-redux";
import styled from "styled-components";
import BirthDateCalculator from "./birthdate/BirthDateCalculator";
import CurrentDateCalculator from "./currentDate/CurrentDateCalculator";
import CalculateButton from "./calculateButton/CalculateButton";
import SideBar from "./sidebar/SideBar";
function App() {
  const birthDate = useSelector((state) => state.birthDate.birthDate);
  // console.log(birthDate);
  const currentDate = useSelector((state) => state.currentDate.currentDate);
  // console.log(currentDate);
  const MainContainer = styled.main`
  margin-top: 70px;
  margin-left:150px;
  margin-right:150px;
  border: solid;
  border-radius: 3px;
  background-color: lightblue;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  background-image: url(https://images.unsplash.com/photo-1625225233840-695456021cde?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FsY3VsYXRvcnxlbnwwfHwwfHx8MA%3D%3D)
  `;
  const Child= styled.div`
 height: 300px;
 width: 300px;
 background-color: salmon;
 margin: 10px;
 display: inline-block;
  `
// const box = styled.box`
// height:350px;
// width: 300px;
// background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi_RqUXi09BwNijicWccA42R1vJFAHYaaAew&usqp=CAU);
// background-size: cover;
// background-position: center;
// text-align: center;
// display: flex;
// align-items: center;
// justify-content: center;

// `

const StyledH1 = styled.h1`
width:30%;
padding: 10px;
font-size: 35px;
font-weight: 500;
text-transform: uppercase;
font-weight: 900;
background-color: 255,255,255,0.642;
/* backdrop-filter: blur ; */


`


  return (
    
    <MainContainer> 
      <div id="box">
      <StyledH1>AGE CALCULATOR</StyledH1>

      </div>
      
      <Child>
      <BirthDateCalculator /></Child>
      <Child>
      <CurrentDateCalculator /></Child>
      <Child>
      <CalculateButton />
      </Child>
      <SideBar/>
    </MainContainer>
  );
};

export default App;

// feature-add-date-picker
// bugFix-date-not-formated
