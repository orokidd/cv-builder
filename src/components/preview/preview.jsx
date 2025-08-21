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
            </section>
            <section>
                <h3>Education</h3>
                <p>Degree: {education.degree}</p>
                <p>Institution: {education.institution}</p>
                <p>Year of Graduation: {education.year}</p>
            </section>
            <section>
                <h3>Skills</h3>
                <p>Skill: {skills.skill}</p>
                <p>Proficiency: {skills.proficiency}</p>
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
