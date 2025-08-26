import { useState } from "react";
import { ArrowUpIcon, ArrowDownIcon, CloseIcon } from "../Icons";

export default function Experience({ experience, setExperience }) {
  const [isOpen, setIsOpen] = useState(false);

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

  function handleFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newExp = {
      jobTitle: formData.get("jobTitle"),
      company: formData.get("company"),
      years: formData.get("years"),
    };
    setExperience((prev) => [...prev, newExp]);
    e.target.reset();
  }

  return (
    <section className="form-section">
      <h2 onClick={handleClick}>
        💼 Experience{" "}
        {isOpen ? <ArrowUpIcon size={20} /> : <ArrowDownIcon size={20} />}
      </h2>
      {isOpen ? (
        <>
          <div className="experience-list">
            {experience.map((exp, index) => (
              <div key={index} className="experience-item">
                <span>{exp.jobTitle || "Unknown Job Title"}</span>
                <button type="button" onClick={() => removeExperience(index)}>
                  <CloseIcon size={20} />
                </button>
              </div>
            ))}
          </div>

          <form className="form-experience" onSubmit={handleFormSubmit}>
            <label>
              Job Title:
              <input type="text" name="jobTitle" />
            </label>
            <label>
              Company:
              <input type="text" name="company" />
            </label>
            <label>
              Years of Experience:
              <input type="text" name="years" />
            </label>
            <button type="submit" className="add-experience-button">
              Add Experience
            </button>
          </form>
        </>
      ) : null}
    </section>
  );
}
