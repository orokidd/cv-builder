import { ResetIcon, EditIcon, DocumentIcon } from "./Icons";

export default function Header({ isMobile, mode, setMode, onDownload, setPersonal, setContact, setEducation, setExperience, setSkills }) {
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

  function changeMode() {
    setMode((prev) => (prev === "edit" ? "preview" : "edit"));
  }

  return (
    <header className="header">
      <div className="header-content">
        <h1>CV Builder</h1>
        <div className="header-actions">
          <button className="preview-button" onClick={changeMode}>{isMobile && mode === "edit" ? <EditIcon size={20} /> : <DocumentIcon size={20} />}</button>
          <button className="reset-button" onClick={resetData}><ResetIcon size={20} color="rgba(0, 0, 0, 1)" /></button>
          <button className="download-button" onClick={onDownload}>Download PDF</button>
        </div>
      </div>
    </header>
  );
}
