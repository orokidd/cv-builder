// Preview.jsx
import React from "react";

export default function Preview({ personal, education, experience, skills }) {
  return (
    <>
      <section className="preview-personal">
        <h1>{personal.name || "Your Name"}</h1>
        {/* <p>Email: {personal.email}</p> */}
        {/* <p>Phone: {personal.phone}</p> */}
        <p>
          {personal.city || "Your City"}, {personal.state || "Your State"}
        </p>
      </section>
      <div className="preview-main">
        <div className="preview-side">
          <section className="preview-contacts">
            <h2>Contacts</h2>
            {education.map((edu, index) => (
              <div key={index}>
                <p>Email: {edu.degree}</p>
                <p>Phone: {edu.institution}</p>
                <p>Website: {edu.year}</p>
                <p>Address: {edu.year}</p>
              </div>
            ))}
          </section>
          <section className="preview-education">
            <h2>Education</h2>
            {education.map((edu, index) => (
              <div key={index}>
                <p>Degree: {edu.degree}</p>
                <p>Institution: {edu.institution}</p>
                <p>Year of Graduation: {edu.year}</p>
              </div>
            ))}
          </section>
          <section className="preview-skills">
            <h2>Skills</h2>
            {skills.map((skill, index) => (
              <div key={index}>
                <p>Skill: {skill.skillName}</p>
              </div>
            ))}
          </section>
        </div>
        <div className="preview-right">
          <section className="preview-experience">
            <h2>Experience</h2>
            <p>Job Title: {experience.jobTitle}</p>
            <p>Company: {experience.company}</p>
            <p>Years of Experience: {experience.years}</p>
          </section>
        </div>
      </div>
    </>
  );
}
