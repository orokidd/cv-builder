import React from "react";

export default function Education({ education, setEducation }) {
  function handleChange(e) {
    const { name, value } = e.target;
    setEducation((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <section>
      <h2>Education</h2>
      <form>
        <label>
          Degree:
          <input type="text" value={education.degree || ""} name="degree" onChange={handleChange} />
        </label>
        <label>
          Institution:
          <input type="text" value={education.institution || ""} name="institution" onChange={handleChange} />
        </label>
        <label>
          Year of Graduation:
          <input type="text" value={education.year || ""} name="year" onChange={handleChange} />
        </label>
      </form>
    </section>
  );
}
