import { ResetIcon, EditIcon } from "./Icons";

export default function Header({ onDownload, setPersonal, setContact, setEducation, setExperience, setSkills }) {
  function resetData() {
    setPersonal({
      name: "",
      city: "",
      state: "",
      profile: "",
    });
    setContact({
      email: "",
      phone: "",
      website: "",
      address: "",
    });
    setEducation([]);
    setExperience([]);
    setSkills([]);
  }

  return (
    <header className="header">
      <div className="header-content">
        <h1>CV Builder</h1>
        <div className="header-actions">
          <button className="preview-button"><EditIcon size={20} /></button>
          <button className="reset-button" onClick={resetData}><ResetIcon size={20} color="rgba(0, 0, 0, 1)" /></button>
          <button className="download-button" onClick={onDownload}>Download PDF</button>
        </div>
      </div>
    </header>
  );
}
