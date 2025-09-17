import React, { lazy } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';

// A comprehensive list of skills for a CS undergraduate
const skillOptions = [
    { value: 'javascript', label: 'JavaScript' },
    { value: 'python', label: 'Python' },
    { value: 'java', label: 'Java' },
    { value: 'c++', label: 'C++' },
    { value: 'html_css', label: 'HTML/CSS' },
    { value: 'react', label: 'React' },
    { value: 'angular', label: 'Angular' },
    { value: 'vue', label: 'Vue.js' },
    { value: 'nodejs', label: 'Node.js' },
    { value: 'express', label: 'Express.js' },
    { value: 'django', label: 'Django' },
    { value: 'flask', label: 'Flask' },
    { value: 'sql', label: 'SQL' },
    { value: 'mongodb', label: 'MongoDB' },
    { value: 'postgresql', label: 'PostgreSQL' },
    { value: 'git', label: 'Git & GitHub' },
    { value: 'docker', label: 'Docker' },
    { value: 'kubernetes', label: 'Kubernetes' },
    { value: 'aws', label: 'AWS' },
    { value: 'azure', label: 'Microsoft Azure' },
    { value: 'gcp', label: 'Google Cloud Platform' },
    { value: 'data_structures', label: 'Data Structures' },
    { value: 'algorithms', label: 'Algorithms' },
    { value: 'machine_learning', label: 'Machine Learning' },
    { value: 'data_analysis', label: 'Data Analysis' },
    { value: 'typescript', label: 'TypeScript' },
    { value: 'rest_api', label: 'REST APIs' },
    { value: 'graphql', label: 'GraphQL' },
];

const qualificationOptions = [
  { value: 'btech', label: 'B.Tech (Bachelor of Technology)' },
  { value: 'bca', label: 'BCA (Bachelor of Computer Applications)' },
  { value: 'bsc-it', label: 'BSc IT (Bachelor of Science in IT)' },
  { value: 'mca', label: 'MCA (Master of Computer Applications)' },
  { value: 'msc-it', label: 'MSc IT (Master of Science in IT)' },
  { value: 'other', label: 'Other' }
];

const validationSchema = Yup.object({
  education: Yup.string().required('Educational qualification is required'),
  // We now expect an array of strings, and at least one skill must be selected
  knownSkills: Yup.array()
    .min(1, 'Please select at least one skill')
    .required('Please select your skills'),
  learningSkills: Yup.string(),
  experience: Yup.string(),
  hobbies: Yup.string(),
  jobStatus: Yup.string().required('Please select your current status'),
});

const Step1_UserProfile = ({ onSubmit }) => {
  return (
    <div className='main_div'>
    <div className="form-container">
      <h2>Step 1: Tell Us About Yourself</h2>
      <Formik
        initialValues={{
          education: '',
          knownSkills: [], // Changed from '' to []
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
        {({ setFieldValue, setFieldTouched, values }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="education">Educational Qualifications</label>
              <Select
                id="education"
                name="education"
                options={qualificationOptions}
                isSearchable
                className="react-select-container"
                classNamePrefix="react-select"
                placeholder="Select your qualification..."
                // 1. Correctly find the full object for the 'value' prop
                value={qualificationOptions.find(option => option.value === values.education)}
                // 2. Correctly set the 'education' field's value on change
                onChange={(selectedOption) => {
                  setFieldValue('education', selectedOption ? selectedOption.value : '');
                }}
                // 3. Correctly touch the 'education' field on blur
                onBlur={() => {
                  setFieldTouched('education', true);
                }}
              />
              <ErrorMessage name="education" component="div" className="error" />
            </div>

            {/* --- REPLACEMENT FOR THE SKILLS INPUT --- */}
            <div className="form-group">
              <label htmlFor="knownSkills">Your Skills</label>
              <Select
                id="knownSkills"
                name="knownSkills"
                options={skillOptions}
                isMulti
                isSearchable
                className="react-select-container"
                classNamePrefix="react-select"
                placeholder="Select your skills..."
                // Set the value of the component from Formik's state
                value={skillOptions.filter(option => values.knownSkills.includes(option.value))}
                // When a selection is made, update Formik's state
                onChange={(selectedOptions) => {
                  const selectedValues = selectedOptions ? selectedOptions.map(option => option.value) : [];
                  setFieldValue('knownSkills', selectedValues);
                }}
                // Tell Formik that this field has been touched
                onBlur={() => {
                  setFieldTouched('knownSkills', true);
                }}
              />
              <ErrorMessage name="knownSkills" component="div" className="error" />
            </div>
            {/* --- END OF REPLACEMENT --- */}

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
        )}
      </Formik>
    </div>
  </div>
  );
};

export default Step1_UserProfile;