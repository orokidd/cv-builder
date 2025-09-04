export function Personal({ personal }) {
  return (
    <section className="preview-personal">
      <h1 className="preview-name">
        {personal.name || "Your Name"}
      </h1>
      <p style={{ whiteSpace: "pre", fontWeight: 600 }}>{personal.city || "Some City"}, {personal.state || "Some State"}</p>
    </section>
  );
}
