import { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/form/Form";
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


  const formSections = (
  <Form
    personal={personal}
    setPersonal={setPersonal}
    contact={contact}
    setContact={setContact}
    education={education}
    setEducation={setEducation}
    skills={skills}
    setSkills={setSkills}
    experience={experience}
    setExperience={setExperience}
  />
);

  const previewSections = (
    <Preview
      ref={previewRef}
      personal={personal}
      contact={contact}
      education={education}
      experience={experience}
      skills={skills}
    />
  );

  return (
    <>
      <Header isMobile={isMobile} mode={mode} setMode={setMode} onDownload={handleDownload} resetData={resetData} />
      <main>
        {shouldShowForm ? formSections : null}
        {shouldShowPreview ? previewSections : null}
      </main>
    </>
  );
}

export default App;
