// Preview.jsx
import React from "react";

export default function Preview({ personal, education, experience, skills }) {
  return (
    <div>
      <h2>Preview</h2>
      <section>
        <h3>Personal Details</h3>
        <p>Name: {personal.name}</p>
        <p>Email: {personal.email}</p>
        <p>Phone: {personal.phone}</p>
        <p>City: {personal.city}</p>
        <p>State: {personal.state}</p>
      </section>
      <section>
        <h3>Education</h3>
        {education.map((edu, index) => (
          <div key={index}>
            <p>Degree: {edu.degree}</p>
            <p>Institution: {edu.institution}</p>
            <p>Year of Graduation: {edu.year}</p>
          </div>
        ))}
      </section>
      <section>
        <h3>Skills</h3>
        {skills.map((skill, index) => (
          <div key={index}>
            <p>Skill: {skill.skillName}</p>
          </div>
        ))}
      </section>
      <section>
        <h3>Experience</h3>
        <p>Job Title: {experience.jobTitle}</p>
        <p>Company: {experience.company}</p>
        <p>Years of Experience: {experience.years}</p>
      </section>
    </div>
  );
}
