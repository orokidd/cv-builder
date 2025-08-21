import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { PersonalDetails } from "./components/form/PersonalDetails";
import Education from "./components/form/Education";
import Skills from "./components/form/Skills";
import Experience from "./components/form/Experience";
import Preview from "./components/preview/preview";

function App() {
  const [personal, setPersonal] = useState({});
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);

  return (
    <>
      <Header />
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
    </>
  );
}

export default App;
