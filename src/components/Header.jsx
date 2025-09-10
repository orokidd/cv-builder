import { ResetIcon, EditIcon, DocumentIcon, DownloadIcon } from "./Icons";

export default function Header({ isMobile, mode, setMode, onDownload, resetData }) {
  function changeMode() {
    setMode((prev) => (prev === "edit" ? "preview" : "edit"));
  }

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">CV Builder</h1>
        <div className="header-actions">
          <button className="preview-button" onClick={changeMode}>{isMobile && mode === "edit" ? <DocumentIcon size={20} /> : <EditIcon size={20} />}</button>
          <button className="reset-button" onClick={resetData}><ResetIcon size={20} color="rgba(0, 0, 0, 1)" /></button>
          <button className="download-button" onClick={onDownload}><DownloadIcon size={20} /></button>
        </div>
      </div>
    </header>
  );
}
