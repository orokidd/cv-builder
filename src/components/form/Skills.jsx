import { ArrowUpIcon, ArrowDownIcon, CloseIcon } from "../Icons";

export default function Skills({ isActive, onShow, skills, setSkills }) {
  function removeSkill(index) {
    setSkills((prev) => prev.filter((_, i) => i !== index));
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
      <p onClick={onShow}>
        💡 Skills{" "}
        {isActive ? <ArrowUpIcon size={20} /> : <ArrowDownIcon size={20} />}
      </p>
      {isActive ? (
        <>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <div key={index} className="skills-item">
                <span>{skill.skillName || "Unknown Skill"}</span>
                <button type="button" className="remove-skill-button" onClick={() => removeSkill(index)}>
                  <CloseIcon size={20} />
                </button>
              </div>
            ))}
          </div>

          <form className="form-skills" onSubmit={handleFormSubmit}>
            <label>
              Skill:
              <input type="text" name="skill" />
            </label>

            <button type="submit" className="add-skill-button">
              Add Skill
            </button>
          </form>
        </>
      ) : null}
    </section>
  );
}
