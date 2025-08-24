import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { PersonalDetails } from "./components/form/PersonalDetails";
import Education from "./components/form/Education";
import Skills from "./components/form/Skills";
import Experience from "./components/form/Experience";
import Preview from "./components/preview/preview";
import { Contact } from "./components/form/Contact";

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

  const [education, setEducation] = useState([]);

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
          <Contact contact={contact} setContact={setContact} />
          <Education education={education} setEducation={setEducation} />
          <Skills skills={skills} setSkills={setSkills} />
          <Experience experience={experience} setExperience={setExperience} />
        </div>
        <div className="form-preview">
          <Preview
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
