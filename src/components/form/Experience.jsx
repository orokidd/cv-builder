import { useState } from "react";
import { ArrowUpIcon, ArrowDownIcon } from "../Icons";

export default function Experience({ experience, setExperience }) {

    const [isOpen, setIsOpen] = useState(false);

  function handleChange(e, index) {
  const { name, value } = e.target;
  setExperience((prev) => {
    const newExp = [...prev];
    newExp[index] = { ...newExp[index], [name]: value };
    return newExp;
  });
}

  function handleClick() {
    setIsOpen((prev) => !prev);
  }

  function addExperience() {
    setExperience((prev) => [
      ...prev,
      { jobTitle: "", company: "", years: "" },
    ]);
  }

  function removeExperience(index) {
    setExperience((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <section className="form-section" >
      <h2 onClick={handleClick}>Experience {isOpen ? (<ArrowUpIcon size={20} />) : (<ArrowDownIcon size={20} />)}</h2>
      {isOpen ? (
        <form className="form-experience">
          {experience.map((exp, index) => (
            <div key={index}>
              <label>
                Job Title:
                <input type="text" value={exp.jobTitle || ""} name="jobTitle" onChange={(e) => handleChange(e, index)} />
              </label>
              <label>
                Company:
                <input type="text" value={exp.company || ""} name="company" onChange={(e) => handleChange(e, index)} />
              </label>
              <label>
                Years of Experience:
                <input type="text" value={exp.years || ""} name="years" onChange={(e) => handleChange(e, index)} />
              </label>
              <button type="button" onClick={() => removeExperience(index)}>
              Remove Experience
            </button>
            </div>
          ))}
          <button type="button" onClick={addExperience}>
            Add Experience
          </button>
        </form>
      ) : null}
    </section>
  );
}