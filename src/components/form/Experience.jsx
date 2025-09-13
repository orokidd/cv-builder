import { ArrowUpIcon, ArrowDownIcon, CloseIcon } from "../Icons";

export default function Experience({ isActive, onShow, experience, setExperience }) {
  function removeExperience(index) {
    setExperience((prev) => prev.filter((_, i) => i !== index));
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newExp = {
      jobTitle: formData.get("jobTitle"),
      company: formData.get("company"),
      startDate: formData.get("startDate"),
      endDate: formData.get("endDate"),
      description: formData.get("description"),
    };
    setExperience((prev) => [...prev, newExp]);
    e.target.reset();
  }

  return (
    <section className="form-section">
      <p onClick={onShow}>
        💼 Experience{" "}
        {isActive ? <ArrowUpIcon size={20} /> : <ArrowDownIcon size={20} />}
      </p>
      {isActive ? (
        <>
          <div className="experience-list">
            {experience.map((exp, index) => (
              <div key={index} className="experience-item">
                <span>{exp.company || "Unknown Company"}</span>
                <button type="button" className="remove-experience-button" onClick={() => removeExperience(index)}>
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
            <div className="year-experience">
              <label className="start-date-label">
                Start Date:
                <input type="text" name="startDate" />
              </label>
              <label className="end-date-label">
                End Date:
                <input type="text" name="endDate" />
              </label>
            </div>
            <label>
              Description:
              <textarea name="description" placeholder="Use (-) for bullet points"/>
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
