import { Contact } from "./PreviewContact";
import { Education } from "./PreviewEducation";
import { Skills } from "./PreviewSkills";
import { Personal } from "./PreviewPersonal";
import { Experience } from "./PreviewExperience";
import { Profile } from "./PreviewProfile";

export default function Preview({ personal, contact, education, experience, skills }) {
  return (
    <>
      <div className="preview-header">
        <Personal personal={personal} />
        <Profile />
      </div>

      <div className="preview-main">
        <div className="preview-side">
          <Contact contact={contact} />
          {/* <Profile /> */}
          <Education education={education} />
          <Skills skills={skills} />
        </div>

        <div className="preview-right">
          <Experience experience={experience} />
        </div>
      </div>
    </>
  );
}