import { useState } from "react";

export function Contact({ contact, setContact }) {

  const [isOpen, setIsOpen] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  }

  function handleClick() {
    setIsOpen((prev) => !prev);
  }

  return (
    <section className="form-section" >
      <h2 onClick={handleClick}>Contact {isOpen ? "▲" : "▼"}</h2>
      {isOpen ? (
      <form className="form-personal">
        <label>
          Email:
          <input type="email" value={contact.email || ""} name="email" onChange={handleChange} />
        </label>
        <label>
          Phone:
          <input type="tel" value={contact.phone || ""} name="phone" onChange={handleChange} />
        </label>
        <label>
          Website:
          <input type="url" value={contact.website || ""} name="website" onChange={handleChange} />
        </label>
        <label>
          Address:
          <input type="text" value={contact.address || ""} name="address" onChange={handleChange} />
        </label>
      </form>) : null}
    </section>
  );
}
