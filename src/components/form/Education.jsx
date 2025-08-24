// Education.jsx
import { useState } from "react";
import { ArrowUpIcon, ArrowDownIcon } from "../Icons";

export default function Education({ education, setEducation }) {

  const [formData, setFormData] = useState({
    institution: "",
    degree: "",
    year: "",
  });

  const [isOpen, setIsOpen] = useState(false);

  function handleFormChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleFormSubmit(e) {
    e.preventDefault(); // stop page reload
    setEducation((prev) => [...prev, formData]);
    setFormData({ institution: "", degree: "", year: "" }); // reset form
  }

  function removeEducation(index) {
    setEducation((prev) => prev.filter((_, i) => i !== index));
  }

  function handleClick() {
    setIsOpen((prev) => !prev);
  }

  return (
    <section className="form-section">
      <h2 onClick={handleClick}>Education {isOpen ? (<ArrowUpIcon size={20} />) : (<ArrowDownIcon size={20} />)}</h2>
      {isOpen ? (
        <>
          {education.map((edu, index) => (
            <div key={index}>
              <span>{edu.institution || "Unknown Institution"}</span>
              <button type="button" onClick={() => removeEducation(index)}>
                Remove
              </button>
            </div>
          ))}

          <form className="form-education" onSubmit={handleFormSubmit}>
            <label>
              Institution:
              <input
                type="text"
                value={formData.institution}
                name="institution"
                onChange={handleFormChange}
              />
            </label>
            <label>
              Degree:
              <input
                type="text"
                value={formData.degree}
                name="degree"
                onChange={handleFormChange}
              />
            </label>
            <label>
              Year of Graduation:
              <input
                type="text"
                value={formData.year}
                name="year"
                onChange={handleFormChange}
              />
            </label>
            <button type="submit">
              Add Education
            </button>
          </form>
        </>
      ) : null}
    </section>
  );
}
