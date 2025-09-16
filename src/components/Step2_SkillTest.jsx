import React from 'react';
import { Formik, Form, Field } from 'formik';

const renderQuestion = (question) => {
  switch (question.type) {
    case 'mcq':
      return (
        <div key={question.id} className="question-block">
          <label>{question.text}</label>
          <div role="group" aria-labelledby="mcq-group">
            {question.options.map((option, index) => (
              <label key={index} className="radio-label">
                <Field type="radio" name={question.id} value={option} />
                {option}
              </label>
            ))}
          </div>
        </div>
      );
    case 'code':
    case 'scenario':
      return (
        <div key={question.id} className="question-block">
          <label htmlFor={question.id}>{question.text}</label>
          <Field as="textarea" name={question.id} rows="5" />
        </div>
      );
    default:
      return null;
  }
};

const Step2_SkillTest = ({ questions, onSubmit }) => {
  const initialValues = questions.reduce((acc, q) => {
    acc[q.id] = '';
    return acc;
  }, {});

  return (
    <div className="form-container">
      <h2>Step 2: Skill Assessment</h2>
      <p>Answer the following questions to help us gauge your expertise.</p>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          onSubmit(values);
        }}
      >
        <Form>
          {questions.map(renderQuestion)}
          <button type="submit">Submit & Get Report</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Step2_SkillTest;