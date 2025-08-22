// Education.jsx
import { useState } from "react";

export default function Education({ education, setEducation }) {

    const [isOpen, setIsOpen] = useState(false);
    
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

  function handleClick() {
    setIsOpen((prev) => !prev);
  }

return (
  <section className="form-section" >
    <h2 onClick={handleClick}>Education {isOpen ? "▲" : "▼"}</h2>
    {isOpen? ( 
    <form className="form-education">
      {education.map((edu, index) => (
        <div key={index}>
        <label>
            Institution:
            <input type="text" value={edu.institution || ""} name="institution" onChange={(e) => handleChange(index, e)} />
          </label>
          <label>
            Degree:
            <input type="text" value={edu.degree || ""} name="degree" onChange={(e) => handleChange(index, e)} />
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
    ) : null}
  </section>
);
}