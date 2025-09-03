import {InboxIcon2, PhoneIcon2, GlobeIcon2, LocationPin } from "../Icons";

export function Contact({ contact }) {
  return (
    <section className="preview-contacts">
      <h2 className="section-title">Contact</h2>
        <p>
          <InboxIcon2 size={24} /> {contact.email || "Your Email"}
        </p>
        <p>
          <PhoneIcon2 size={24}/> {contact.phone || "Your Phone"}
        </p>
        <p>
          <GlobeIcon2 size={24} /> {contact.website || "Your Website"}
        </p>
        <p>
          <LocationPin size={24} /> {contact.address || "Your Address"}
        </p>
    </section>
  );
}
