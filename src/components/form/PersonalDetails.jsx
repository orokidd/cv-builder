import React from "react";

export function PersonalDetails({ personal, setPersonal }) {
  function handleChange(e) {
    const { name, value } = e.target;
    setPersonal((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <section>
      <h2>Personal Details</h2>
      <form>
        <label>
          Name:
          <input type="text" value={personal.name || ""} name="name" onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" value={personal.email || ""} name="email" onChange={handleChange} />
        </label>
        <label>
          Phone:
          <input type="tel" value={personal.phone || ""} name="phone" onChange={handleChange} />
        </label>
        <label>
          City:
          <input type="text" value={personal.city || ""} name="city" onChange={handleChange} />
        </label>
        <label>
          State:
          <input type="text" value={personal.state || ""} name="state" onChange={handleChange} />
        </label>
      </form>
    </section>
  );
}
