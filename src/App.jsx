import { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./App.css";
import Header from "./components/Header";
import { PersonalDetails } from "./components/form/PersonalDetails";
import Education from "./components/form/Education";
import Skills from "./components/form/Skills";
import Experience from "./components/form/Experience";
import { Contact } from "./components/form/Contact";
import Preview from "./components/resume/ResumePreview";
import { useMediaQuery } from "react-responsive";
import {
  INITIAL_PERSONAL,
  INITIAL_CONTACT,
  INITIAL_EDUCATION,
  INITIAL_SKILLS,
  INITIAL_EXPERIENCE,
} from "./components/FakeData";

function App() {
  const isMobile = useMediaQuery({ maxWidth: 1041 });

  const [mode, setMode] = useState("edit");

  const shouldShowForm = !isMobile || (isMobile && mode === "edit");
  const shouldShowPreview = !isMobile || (isMobile && mode === "preview");

  const [activeSection, setActiveSection] = useState("");

  const [personal, setPersonal] = useState(INITIAL_PERSONAL);
  const [contact, setContact] = useState(INITIAL_CONTACT);
  const [education, setEducation] = useState(INITIAL_EDUCATION);
  const [skills, setSkills] = useState(INITIAL_SKILLS);
  const [experience, setExperience] = useState(INITIAL_EXPERIENCE);

  function resetData() {
    setPersonal({name: "", city: "", state: "", profile: "",});
    setContact({email: "", phone: "", website: "", address: "",});
    setEducation([]);
    setExperience([]);
    setSkills([]);
  }

  const previewRef = useRef();

  const handlePrint = useReactToPrint({
    contentRef: previewRef,
    documentTitle: `${personal.name}_CV`,
    onBeforeGetContent: () => {
      console.log("Preparing content for print...");
    },
    onAfterPrint: () => {
      console.log("Print dialog closed");
    },
    onPrintError: (errorLocation, error) => {
      console.error("Print error:", errorLocation, error);
    },
  });

  const handleDownload = () => {
    if (!previewRef.current) {
      console.error("Preview ref is not available");
      alert("Preview is not ready. Please try again.");
      return;
    }
    handlePrint();
  };

  const handleSectionToggle = (section) => {
    setActiveSection((prev) => (prev === section ? null : section));
  };

  const sections = (
    <div className="form-container">
      <PersonalDetails isActive={activeSection === "personal"} onShow={() => handleSectionToggle("personal")} personal={personal} setPersonal={setPersonal} />
      <Contact isActive={activeSection === "contact"} onShow={() => handleSectionToggle("contact")} contact={contact} setContact={setContact} />
      <Education isActive={activeSection === "education"} onShow={() => handleSectionToggle("education")} education={education} setEducation={setEducation} />
      <Skills isActive={activeSection === "skills"} onShow={() => handleSectionToggle("skills")} skills={skills} setSkills={setSkills} />
      <Experience isActive={activeSection === "experience"} onShow={() => handleSectionToggle("experience")} experience={experience} setExperience={setExperience} />
    </div>
  );

  const preview = (
    <div className="preview-wrapper">
      <div className="form-preview" ref={previewRef}>
        <Preview personal={personal} contact={contact} education={education} experience={experience} skills={skills} />
      </div>
    </div>
  );

  return (
    <>
      <Header isMobile={isMobile} mode={mode} setMode={setMode} onDownload={handleDownload} resetData={resetData} />
      <main>
        {shouldShowForm ? sections : null}
        {shouldShowPreview ? preview : null}
      </main>
    </>
  );
}

export default App;
