// Education.jsx
import React from "react";

export default function Education({ education, setEducation }) {
    
  function handleChange(index, e) {
    const { name, value } = e.target;
    setEducation((prev) => {
      const newEducation = [...prev];
      newEducation[index] = { ...newEducation[index], [name]: value };
      return newEducation;
    });
  }

  function addEducation() {
    setEducation((prev) => [...prev, { degree: "", institution: "", year: "" }]);
  }

  function removeEducation(index) {
    setEducation((prev) => prev.filter((_, i) => i !== index));
  }

return (
  <section>
    <h2>Education</h2>
    <form>
      {education.map((edu, index) => (
        <div key={index}>
          <label>
            Degree:
            <input type="text" value={edu.degree || ""} name="degree" onChange={(e) => handleChange(index, e)} />
          </label>
          <label>
            Institution:
            <input type="text" value={edu.institution || ""} name="institution" onChange={(e) => handleChange(index, e)} />
          </label>
          <label>
            Year of Graduation:
            <input type="text" value={edu.year || ""} name="year" onChange={(e) => handleChange(index, e)} />
          </label>
          <button type="button" onClick={() => removeEducation(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={addEducation}>
        Add Education
      </button>
    </form>
  </section>
);
}