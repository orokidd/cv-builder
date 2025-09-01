import { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./App.css";
import Header from "./components/Header";
import { PersonalDetails } from "./components/form/PersonalDetails";
import Education from "./components/form/Education";
import Skills from "./components/form/Skills";
import Experience from "./components/form/Experience";
import { Contact } from "./components/form/Contact";
import Preview from "./components/resume/preview";

function App() {
  const [personal, setPersonal] = useState({
    name: "Muhammad Hudaa Sabrie",
    city: "Balikpapan",
    state: "Kalimantan Timur",
    profile: "Software Engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success.",
  });
  
  const [contact, setContact] = useState({
    email: "hudasabrie@gmail.com",
    phone: "0895-3397-41303",
    website: "www.hudasabrie.com",
    address: "Jl. Padat Karya No. 7"
  });
  
  const [education, setEducation] = useState([
    { institution: "Universitas Gadjah Mada", degree: "S1 Teknik Informatika", year: "2020" },
    { institution: "Universitas Indonesia", degree: "S2 Ilmu Komputer", year: "2025" }
  ]);
  
  const [skills, setSkills] = useState([
    { skillName: "JavaScript" },
    { skillName: "React" },
    { skillName: "Node.js" },
    { skillName: "CSS" },
    { skillName: "Git" },
    { skillName: "Linux" }
  ]);
  
  const [experience, setExperience] = useState([
    { jobTitle: "Software Engineer", company: "ABC Corp", years: "2021-2023", description: "Worked on developing web applications using React and Node.js. Built interactive user interfaces with React.js, improving client website engagement by 25%." },
    { jobTitle: "Web Developer", company: "XYZ Inc", years: "2020-2021", description: "Involved in building responsive websites using HTML, CSS, and JavaScript. Implemented SEO best practices and improved website performance, achieving faster load times." },
    { jobTitle: "Intern", company: "LMN Ltd", years: "2019-2020", description: "Assisted in the development of internal tools and applications. Worked with version control (Git/GitHub) to manage codebase and collaborate with team members" }
  ]);

  const previewRef = useRef();

  const handlePrint = useReactToPrint({
    contentRef: previewRef,
    documentTitle: `${personal.name}_CV`,
    onBeforeGetContent: () => {
      console.log('Preparing content for print...');
    },
    onAfterPrint: () => {
      console.log('Print dialog closed');
    },
    onPrintError: (errorLocation, error) => {
      console.error('Print error:', errorLocation, error);
    }
  });

  const handleDownload = () => {
    if (!previewRef.current) {
      console.error('Preview ref is not available');
      alert('Preview is not ready. Please try again.');
      return;
    }
    handlePrint();
  };

  return (
    <>
      <Header onDownload={handleDownload} />
      <main>
        <div className="form-container">
          <PersonalDetails personal={personal} setPersonal={setPersonal} />
          <Contact contact={contact} setContact={setContact} />
          <Education education={education} setEducation={setEducation} />
          <Skills skills={skills} setSkills={setSkills} />
          <Experience experience={experience} setExperience={setExperience} />
        </div>
        <div className="form-preview">
          <Preview 
            ref={previewRef} 
            personal={personal} 
            contact={contact} 
            education={education} 
            experience={experience} 
            skills={skills} 
          />
        </div>
      </main>
    </>
  );
}

export default App;