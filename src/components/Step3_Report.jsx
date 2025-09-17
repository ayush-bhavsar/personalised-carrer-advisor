import React from 'react';
// Corrected: Import icons from their specific set, 'fi' for Feather Icons.
import { FiBarChart2, FiFileText,  FiMap } from 'react-icons/fi';

// A simple component to render a bar chart for scores
const SkillChart = ({ scores }) => (
  <div className="chart-container">
    {scores.map(({ skill, score }) => (
      <div key={skill} className="bar-wrapper">
        <div className="bar-label">{skill}</div>
        <div className="bar">
          <div className="bar-fill" style={{ width: `${score * 10}%` }}>
            {score}/10
          </div>
        </div>
      </div>
    ))}
  </div>
);


const Step3_Report = ({ report, userProfile, onStartOver }) => {
  if (!report) return <p>Generating your report...</p>;

  return (
    <div className="report-container">
      <h2>Your Personalized Career Report</h2>
      
      <div className="report-section">
        <h3><FiBarChart2 /> Skill Analysis</h3>
        <p>Here's a breakdown of your assessed skills.</p>
        <SkillChart scores={report.skillScores} />
      </div>

      <div className="report-section">
        <h3><FiFileText /> Career Readiness Summary</h3>
        <p>{report.summary}</p>
      </div>
      
      <div className="report-section">
        <h3> Recommendations</h3>
        <ul>
          {report.recommendations.map((rec, index) => (
            <li key={index}>{rec}</li>
          ))}
        </ul>
      </div>

      <div className="report-section">
        <h3><FiMap /> Suggested Learning Path</h3>
        <p>Follow these steps to level up your skills:</p>
        <ul className="learning-path">
            {report.learningPath.map((item, index) => (
                <li key={index}><a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a></li>
            ))}
        </ul>
      </div>

      <button onClick={onStartOver} className="start-over-btn">Start New Assessment</button>
    </div>
  );
};

export default Step3_Report;