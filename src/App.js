import "./App.css";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Row, Col } from "antd";
import BirthDateCalculator from "./birthdate/BirthDateCalculator";
import CurrentDateCalculator from "./currentDate/CurrentDateCalculator";
import CalculateButton from "./calculateButton/CalculateButton";
function App() {
  const MainContainer = styled.main`
    background-color: aqua;
    margin-top: 20px;
    margin-left: 300px;
    margin-right: 400px;
    border: solid;
    padding: 40px;
    border-radius: 10px;
    max-width: 40%;
  `;
  const H1 = styled.h1`
    margin-left: 450px;
    margin-right: 450px;
  `;

  return (
    <>
      <H1>Age Calculator</H1>
      <MainContainer>
        <Row justify="center" align="middle" style={{ minHeight: "50vh" }}>
          <Col span={24}>
            <h1 style={{ textAlign: "center" }}>Age Calculator</h1>
            <Row justify="center">
              <Col span={8}>
                <BirthDateCalculator />
              </Col>
              <Col span={8}>
                <CurrentDateCalculator />
              </Col>
              <Col span={24}>
                <CalculateButton />
              </Col>
            </Row>
          </Col>
        </Row>
      </MainContainer>
    </>
  );
}

export default App;

// feature-add-date-picker
// bugFix-date-not-formated
