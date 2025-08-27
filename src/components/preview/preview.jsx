import { InboxIcon, PhoneIcon, GlobeIcon, HouseIcon } from "../Icons";

export default function Preview({
  personal,
  contact,
  education,
  experience,
  skills,
}) {
  return (
    <>
      <section className="preview-personal">
        <h1 className="preview-name">
          {personal.name || "Gregorius Deandra Hanifa"}
        </h1>
        <p>
          {personal.city || "Old York City"},{" "}
          {personal.state || "South West Madagascar"}
        </p>
      </section>

      <div className="preview-main">
        <div className="preview-side">
          <section className="preview-contacts">
            <h2>Contacts</h2>
            <div>
              <p>
                <InboxIcon size={22} /> {contact.email || "Your Email"}
              </p>
              <p>
                <PhoneIcon size={22} /> {contact.phone || "Your Phone"}
              </p>
              <p>
                <GlobeIcon size={22} /> {contact.website || "Your Website"}
              </p>
              <p>
                <HouseIcon size={22} /> {contact.address || "Your Address"}
              </p>
            </div>
          </section>
          <section className="preview-education">
            <h2>Education</h2>
            {education.length === 0 ? (
              <>
                <h3>Institution Name</h3>
                <p>Degree (Year)</p>
              </>
            ) : (
              education.map((edu, index) => (
                <div key={index}>
                  <h3>{edu.institution || "Institution Name"}</h3>
                  <p>
                    {edu.degree || "Degree"} ({edu.year || "Year"})
                  </p>
                </div>
              ))
            )}
          </section>
          <section className="preview-skills">
            <h2>Skills</h2>
            {skills.length === 0 ? (
              <ul>
                <li>Skill name</li>
              </ul>
            ) : (
              <ul>
              {skills.map((skill, index) => (
                <li key={index}>{skill.skillName || "Skill Name"}</li>
              ))}
              </ul>
            )}
          </section>
        </div>

        <div className="preview-right">
          <section className="preview-experience">
  <h2>Experience</h2>
  {experience.length === 0 ? (
    <>
      <h3>Company Name</h3>
      <p>Job Title (Years of Experience)</p>
    </>
  ) : (
    experience.map((experience, index) => (
      <div key={index} className="item">
        <div className="company">
          <h3>{experience.company || "Company name"}</h3>
          <h3>{experience.years || "Years of Experience"}</h3>
        </div>
        <p className="job-title">{experience.jobTitle || "Job title"}</p>

        {experience.description?.includes("-") ? (
          <ul className="job-description">
            {experience.description
              .split("\n") // split by new line
              .filter(line => line.trim().startsWith("-")) // only lines starting with "-"
              .map((line, i) => (
                <li key={i}>{line.replace("-", "").trim()}</li>
              ))}
          </ul>
        ) : (
          <p className="job-description">
            {experience.description || "Job description"}
          </p>
        )}
      </div>
    ))
  )}
</section>
        </div>
      </div>
    </>
  );
}
