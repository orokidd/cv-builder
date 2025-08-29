import { Contact } from "./Contact";
import { Education } from "./Education";
import { Skills } from "./Skills";
import { Personal } from "./Personal";

export default function Preview({
  personal,
  contact,
  education,
  experience,
  skills,
}) {
  return (
    <>
      <div className="preview-header">
        <Personal personal={personal} />
      </div>

      <div className="preview-main">
        <div className="preview-side">
          <Contact contact={contact} />
          <Education education={education} />
          <Skills skills={skills} />
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
                  <p className="job-title">
                    {experience.jobTitle || "Job title"}
                  </p>

                  {experience.description?.includes("-") ? (
                    <ul className="job-description">
                      {experience.description
                        .split("\n") // split by new line
                        .filter((line) => line.trim().startsWith("-")) // only lines starting with "-"
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
