import { useState } from "react";
import { ArrowUpIcon, ArrowDownIcon } from "../Icons";

export function PersonalDetails({ isActive, onShow, personal, setPersonal }) {

  // const [isOpen, setIsOpen] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setPersonal((prev) => ({ ...prev, [name]: value }));
  }

  function handleClick() {
    setIsOpen((prev) => !prev);
  }

  return (
    <section className="form-section" >
      <p onClick={onShow}>📝 Personal Details {isActive ? (<ArrowUpIcon size={20} />) : (<ArrowDownIcon size={20} />)}</p>
      {isActive ? (
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
