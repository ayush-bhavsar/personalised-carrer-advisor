import React, { useState } from 'react';
import './App.css';
import Step1_UserProfile from './components/Step1_UserProfile';
import Step2_SkillTest from './components/Step2_SkillTest';
import Step3_Report from './components/Step3_Report';
import LoadingSpinner from './components/LoadingSpinner';
import { generateQuestionsAPI, evaluateAnswersAPI } from './api/gemini';

function App() {
  const [step, setStep] = useState(1);
  const [userProfile, setUserProfile] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [report, setReport] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleProfileSubmit = async (values) => {
    setIsLoading(true);
    setUserProfile(values);
    const generatedQuestions = await generateQuestionsAPI(values);
    setQuestions(generatedQuestions);
    setIsLoading(false);
    setStep(2);
  };

  const handleTestSubmit = async (values) => {
    setIsLoading(true);
    const generatedReport = await evaluateAnswersAPI(values);
    setReport(generatedReport);
    setIsLoading(false);
    setStep(3);
  };
  
  const handleStartOver = () => {
    setStep(1);
    setUserProfile(null);
    setQuestions([]);
    setReport(null);
  }

  const renderStep = () => {
    if (isLoading) return <LoadingSpinner />;

    switch (step) {
      case 1:
        return <Step1_UserProfile onSubmit={handleProfileSubmit} />;
      case 2:
        return <Step2_SkillTest questions={questions} onSubmit={handleTestSubmit} />;
      case 3:
        return <Step3_Report report={report} userProfile={userProfile} onStartOver={handleStartOver} />;
      default:
        return <Step1_UserProfile onSubmit={handleProfileSubmit} />;
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Personalized Career Advisor</h1>
        <p>Your journey to a tailored career path starts here.</p>
      </header>
      <main className="main-content">
        {renderStep()}
      </main>
    </div>
  );
}

export default App;