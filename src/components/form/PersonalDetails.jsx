import { useState } from "react";
import { ArrowUpIcon, ArrowDownIcon } from "../Icons";

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
    <section className="form-section" >
      <h2 onClick={handleClick}>📝 Personal Details {isOpen ? (<ArrowUpIcon size={20} />) : (<ArrowDownIcon size={20} />)}</h2>
      {isOpen ? (
      <form className="form-personal">
        <label>
          Name:
          <input type="text" value={personal.name || ""} name="name" onChange={handleChange} />
        </label>  
        <label>
          City:
          <input type="text" value={personal.city || ""} name="city" onChange={handleChange} />
        </label>
        <label>
          State:
          <input type="text" value={personal.state || ""} name="state" onChange={handleChange} />
        </label>
        <label>
          Profile:
          <textarea name="profile" value={personal.profile || ""} placeholder="" onChange={handleChange}/>
        </label>
      </form>) : null}
    </section>
  );
}
