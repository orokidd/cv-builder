import { InboxIcon, PhoneIcon, GlobeIcon, HouseIcon } from "../Icons";

export function Contact({ contact }) {
  return (
    <section className="preview-contacts">
      <h2>Contact</h2>
        <p>
          <InboxIcon size={22} /> {contact.email || "Your Email"}
        </p>
        <p>
          <PhoneIcon size={22} /> {contact.phone || "Your Phone"}
        </p>
        <p>
          <GlobeIcon size={22} /> {contact.website || "Your Website"}
        </p>
        <p>
          <HouseIcon size={22} /> {contact.address || "Your Address"}
        </p>
    </section>
  );
}
