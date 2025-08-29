import { Contact } from "./Contact";
import { Education } from "./Education";
import { Skills } from "./Skills";
import { Personal } from "./Personal";
import { Experience } from "./Experience";
import { Profile } from "./Profile";

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