export function Personal({ personal }) {
  return (
    <section className="preview-personal">
      <h1 className="preview-name">
        {personal.name || "Gregorius Deandra Hanifa"}
      </h1>
      <p style={{ whiteSpace: "pre" }}>{personal.email}  {personal.phone}  {personal.city || "Old York City"},{" "}{personal.state || "South West Madagascar"}</p>
    </section>
  );
}
