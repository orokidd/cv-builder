import { useState } from "react";

export function PersonalDetails({ personal, setPersonal }) {

  const [isOpen, setIsOpen] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setPersonal((prev) => ({ ...prev, [name]: value }));
  }

  function handleClick() {
    setIsOpen((prev) => !prev);
  }

  return (
    <section className="form-section" onClick={handleClick}>
      <h2>Personal Details {isOpen ? "▲" : "▼"}</h2>
      {isOpen ? (
      <form className="form-personal">
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
      </form>) : null}
    </section>
  );
}
