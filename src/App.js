import logo from "./logo.svg";
import "./App.css";
import { useSelector } from "react-redux";
import CurrentDate from "./currentDate/CurrentDate";
function App() {
  const currentDate = useSelector((state) => state.CurrentDate.CurrentDate);
  console.log(currentDate);

  return (
    <>
      <CurrentDate />
    </>
  );
}
export default App;
