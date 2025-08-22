// Preview.jsx
import React from "react";

export default function Preview({ personal, contact, education, experience, skills }) {
  return (
    <>
      <section className="preview-personal">
        <h1>{personal.name || "Your Name"}</h1>
        <p>
          {personal.city || "Your City"}, {personal.state || "Your State"}
        </p>
      </section>

      <div className="preview-main">

        <div className="preview-side">

          <section className="preview-contacts">
            <h2>Contacts</h2>
              <div>
                <p>Email: {contact.email}</p>
                <p>Phone: {contact.phone}</p>
                <p>Website: {contact.website}</p>
                <p>Address: {contact.address}</p>
              </div>
            
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
