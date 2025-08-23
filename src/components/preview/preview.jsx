export default function Preview({ personal, contact, education, experience, skills }) {
  return (
    <>
      <section className="preview-personal">
        <h1 className="preview-name">{personal.name || "Gregorius Deandra Hanifa"}</h1>
        <p>
          {personal.city || "Old York City"}, {personal.state || "South West Madagascar"}
        </p>
      </section>

      <div className="preview-main">

        <div className="preview-side">

          <section className="preview-contacts">
            <h2>Contacts</h2>
              <div>
                <p>Email: {contact.email || "Your Email"}</p>
                <p>Phone: {contact.phone || "Your Phone"}</p>
                <p>Website: {contact.website || "Your Website"}</p>
                <p>Address: {contact.address || "Your Address"}</p>
              </div>
            
          </section>
          <section className="preview-education">
            <h2>Education</h2>
            {education.map((edu, index) => (
              <div key={index}>
                <h3>{edu.institution || "Institution Name"}</h3>
                <p>{edu.degree || "Degree"} ({edu.year || "Year"})</p>
              </div>
            ))}
          </section>
          <section className="preview-skills">
            <h2>Skills</h2>
            {skills.map((skill, index) => (
              <div key={index}>
                <ul>
                  <li>{skill.skillName || "Skill Name"}</li>
                </ul>
              </div>
            ))}
          </section>
        </div>

        <div className="preview-right">
          <section className="preview-experience">
            <h2>Experience</h2>
            {experience.map((experience, index) => (
              <div key={index}>
                <h3>{experience.company || "Company name"}</h3>
                <p>{experience.jobTitle || "Job title"} ({experience.years || "Years of Experience"})</p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </>
  );
}
