import Leaderboard from "./components/Leaderboard";
import logo from "./assets/GDSC LOGO.png";
import "./App.css";
const data = require("./../src/studentsData.json");

const App = () => {
  return (
    <div className="App">
      <div className="heading">
        <img src={logo} alt="GDSC DYPCOE Pune" className="gdsc_logo" />
        <h1>30 Days of Google Cloud Leaderboard</h1>
        <div className="message">
          <h4>Data will be updated every 24 hours</h4>
          <h4>Last updated on 29/10/21</h4>
        </div>
        {/* <input
          type="text"
          name="name"
          style={{
            border: "1px solid #7b7f85",
            borderRadius: 20,
            width: "300px",
          }}
          className="searchBar"
          placeholder="Search Your Name Here"
          
        /> */}
      </div>
      <Leaderboard studentData={data || []} />
    </div>
  );
};

export default App;
