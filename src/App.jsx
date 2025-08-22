import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { PersonalDetails } from "./components/form/PersonalDetails";
import Education from "./components/form/Education";
import Skills from "./components/form/Skills";
import Experience from "./components/form/Experience";
import Preview from "./components/preview/preview";

function App() {
  const [personal, setPersonal] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    state: "",
  });

  const [contact, setContact] = useState(
    {
      email: "",
      phone: "",
      website: "",
      address: ""
    }
  )

  const [education, setEducation] = useState([
    { degree: "", institution: "", year: "" },
  ]);

  const [skills, setSkills] = useState([{ skillName: "" }]);

  const [experience, setExperience] = useState([
    { jobTitle: "", company: "", years: "" },
  ]);

  return (
    <>
      <Header />
      <main>
        <div className="form-container">
          <PersonalDetails personal={personal} setPersonal={setPersonal} />
          <Education education={education} setEducation={setEducation} />
          <Skills skills={skills} setSkills={setSkills} />
          <Experience experience={experience} setExperience={setExperience} />
        </div>
        <div className="form-preview">
          <Preview
            personal={personal}
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
