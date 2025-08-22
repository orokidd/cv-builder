import { useState } from "react";

export default function Experience({ experience, setExperience }) {

    const [isOpen, setIsOpen] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setExperience((prev) => ({ ...prev, [name]: value }));
  }

  function handleClick() {
    setIsOpen((prev) => !prev);
  }

  return (
    <section className="form-section" >
      <h2 onClick={handleClick}>Experience {isOpen ? "▲" : "▼"}</h2>
      {isOpen ? (
        <form className="form-experience">
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
        ) : null}
    </section>
  );
}
