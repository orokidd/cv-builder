import { forwardRef } from "react";
import { Contact } from "./PreviewContact";
import { Education } from "./PreviewEducation";
import { Skills } from "./PreviewSkills";
import { Personal } from "./PreviewPersonal";
import { Experience } from "./PreviewExperience";
import { Profile } from "./PreviewProfile";

// Wrap in forwardRef
const Preview = forwardRef(function Preview({ personal, contact, education, experience, skills }, ref) {
  return (
    <div className="preview-wrapper">
      <div className="form-preview" ref={ref}>
        <div className="preview-header">
          <Personal personal={personal} />
          <Profile personal={personal} />
        </div>
        <div className="preview-main">
          <div className="preview-side">
            <Contact contact={contact} />
            <Education education={education} />
            <Skills skills={skills} />
          </div>
          <div className="preview-right">
            <Experience experience={experience} />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Preview;
