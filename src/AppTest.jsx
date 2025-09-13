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

function App() {
  const isMobile = useMediaQuery({ maxWidth: 1041 });

  const [mode, setMode] = useState("edit");

  const shouldShowForm = !isMobile || (isMobile && mode === "edit");
  const shouldShowPreview = !isMobile || (isMobile && mode === "preview");

  const [activeSection, setActiveSection] = useState("");

  const [personal, setPersonal] = useState({
    name: "Gregorius Deandra Hanifa",
    city: "Samarinda",
    state: "Kalimantan Timur",
    profile:
      "Software Engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success.",
  });

  const [contact, setContact] = useState({
    email: "gregorius@example.com",
    phone: "0895-1423-5867",
    website: "www.gregorius.com",
    address: "Jl. Yos Sudarso No. 7",
  });

  const [education, setEducation] = useState([
    {
      institution: "Universitas Gadjah Mada",
      degree: "S1 Teknik Informatika",
      year: "2020",
    },
    {
      institution: "Universitas Indonesia",
      degree: "S2 Ilmu Komputer",
      year: "2025",
    },
  ]);

  const [skills, setSkills] = useState([
    { skillName: "JavaScript" },
    { skillName: "React" },
    { skillName: "Node.js" },
    { skillName: "CSS" },
    { skillName: "Git" },
    { skillName: "Linux" },
  ]);

  const [experience, setExperience] = useState([
    {
      jobTitle: "Software Engineer",
      company: "ABC Corp",
      startDate: "2021",
      endDate: "2023",
      description:
        "Worked on developing web applications using React and Node.js. Built interactive user interfaces with React.js, improving client website engagement by 25%.",
    },
    {
      jobTitle: "Web Developer",
      company: "XYZ Inc",
      startDate: "2020",
      endDate: "2021",
      description:
        "Involved in building responsive websites using HTML, CSS, and JavaScript. Implemented SEO best practices and improved website performance, achieving faster load times.",
    },
    {
      jobTitle: "Intern",
      company: "LMN Ltd",
      startDate: "2019",
      endDate: "2020",
      description:
        "Assisted in the development of internal tools and applications. Worked with version control (Git/GitHub) to manage codebase and collaborate with team members",
    },
  ]);

    function resetData() {
    setPersonal({
      name: "",
      city: "",
      state: "",
      profile: "",
    });
    setContact({
      email: "",
      phone: "",
      website: "",
      address: "",
    });
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
