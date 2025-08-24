import { useState } from "react";

export default function Skills({ skills, setSkills }) {
  const [isOpen, setIsOpen] = useState(false);

  function removeSkill(index) {
    setSkills((prev) => prev.filter((_, i) => i !== index));
  }

  function handleClick() {
    setIsOpen((prev) => !prev);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newSkill = { skillName: formData.get("skill") };
    setSkills((prev) => [...prev, newSkill]);
    e.target.reset();
  }

  return (
    <section className="form-section">
      <h2 onClick={handleClick}>Skills {isOpen ? "▲" : "▼"}</h2>
      {isOpen ? (
        <>
          {skills.map((skill, index) => (
            <div key={index}>
              <span>{skill.skillName || "Unknown Skill"}</span>
              <button type="button" onClick={() => removeSkill(index)}>
                Remove
              </button>
            </div>
          ))}

          <form className="form-skills" onSubmit={handleFormSubmit}>
            <label>
              Skill:
              <input type="text" name="skill" />
            </label>

            <button type="submit">Add Skill</button>
          </form>
        </>
      ) : null}
    </section>
  );
}
