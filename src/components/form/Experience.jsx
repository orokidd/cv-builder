import React from "react";

export default function Experience({ experience, setExperience }) {
  function handleChange(e) {
    const { name, value } = e.target;
    setExperience((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <section className="form-section">
      <h2>Experience</h2>
      <form>
        <label>
          Job Title:
          <input type="text" value={experience.jobTitle || ""} name="jobTitle" onChange={handleChange} />
        </label>
        <label>
          Company:
          <input type="text" value={experience.company || ""} name="company" onChange={handleChange} />
        </label>
        <label>
          Years of Experience:
          <input type="text" value={experience.years || ""} name="years" onChange={handleChange} />
        </label>
      </form>
    </section>
  );
}
