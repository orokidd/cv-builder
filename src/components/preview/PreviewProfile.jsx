export function Profile({ personal }) {
  return (
    <section className="preview-profile">
      <h2>Profile</h2>
      <p>{personal.profile}</p>
    </section>
  );
}
