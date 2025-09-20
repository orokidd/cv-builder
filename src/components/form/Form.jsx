import { PersonalDetails } from "./PersonalDetails";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import { Contact } from "./Contact";
import { useState } from "react";

export default function Form({
  personal,
  setPersonal,
  contact,
  setContact,
  education,
  setEducation,
  skills,
  setSkills,
  experience,
  setExperience,
}) {
  const [activeSection, setActiveSection] = useState("");

  const handleSectionToggle = (section) => {
    setActiveSection((prev) => (prev === section ? null : section));
  };

  const checkIfSectionIsActive = (section) => {
    return activeSection === section;
  };

  return (
    <div className="form-container">
      <PersonalDetails
        isActive={checkIfSectionIsActive("personal")}
        onShow={() => handleSectionToggle("personal")}
        personal={personal}
        setPersonal={setPersonal}
      />
      <Contact
        isActive={checkIfSectionIsActive("contact")}
        onShow={() => handleSectionToggle("contact")}
        contact={contact}
        setContact={setContact}
      />
      <Education
        isActive={checkIfSectionIsActive("education")}
        onShow={() => handleSectionToggle("education")}
        education={education}
        setEducation={setEducation}
      />
      <Skills
        isActive={checkIfSectionIsActive("skills")}
        onShow={() => handleSectionToggle("skills")}
        skills={skills}
        setSkills={setSkills}
      />
      <Experience
        isActive={checkIfSectionIsActive("experience")}
        onShow={() => handleSectionToggle("experience")}
        experience={experience}
        setExperience={setExperience}
      />
    </div>
  );
}
