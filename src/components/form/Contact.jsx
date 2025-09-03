import { ArrowUpIcon, ArrowDownIcon } from "../Icons";

export function Contact({ isActive, onShow, contact, setContact }) {

  function handleChange(e) {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <section className="form-section" >
      <p onClick={onShow}>📞 Contact {isActive ? (<ArrowUpIcon size={20} />) : (<ArrowDownIcon size={20} />)}</p>
      {isActive ? (
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
