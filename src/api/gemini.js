// This file mocks the API calls to your backend, which would in turn call the Gemini API.

// Mock function to generate questions based on user profile
export const generateQuestionsAPI = (profile) => {
  console.log("API Call: Generating questions for profile:", profile);
  return new Promise((resolve) => {
    setTimeout(() => {
      const questions = [
        { id: 'q1', type: 'mcq', text: 'What is the primary purpose of state in a React component?', options: ['To store component data that changes over time', 'To handle styling', 'To manage routing', 'To perform API calls'] },
        { id: 'q2', type: 'code', text: 'Write a simple Javascript function to find the maximum number in an array.' },
        { id: 'q3', type: 'scenario', text: 'A user reports that a web page is loading slowly. What are the first three things you would investigate?' }
      ];
      resolve(questions);
    }, 1500); // Simulate 1.5 second delay
  });
};

// Mock function to evaluate test answers
export const evaluateAnswersAPI = (answers) => {
  console.log("API Call: Evaluating answers:", answers);
  return new Promise((resolve) => {
    setTimeout(() => {
      const report = {
        skillScores: [
          { skill: 'React', score: 8 },
          { skill: 'JavaScript', score: 7 },
          { skill: 'Problem Solving', score: 6 }
        ],
        summary: "You have a strong foundation in React and JavaScript fundamentals. You are well-suited for an entry-level Frontend Developer role.",
        recommendations: [
          'Deepen your knowledge of React Hooks (useEffect, useReducer).',
          'Practice more complex algorithm problems.',
          'Build a full-stack personal project to understand the end-to-end development lifecycle.'
        ],
        learningPath: [
          { title: 'Advanced React Course', link: '#' },
          { title: 'Data Structures & Algorithms Challenge', link: '#' }
        ]
      };
      resolve(report);
    }, 2000); // Simulate 2 second delay
  });
};