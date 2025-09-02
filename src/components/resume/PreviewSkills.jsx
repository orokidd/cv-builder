export function Skills({ skills }) {
  return (
    <section className="preview-skills">
      <h2 className="section-title">Skills</h2>
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
  );
}