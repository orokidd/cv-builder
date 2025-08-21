import React from "react";

export default function Skills({ skills, setSkills }) {
  function handleChange(e) {
    const { name, value } = e.target;
    setSkills((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <section>
      <h2>Skills</h2>
      <form>
        <label>
          Skill:
          <input type="text" value={skills.skill || ""} name="skill" onChange={handleChange} />
        </label>
        <label>
          Proficiency:
          <input type="text" value={skills.proficiency || ""} name="proficiency" onChange={handleChange} />
        </label>
      </form>
    </section>
  );
}
