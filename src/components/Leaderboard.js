import DataItem from "./DataItem";
const Leaderboard = ({ studentData }) => {
  return (
    <div className="container">
      <table className="main-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Student Name</th>
            <th>Total Skill Badges Completed</th>
            <th>Skill Badges Completed in Track 1</th>
            <th>Skill Badges Completed in Track 2</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map(data => (
            <DataItem data={data} key={data["Student Email"]} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
