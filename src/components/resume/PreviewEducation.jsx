export function Education({ education }) {
  return (
    <section className="preview-education">
      <h2 className="section-title">Education</h2>
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
  );
}