import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  education: Yup.string().required('Educational qualification is required'),
  knownSkills: Yup.string().required('Please list at least one skill'),
  learningSkills: Yup.string(),
  experience: Yup.string(),
  hobbies: Yup.string(),
  jobStatus: Yup.string().required('Please select your current status'),
});

const Step1_UserProfile = ({ onSubmit }) => {
  return (
    <div className="form-container">
      <h2>Step 1: Tell Us About Yourself</h2>
      <Formik
        initialValues={{
          education: '',
          knownSkills: '',
          learningSkills: '',
          experience: '',
          hobbies: '',
          jobStatus: 'student',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          onSubmit(values);
        }}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="education">Educational Qualifications</label>
            <Field name="education" type="text" placeholder="e.g., B.Tech in Computer Science" />
            <ErrorMessage name="education" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="knownSkills">Your Skills (comma-separated)</label>
            <Field name="knownSkills" type="text" placeholder="e.g., React, Node.js, Python" />
            <ErrorMessage name="knownSkills" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="learningSkills">Skills You Want to Learn</label>
            <Field name="learningSkills" type="text" placeholder="e.g., Machine Learning, Go" />
          </div>
          
          <div className="form-group">
            <label htmlFor="experience">Work Experience (if any)</label>
            <Field name="experience" as="textarea" placeholder="Describe your roles and responsibilities" />
          </div>

          <div className="form-group">
            <label htmlFor="hobbies">Hobbies / Interests</label>
            <Field name="hobbies" type="text" placeholder="e.g., Blogging, Open Source, Chess" />
          </div>
          
          <div className="form-group">
            <label htmlFor="jobStatus">Current Job Status</label>
            <Field name="jobStatus" as="select">
                <option value="student">Student</option>
                <option value="fresher">Fresher (Looking for job)</option>
                <option value="employed">Employed</option>
            </Field>
            <ErrorMessage name="jobStatus" component="div" className="error" />
          </div>

          <button type="submit">Generate Skill Test</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Step1_UserProfile;