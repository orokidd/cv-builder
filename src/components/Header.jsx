export default function Header({ onDownload }) {
  return (
    <header className="header">
      <h1>CV Builder</h1>
      <button onClick={onDownload}>Download PDF</button>
    </header>
  );
}