import Leaderboard from "./components/Leaderboard";
import logo from "./assets/GDSC LOGO.png";
import "./App.css";
const data = require("./../src/studentsData.json");

const App = () => {
  return (
    <div className="App">
      <div className="heading">
        <img src={logo} alt="GDSC DYPCOE Pune" className="gdsc_logo" />
        <h1>GDSC DYPCOE Pune GCP Leaderboard</h1>
        <div className="message">
          <h4>Data will be updated after 24 hours</h4>
        </div>
      </div>
      <Leaderboard studentData={data || []} />
    </div>
  );
};

export default App;
