import { useState } from "react";

export default function Skills({ skills, setSkills }) {

    const [isOpen, setIsOpen] = useState(false);

  function handleChange(index, e) {
    const { value } = e.target;
    setSkills((prev) => {
        const newSkills = [...prev];
      newSkills[index] = { ...newSkills[index], skillName: value };
      return newSkills;
    });
  }

  function addSkill() {
    setSkills((prev) => [...prev, { skill: "" }]);
  }

  function removeSkill(index) {
    setSkills((prev) => prev.filter((_, i) => i !== index));
  }

  function handleClick() {
    setIsOpen((prev) => !prev);
  }

  return (
    <section className="form-section" >
      <h2 onClick={handleClick}>Skills {isOpen ? "▲" : "▼"}</h2>
      {isOpen ? (
        <form className="form-skills">
          {skills.map((skill, index) => (
            <div key={index}>
              <label>
                Skill:
              <input type="text" value={skill.skillName || ""} name="skill" onChange={(e) => handleChange(index, e)} />
            </label>
            <button type="button" onClick={() => removeSkill(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={addSkill}>
          Add Skill
        </button>
      </form>
    ) : null}
    </section>
  );
}
