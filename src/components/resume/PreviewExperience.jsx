export function Experience({ experience }) {
  return (
    <section className="preview-experience">
      <h2 className="section-title">Experience</h2>
      {experience.length === 0 ? (
        <>
          <h3>Company Name</h3>
          <p>Job Title (Years of Experience)</p>
        </>
      ) : (
        experience.map((exp, index) => (
          <div key={index} className="item">
            <div className="company">
              <h3>{exp.company || "Company name"}</h3>
              <h3>{exp.startDate} - {exp.endDate}</h3>
            </div>
            <p className="job-title">
              {exp.jobTitle || "Job title"}
            </p>

            {exp.description?.includes("-") ? (
              <ul className="job-description">
                {exp.description
                  .split("\n") // split by new line
                  .filter((line) => line.trim().startsWith("-")) // only lines starting with "-"
                  .map((line, i) => (
                    <li key={i}>{line.replace("-", "").trim()}</li>
                  ))}
              </ul>
            ) : (
              <p className="job-description">
                {exp.description || "Job description"}
              </p>
            )}
          </div>
        ))
      )}
    </section>
  );
}
