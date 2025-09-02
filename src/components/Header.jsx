export default function Header({ onDownload }) {
  return (
    <header className="header">
      <div className="header-content">
        <h1>CV Builder</h1>
        <button className="download-button" onClick={onDownload}>Download PDF</button>
      </div>
    </header>
  );
}
