import React from "react";
import GitHubCalendar from "react-github-calendar";

const Githubs = () => {
  return (
    <div id="githubs" className="max-width">
      <div className="main-text">
        <h2>
          <span>GitHub </span>Statistics
        </h2>
      </div>
      <div id="stat">
        <div>
          <img
            className="ht1"
            id="github-stats-card"
            src="https://github-readme-stats.vercel.app/api?username=Rahul1905-sk&show_icons=true&theme=transparent"
          />
        </div>
        <div>
          <img
            className="ht1"
            id="github-top-langs"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Rahul1905-sk&layout=compact&theme=transparent"
          />
        </div>
        <div>
          <img
            className="ht1"
            id="github-streak-stats"
            src="https://github-readme-streak-stats.herokuapp.com/?user=Rahul1905-sk&theme=transparent"
          />
        </div>
      </div>
      <div style={{ marginTop: "10px" }}>
        <img
          src="https://visitcount.itsvg.in/api?id=SurajSingh&label=Profile%20Views&pretty=false"
          alt="count"
        />
      </div>
      <div className="react-activity-calendar" style={{margin : "10px auto 20px auto"}}>
        <GitHubCalendar username="Souravlahiri2507" />
      </div>
    </div>
  );
};

export default Githubs;
